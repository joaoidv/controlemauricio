import { useEffect, useState, useCallback, useRef } from "react";
import type { ActionState, MeetingState, FourHourWeek } from "./dashboard-data";
import { CLIENTS, WEEK_STARTS, actionsForClient } from "./dashboard-data";
import { supabase } from "@/integrations/supabase/client";

const KEY = "gt-dashboard-v1";
const ROW_ID = "main";

export type SyncStatus = "idle" | "saving" | "saved" | "error";

export interface ClientEntry {
  id: string;
  name: string;
}

export interface StoreShape {
  managerName: string;
  clients: ClientEntry[];
  actions: Record<string, ActionState>;
  meetings: Record<string, MeetingState>;
  fourHour: Record<string, FourHourWeek[]>; // client id -> weeks
  clientExtras: Record<
    string,
    {
      indication?: boolean;
      indicationNote?: string;
      testimonial?: boolean;
      testimonialNote?: string;
    }
  >;
}

function emptyMeeting(): MeetingState {
  return { done: false, report: false, audio: false, joaoNotified: false };
}

function emptyFourHour(): FourHourWeek[] {
  return WEEK_STARTS.map((w) => ({ weekStart: w, fails: {} }));
}

export const DEFAULT_MANAGER = "Richard";

function emptyExtras() {
  return { indication: false, indicationNote: "", testimonial: false, testimonialNote: "" };
}

function defaultState(): StoreShape {
  const fourHour: Record<string, FourHourWeek[]> = {};
  const meetings: Record<string, MeetingState> = {};
  const clientExtras: StoreShape["clientExtras"] = {};
  for (const c of CLIENTS) {
    fourHour[c] = emptyFourHour();
    meetings[c] = emptyMeeting();
    clientExtras[c] = emptyExtras();
  }
  return {
    managerName: DEFAULT_MANAGER,
    clients: CLIENTS.map((c) => ({ id: c, name: c })),
    actions: {},
    meetings,
    fourHour,
    clientExtras,
  };
}

function normalize(parsed: unknown): StoreShape {
  const base = defaultState();
  const merged: StoreShape = { ...base, ...(parsed as Partial<StoreShape>) };
  if (!Array.isArray(merged.clients) || merged.clients.length === 0) {
    merged.clients = base.clients;
  }
  if (typeof merged.managerName !== "string" || !merged.managerName.trim()) {
    merged.managerName = DEFAULT_MANAGER;
  }
  if (!merged.actions) merged.actions = {};
  if (!merged.meetings) merged.meetings = {};
  if (!merged.fourHour) merged.fourHour = {};
  if (!merged.clientExtras) merged.clientExtras = {};
  for (const c of merged.clients) {
    if (!merged.meetings[c.id]) merged.meetings[c.id] = emptyMeeting();
    if (!merged.fourHour[c.id]) merged.fourHour[c.id] = emptyFourHour();
    if (!merged.clientExtras[c.id]) merged.clientExtras[c.id] = emptyExtras();
  }
  return merged;
}

export function useDashboardStore() {
  const [state, setState] = useState<StoreShape>(() => defaultState());
  const [hydrated, setHydrated] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("idle");
  // Serialized snapshot of what the cloud already has, to avoid echo-saving
  const lastSyncedRef = useRef<string | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initial load: cloud first, localStorage as fallback / offline cache
  useEffect(() => {
    let cancelled = false;

    (async () => {
      let localState: StoreShape | null = null;
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) localState = normalize(JSON.parse(raw));
      } catch {}

      const { data, error } = await supabase
        .from("dashboard_state")
        .select("data")
        .eq("id", ROW_ID)
        .maybeSingle();

      if (cancelled) return;

      if (!error && data?.data && Object.keys(data.data as object).length > 0) {
        const remote = normalize(data.data);
        lastSyncedRef.current = JSON.stringify(remote);
        setState(remote);
        setSyncStatus("saved");
      } else if (localState) {
        setState(localState);
      }
      setHydrated(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-save (debounced) to cloud + local cache
  useEffect(() => {
    if (!hydrated) return;
    const serialized = JSON.stringify(state);
    try {
      localStorage.setItem(KEY, serialized);
    } catch {}
    if (serialized === lastSyncedRef.current) return;

    setSyncStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const { error } = await supabase
        .from("dashboard_state")
        .upsert(
          { id: ROW_ID, data: JSON.parse(serialized), updated_at: new Date().toISOString() },
          { onConflict: "id" },
        );
      if (error) {
        setSyncStatus("error");
        return;
      }
      lastSyncedRef.current = serialized;
      setSyncStatus("saved");
    }, 700);

    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [state, hydrated]);

  // Realtime: apply changes made from other devices/abas
  useEffect(() => {
    if (!hydrated) return;
    const channel = supabase
      .channel("dashboard_state_sync")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "dashboard_state", filter: `id=eq.${ROW_ID}` },
        (payload) => {
          const incoming = (payload.new as { data?: unknown } | null)?.data;
          if (!incoming) return;
          const normalized = normalize(incoming);
          const serialized = JSON.stringify(normalized);
          if (serialized === lastSyncedRef.current) return;
          lastSyncedRef.current = serialized;
          setState(normalized);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [hydrated]);


  const update = useCallback((fn: (s: StoreShape) => StoreShape) => {
    setState((prev) => fn(structuredClone(prev)));
  }, []);

  const addClient = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      setState((prev) => {
        const next = structuredClone(prev);
        const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        next.clients.push({ id, name: trimmed });
        // Cria todas as tarefas do cliente novo
        next.meetings[id] = emptyMeeting(); // reunião mensal
        next.fourHour[id] = emptyFourHour(); // regra 4h
        next.clientExtras[id] = emptyExtras(); // indicação + depoimento
        for (const a of actionsForClient(id)) {
          // ações semanais
          if (!next.actions[a.id]) next.actions[a.id] = { status: "pending" };
        }
        return next;
      });
    },
    [],
  );

  const renameClient = useCallback((id: string, name: string) => {
    setState((prev) => {
      const next = structuredClone(prev);
      const c = next.clients.find((x) => x.id === id);
      if (c) c.name = name;
      return next;
    });
  }, []);

  const removeClient = useCallback((id: string) => {
    setState((prev) => {
      const next = structuredClone(prev);
      next.clients = next.clients.filter((c) => c.id !== id);
      delete next.meetings[id];
      delete next.fourHour[id];
      delete next.clientExtras[id];
      return next;
    });
  }, []);

  const setManagerName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, managerName: name }));
  }, []);

  return {
    state,
    syncStatus,
    update,
    hydrated,
    addClient,
    renameClient,
    removeClient,
    setManagerName,
  };
}
