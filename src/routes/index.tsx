import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  LayoutDashboard,
  ListChecks,
  Clock,
  CalendarCheck2,
  Users,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Gift,
  MessageSquareQuote,
  Plus,
  Pencil,
  Trash2,
  Check,
  X,
  UserCog,
} from "lucide-react";
import vicconMark from "@/assets/viccon-mark.png.asset.json";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  actionsForClient,
  DISCOUNT_VALUE,
  MEETING_DEADLINE,
  MONTH_LABEL,
  type ActionStatus,
  type WeeklyAction,
} from "@/lib/dashboard-data";
import { useDashboardStore, type SyncStatus } from "@/lib/dashboard-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viccon · Painel do Gestor de Tráfego — Agosto/2026" },
      {
        name: "description",
        content:
          "Painel Viccon para o controle mensal de ações, reunião de alinhamento, regra 4h, indicações e depoimentos do gestor de tráfego.",
      },
      { property: "og:title", content: "Viccon · Painel do Gestor de Tráfego — Agosto/2026" },
      {
        property: "og:description",
        content:
          "Painel Viccon para o controle mensal de ações, reunião de alinhamento, regra 4h, indicações e depoimentos do gestor de tráfego.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

type Tab = "overview" | "actions" | "fourh" | "meetings" | "clients";

function Dashboard() {
  const store = useDashboardStore();
  const { state, update, hydrated, addClient, renameClient, removeClient, setManagerName, syncStatus } = store;
  const [tab, setTab] = useState<Tab>("overview");
  const [clientFilter, setClientFilter] = useState<string>("all");

  const clients = state.clients;

  const stats = useMemo(() => {
    let done = 0;
    let missed = 0;
    let pending = 0;
    const missedByClient: Record<string, number> = {};
    const doneByClient: Record<string, number> = {};
    const activeIds = new Set(clients.map((c) => c.id));
    const allActions = clients.flatMap((c) => actionsForClient(c.id));
    for (const a of allActions) {
      if (!activeIds.has(a.client)) continue; // skip removed clients
      const s = state.actions[a.id]?.status ?? "pending";
      if (s === "done") done++;
      else if (s === "missed") missed++;
      else pending++;
      missedByClient[a.client] = (missedByClient[a.client] ?? 0) + (s === "missed" ? 1 : 0);
      doneByClient[a.client] = (doneByClient[a.client] ?? 0) + (s === "done" ? 1 : 0);
    }
    const totalActions = allActions.length;

    let fourHFails = 0;
    const fourHByClient: Record<string, number> = {};
    for (const c of clients) {
      const weeks = state.fourHour[c.id] ?? [];
      let n = 0;
      for (const w of weeks) n += Object.values(w.fails).filter(Boolean).length;
      fourHByClient[c.id] = n;
      fourHFails += n;
    }

    const meetingsDone = clients.filter((c) => state.meetings[c.id]?.done).length;
    const indications = clients.filter((c) => state.clientExtras[c.id]?.indication).length;
    const testimonials = clients.filter((c) => state.clientExtras[c.id]?.testimonial).length;

    const totalDiscount = (missed + fourHFails) * DISCOUNT_VALUE;

    return {
      done,
      missed,
      pending,
      totalActions,
      missedByClient,
      doneByClient,
      fourHFails,
      fourHByClient,
      meetingsDone,
      indications,
      testimonials,
      totalDiscount,
      clientCount: clients.length,
    };
  }, [state, clients]);

  if (!hydrated) return <div className="min-h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar tab={tab} setTab={setTab} managerName={state.managerName} />
      <main className="flex-1 min-w-0">
        <Header
          stats={stats}
          managerName={state.managerName}
          setManagerName={setManagerName}
          syncStatus={syncStatus}
        />
        <div className="px-6 lg:px-10 pb-16 max-w-[1400px] mx-auto">
          {tab === "overview" && <OverviewTab stats={stats} state={state} clients={clients} />}
          {tab === "actions" && (
            <ActionsTab
              state={state}
              update={update}
              clients={clients}
              clientFilter={clientFilter}
              setClientFilter={setClientFilter}
            />
          )}
          {tab === "fourh" && <FourHourTab state={state} update={update} clients={clients} />}
          {tab === "meetings" && <MeetingsTab state={state} update={update} clients={clients} />}
          {tab === "clients" && (
            <ClientsTab
              state={state}
              stats={stats}
              update={update}
              clients={clients}
              addClient={addClient}
              renameClient={renameClient}
              removeClient={removeClient}
            />
          )}
        </div>
      </main>
    </div>
  );
}

/* ---------------- Sidebar ---------------- */

function Sidebar({
  tab,
  setTab,
  managerName,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
  managerName: string;
}) {
  const items: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "overview", label: "Visão geral", icon: LayoutDashboard },
    { id: "actions", label: "Ações semanais", icon: ListChecks },
    { id: "fourh", label: "Regra 4h", icon: Clock },
    { id: "meetings", label: "Reunião mensal", icon: CalendarCheck2 },
    { id: "clients", label: "Clientes", icon: Users },
  ];
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground sticky top-0 h-screen border-r border-white/5">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden shadow-[var(--shadow-glow)]">
            <img src={vicconMark.url} alt="Viccon" className="h-8 w-8 object-contain" />
          </div>
          <div>
            <div className="text-base font-semibold leading-tight tracking-[0.24em]">VICCON</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-sidebar-muted mt-0.5">
              Tráfego · {MONTH_LABEL}
            </div>
          </div>
        </div>
        {managerName && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2">
            <UserCog className="h-3.5 w-3.5 text-sidebar-muted" />
            <div className="min-w-0">
              <div className="text-[9px] uppercase tracking-[0.18em] text-sidebar-muted">
                Gestor
              </div>
              <div className="text-xs font-medium truncate">{managerName}</div>
            </div>
          </div>
        )}
      </div>
      <nav className="px-3 flex-1 space-y-1">
        {items.map((it) => {
          const Icon = it.icon;
          const active = tab === it.id;
          return (
            <button
              key={it.id}
              onClick={() => setTab(it.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                active
                  ? "bg-white/10 text-white font-medium"
                  : "text-sidebar-muted hover:text-white hover:bg-white/5",
              )}
            >
              <Icon className="h-4 w-4" />
              {it.label}
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
            </button>
          );
        })}
      </nav>
      <div className="p-4 m-3 rounded-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-90" style={{ background: "var(--gradient-brand)" }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
            Desconto por falha
          </div>
          <div className="text-2xl font-semibold mt-1 text-white">R$ {DISCOUNT_VALUE},00</div>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- Header ---------------- */

interface Stats {
  done: number;
  missed: number;
  pending: number;
  totalActions: number;
  missedByClient: Record<string, number>;
  doneByClient: Record<string, number>;
  fourHFails: number;
  fourHByClient: Record<string, number>;
  meetingsDone: number;
  indications: number;
  testimonials: number;
  totalDiscount: number;
  clientCount: number;
}

function SyncBadge({ status }: { status: SyncStatus }) {
  const map: Record<SyncStatus, { label: string; dot: string }> = {
    idle: { label: "Sincronizado", dot: "bg-muted-foreground/50" },
    saving: { label: "Salvando…", dot: "bg-amber-400 animate-pulse" },
    saved: { label: "Salvo na nuvem", dot: "bg-emerald-400" },
    error: { label: "Falha ao salvar", dot: "bg-red-500" },
  };
  const s = map[status];
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5">
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      <span className="text-[11px] text-muted-foreground">{s.label}</span>
    </div>
  );
}

function Header({
  stats,
  managerName,
  setManagerName,
  syncStatus,
}: {
  stats: Stats;
  managerName: string;
  setManagerName: (v: string) => void;
  syncStatus: SyncStatus;
}) {
  const completionPct = stats.totalActions
    ? Math.round((stats.done / stats.totalActions) * 100)
    : 0;
  return (
    <div className="border-b border-white/5 bg-card/70 backdrop-blur-xl sticky top-0 z-10">
      <div className="px-6 lg:px-10 py-5 max-w-[1400px] mx-auto flex flex-wrap items-center gap-4 justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-1">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
            Viccon · Assessoria de Tecnologia & Vendas
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Controle do gestor de tráfego
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Referência: <span className="font-medium text-foreground">{MONTH_LABEL}</span>
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <SyncBadge status={syncStatus} />
          <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 pl-3 pr-1 py-1">
            <UserCog className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                Gestor de tráfego
              </span>
              <input
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                placeholder="Nome do gestor"
                className="bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground/60 w-44"
              />
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
              Conclusão do mês
            </div>
            <div className="text-xl font-semibold">{completionPct}%</div>
          </div>
          <div className="w-40">
            <Progress value={completionPct} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Overview ---------------- */

function OverviewTab({
  stats,
  state,
  clients,
}: {
  stats: Stats;
  state: ReturnType<typeof useDashboardStore>["state"];
  clients: ReturnType<typeof useDashboardStore>["state"]["clients"];
}) {
  return (
    <div className="pt-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          label="Ações concluídas"
          value={`${stats.done}/${stats.totalActions}`}
          icon={CheckCircle2}
          tone="success"
          hint={`${stats.pending} pendentes`}
        />
        <KpiCard
          label="Ações não executadas"
          value={String(stats.missed)}
          icon={XCircle}
          tone="danger"
          hint="Geram desconto"
        />
        <KpiCard
          label="Falhas regra 4h"
          value={String(stats.fourHFails)}
          icon={AlertCircle}
          tone="warning"
        />
        <KpiCard
          label="Desconto total"
          value={`R$ ${stats.totalDiscount},00`}
          icon={TrendingDown}
          tone="danger"
          hint={`R$ ${DISCOUNT_VALUE} por falha`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold">Desempenho por cliente</h2>
              <p className="text-xs text-muted-foreground">
                Ações concluídas x pendentes/não executadas
              </p>
            </div>
            <Badge variant="secondary">{clients.length} clientes</Badge>
          </div>
          <div className="space-y-4">
            {clients.map((c) => {
              const total = actionsForClient(c.id).length;
              const done = stats.doneByClient[c.id] ?? 0;
              const missed = stats.missedByClient[c.id] ?? 0;
              const pct = total ? (done / total) * 100 : 0;
              return (
                <div key={c.id}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-medium">{c.name}</span>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-success">{done} ok</span>
                      {missed > 0 && <span className="text-danger">{missed} falhas</span>}
                      <span>{total ? Math.round(pct) : 0}%</span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden flex">
                    {total > 0 ? (
                      <>
                        <div
                          className="bg-primary transition-all"
                          style={{ width: `${(done / total) * 100}%` }}
                        />
                        <div
                          className="bg-danger transition-all"
                          style={{ width: `${(missed / total) * 100}%` }}
                        />
                      </>
                    ) : (
                      <div className="w-full text-[10px] text-muted-foreground pl-2">
                        sem ações cadastradas
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck2 className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">Reuniões do mês</h3>
            </div>
            <div className="text-3xl font-semibold mt-2">
              {stats.meetingsDone}
              <span className="text-lg text-muted-foreground font-normal">
                {" "}/{clients.length}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Prazo: até {new Date(MEETING_DEADLINE).toLocaleDateString("pt-BR")}
            </p>
            <Progress
              className="mt-4"
              value={clients.length ? (stats.meetingsDone / clients.length) * 100 : 0}
            />
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">Indicações & depoimentos</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                  <Gift className="h-3 w-3" /> Indicações
                </div>
                <div className="text-2xl font-semibold mt-1">
                  {stats.indications}
                  <span className="text-sm text-muted-foreground font-normal">
                    /{clients.length}
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                  <MessageSquareQuote className="h-3 w-3" /> Depoimentos
                </div>
                <div className="text-2xl font-semibold mt-1">
                  {stats.testimonials}
                  <span className="text-sm text-muted-foreground font-normal">
                    /{clients.length}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mt-3">
              Registre em "Clientes" quem indicou alguém ou enviou depoimento no mês.
            </p>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] bg-[var(--gradient-hero)] text-white border-0">
            <div className="flex items-center gap-2 mb-1 opacity-90">
              <TrendingUp className="h-4 w-4" />
              <h3 className="font-semibold text-sm">Resumo financeiro</h3>
            </div>
            <div className="text-3xl font-semibold mt-2">R$ {stats.totalDiscount},00</div>
            <p className="text-xs opacity-90 mt-1">
              {stats.missed + stats.fourHFails} falhas registradas até o momento
            </p>
            <div className="mt-4 flex gap-2 text-[11px]">
              <span className="px-2 py-1 rounded-full bg-white/15">
                {stats.missed} ações
              </span>
              <span className="px-2 py-1 rounded-full bg-white/15">
                {stats.fourHFails} regra 4h
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  hint,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: "success" | "danger" | "warning" | "default";
}) {
  const toneClasses = {
    success: "bg-success/10 text-success",
    danger: "bg-danger/10 text-danger",
    warning: "bg-warning/15 text-warning-foreground",
    default: "bg-muted text-foreground",
  }[tone];
  return (
    <Card className="p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
          {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
        </div>
        <div className={cn("h-9 w-9 rounded-lg flex items-center justify-center", toneClasses)}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
}

/* ---------------- Actions Tab ---------------- */

function ActionsTab({
  state,
  update,
  clients,
  clientFilter,
  setClientFilter,
}: {
  state: ReturnType<typeof useDashboardStore>["state"];
  update: ReturnType<typeof useDashboardStore>["update"];
  clients: ReturnType<typeof useDashboardStore>["state"]["clients"];
  clientFilter: string;
  setClientFilter: (v: string) => void;
}) {
  const activeIds = useMemo(() => new Set(clients.map((c) => c.id)), [clients]);
  const nameById = useMemo(
    () => Object.fromEntries(clients.map((c) => [c.id, c.name])),
    [clients],
  );

  const filtered = useMemo(
    () =>
      clients
        .filter((c) => (clientFilter === "all" ? true : c.id === clientFilter))
        .flatMap((c) => actionsForClient(c.id)),
    [clientFilter, clients],
  );

  // group by client -> date
  const groups = useMemo(() => {
    const map = new Map<string, Map<string, WeeklyAction[]>>();
    for (const a of filtered) {
      if (!map.has(a.client)) map.set(a.client, new Map());
      const dm = map.get(a.client)!;
      if (!dm.has(a.date)) dm.set(a.date, []);
      dm.get(a.date)!.push(a);
    }
    return map;
  }, [filtered]);

  function setStatus(id: string, status: ActionStatus) {
    update((s) => {
      s.actions[id] = { ...(s.actions[id] ?? {}), status };
      return s;
    });
  }
  function setNote(id: string, note: string) {
    update((s) => {
      s.actions[id] = { ...(s.actions[id] ?? { status: "pending" }), note };
      return s;
    });
  }

  return (
    <div className="pt-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Ações semanais</h2>
          <p className="text-sm text-muted-foreground">
            Marque cada ação como concluída ou não executada. Cada falha gera R$ {DISCOUNT_VALUE} de desconto.
          </p>
        </div>
        <Select value={clientFilter} onValueChange={setClientFilter}>
          <SelectTrigger className="w-56">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os clientes</SelectItem>
            {clients.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {groups.size === 0 && (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Nenhuma ação cadastrada para este cliente. Você pode adicionar ou remover clientes na aba
          "Clientes".
        </Card>
      )}

      <div className="space-y-6">
        {Array.from(groups.entries()).map(([clientId, dm]) => (
          <Card key={clientId} className="p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{nameById[clientId] ?? clientId}</h3>
              <Badge variant="outline">
                {Array.from(dm.values()).flat().length} ações
              </Badge>
            </div>
            <div className="space-y-4">
              {Array.from(dm.entries()).map(([date, acts]) => (
                <div key={date}>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {new Date(date + "T00:00:00").toLocaleDateString("pt-BR", {
                      weekday: "long",
                      day: "2-digit",
                      month: "long",
                    })}
                  </div>
                  <div className="space-y-2">
                    {acts.map((a) => {
                      const st = state.actions[a.id]?.status ?? "pending";
                      const note = state.actions[a.id]?.note ?? "";
                      return (
                        <div
                          key={a.id}
                          className={cn(
                            "rounded-xl border p-3 flex flex-col gap-2 transition-colors",
                            st === "done" && "border-success/40 bg-success/5",
                            st === "missed" && "border-danger/40 bg-danger/5",
                            st === "pending" && "border-border bg-background",
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1 text-sm leading-relaxed">{a.action}</div>
                            <div className="flex gap-1 shrink-0">
                              <StatusBtn
                                active={st === "done"}
                                onClick={() => setStatus(a.id, st === "done" ? "pending" : "done")}
                                tone="success"
                                label="OK"
                              />
                              <StatusBtn
                                active={st === "missed"}
                                onClick={() =>
                                  setStatus(a.id, st === "missed" ? "pending" : "missed")
                                }
                                tone="danger"
                                label="Falhou"
                              />
                            </div>
                          </div>
                          {st === "missed" && (
                            <Input
                              placeholder="Observação (motivo, avisou o João, etc.)"
                              value={note}
                              onChange={(e) => setNote(a.id, e.target.value)}
                              className="h-8 text-xs"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StatusBtn({
  active,
  onClick,
  tone,
  label,
}: {
  active: boolean;
  onClick: () => void;
  tone: "success" | "danger";
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors",
        !active && "bg-background border-border text-muted-foreground hover:bg-muted",
        active && tone === "success" && "bg-success text-success-foreground border-success",
        active && tone === "danger" && "bg-danger text-danger-foreground border-danger",
      )}
    >
      {label}
    </button>
  );
}

/* ---------------- 4h Rule ---------------- */

const DAYS: Array<{ key: "seg" | "ter" | "qua" | "qui" | "sex"; label: string }> = [
  { key: "seg", label: "Seg" },
  { key: "ter", label: "Ter" },
  { key: "qua", label: "Qua" },
  { key: "qui", label: "Qui" },
  { key: "sex", label: "Sex" },
];

function FourHourTab({
  state,
  update,
  clients,
}: {
  state: ReturnType<typeof useDashboardStore>["state"];
  update: ReturnType<typeof useDashboardStore>["update"];
  clients: ReturnType<typeof useDashboardStore>["state"]["clients"];
}) {
  function toggle(clientId: string, wIdx: number, day: (typeof DAYS)[number]["key"]) {
    update((s) => {
      const arr = s.fourHour[clientId];
      if (!arr) return s;
      arr[wIdx].fails[day] = !arr[wIdx].fails[day];
      return s;
    });
  }

  return (
    <div className="pt-8 space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Regra das 4 horas</h2>
        <p className="text-sm text-muted-foreground">
          Marque os dias em que o cliente ficou mais de 4 horas sem resposta. Cada marcação gera desconto.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {clients.map((client) => {
          const weeks = state.fourHour[client.id] ?? [];
          const total = weeks.reduce(
            (n, w) => n + Object.values(w.fails).filter(Boolean).length,
            0,
          );
          return (
            <Card key={client.id} className="p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{client.name}</h3>
                <Badge variant={total > 0 ? "destructive" : "secondary"}>
                  {total} falha{total === 1 ? "" : "s"}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-[80px_repeat(5,1fr)_60px] gap-2 text-[10px] uppercase tracking-wide text-muted-foreground px-2">
                  <span>Semana</span>
                  {DAYS.map((d) => (
                    <span key={d.key} className="text-center">
                      {d.label}
                    </span>
                  ))}
                  <span className="text-right">R$</span>
                </div>
                {weeks.map((w, i) => {
                  const n = Object.values(w.fails).filter(Boolean).length;
                  return (
                    <div
                      key={w.weekStart}
                      className="grid grid-cols-[80px_repeat(5,1fr)_60px] gap-2 items-center py-1"
                    >
                      <span className="text-xs text-muted-foreground pl-2">
                        {new Date(w.weekStart + "T00:00:00").toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                        })}
                      </span>
                      {DAYS.map((d) => {
                        const on = !!w.fails[d.key];
                        return (
                          <button
                            key={d.key}
                            onClick={() => toggle(client.id, i, d.key)}
                            className={cn(
                              "h-9 rounded-lg border text-xs font-medium transition-colors",
                              on
                                ? "bg-danger border-danger text-danger-foreground"
                                : "bg-background border-border text-muted-foreground hover:bg-muted",
                            )}
                          >
                            {on ? "✕" : ""}
                          </button>
                        );
                      })}
                      <span className="text-xs text-right pr-2 text-muted-foreground">
                        {n * DISCOUNT_VALUE}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Meetings ---------------- */

function MeetingsTab({
  state,
  update,
  clients,
}: {
  state: ReturnType<typeof useDashboardStore>["state"];
  update: ReturnType<typeof useDashboardStore>["update"];
  clients: ReturnType<typeof useDashboardStore>["state"]["clients"];
}) {
  function set(clientId: string, patch: Partial<(typeof state.meetings)[string]>) {
    update((s) => {
      s.meetings[clientId] = { ...s.meetings[clientId], ...patch };
      return s;
    });
  }
  return (
    <div className="pt-8 space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Reunião mensal de alinhamento</h2>
        <p className="text-sm text-muted-foreground">
          Prazo: até <b>{new Date(MEETING_DEADLINE).toLocaleDateString("pt-BR")}</b>. Se o cliente
          não participar, avise o João e envie relatório + análise em áudio.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {clients.map((client) => {
          const m = state.meetings[client.id];
          if (!m) return null;
          const complete = m.done && m.report && m.audio;
          return (
            <Card
              key={client.id}
              className={cn(
                "p-5 shadow-[var(--shadow-card)] transition-colors",
                complete && "border-success/40",
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{client.name}</h3>
                {complete ? (
                  <Badge className="bg-success text-success-foreground">Completo</Badge>
                ) : (
                  <Badge variant="outline">Em andamento</Badge>
                )}
              </div>
              <div className="space-y-2.5">
                <CheckRow
                  label="Reunião realizada"
                  checked={m.done}
                  onChange={(v) => set(client.id, { done: v })}
                />
                {m.done && (
                  <div className="pl-6">
                    <Input
                      type="date"
                      value={m.dateDone ?? ""}
                      onChange={(e) => set(client.id, { dateDone: e.target.value })}
                      className="h-8 text-xs w-44"
                    />
                  </div>
                )}
                <CheckRow
                  label="Relatório mensal enviado"
                  checked={m.report}
                  onChange={(v) => set(client.id, { report: v })}
                />
                <CheckRow
                  label="Análise em áudio enviada"
                  checked={m.audio}
                  onChange={(v) => set(client.id, { audio: v })}
                />
                <CheckRow
                  label="Cliente não participou → João comunicado"
                  checked={m.joaoNotified}
                  onChange={(v) => set(client.id, { joaoNotified: v })}
                />
                <Textarea
                  placeholder="Observação"
                  value={m.note ?? ""}
                  onChange={(e) => set(client.id, { note: e.target.value })}
                  className="mt-2 min-h-[60px] text-xs"
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer text-sm">
      <Checkbox checked={checked} onCheckedChange={(v) => onChange(Boolean(v))} />
      <span className={cn(checked && "text-foreground", !checked && "text-muted-foreground")}>
        {label}
      </span>
    </label>
  );
}

/* ---------------- Clients ---------------- */

function ClientsTab({
  state,
  stats,
  update,
  clients,
  addClient,
  renameClient,
  removeClient,
}: {
  state: ReturnType<typeof useDashboardStore>["state"];
  stats: Stats;
  update: ReturnType<typeof useDashboardStore>["update"];
  clients: ReturnType<typeof useDashboardStore>["state"]["clients"];
  addClient: (name: string) => void;
  renameClient: (id: string, name: string) => void;
  removeClient: (id: string) => void;
}) {
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [confirmRemoveId, setConfirmRemoveId] = useState<string | null>(null);

  function startEdit(id: string, name: string) {
    setEditingId(id);
    setEditValue(name);
  }
  function commitEdit() {
    if (editingId && editValue.trim()) renameClient(editingId, editValue.trim());
    setEditingId(null);
    setEditValue("");
  }

  function toggleExtra(clientId: string, key: "indication" | "testimonial") {
    update((s) => {
      const cur = s.clientExtras[clientId] ?? {};
      s.clientExtras[clientId] = { ...cur, [key]: !cur[key] };
      return s;
    });
  }
  function setExtraNote(
    clientId: string,
    key: "indicationNote" | "testimonialNote",
    value: string,
  ) {
    update((s) => {
      const cur = s.clientExtras[clientId] ?? {};
      s.clientExtras[clientId] = { ...cur, [key]: value };
      return s;
    });
  }

  return (
    <div className="pt-8 space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Gerenciar clientes</h2>
        <p className="text-sm text-muted-foreground">
          Adicione, renomeie ou remova clientes conforme entrar ou sair da carteira no mês.
        </p>
      </div>

      <Card className="p-5 shadow-[var(--shadow-card)]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addClient(newName);
            setNewName("");
          }}
          className="flex flex-wrap items-center gap-2 mb-4"
        >
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nome do novo cliente"
            className="h-9 max-w-sm"
          />
          <button
            type="submit"
            disabled={!newName.trim()}
            className={cn(
              "inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-sm font-medium transition-colors",
              "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed",
            )}
          >
            <Plus className="h-4 w-4" /> Adicionar cliente
          </button>
        </form>

        <ul className="divide-y divide-border">
          {clients.map((c) => {
            const isEditing = editingId === c.id;
            const confirming = confirmRemoveId === c.id;
            return (
              <li key={c.id} className="flex items-center gap-3 py-2.5">
                {isEditing ? (
                  <>
                    <Input
                      autoFocus
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") commitEdit();
                        if (e.key === "Escape") {
                          setEditingId(null);
                          setEditValue("");
                        }
                      }}
                      className="h-8 max-w-sm text-sm"
                    />
                    <button
                      onClick={commitEdit}
                      className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-success hover:bg-success/10"
                      aria-label="Salvar"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null);
                        setEditValue("");
                      }}
                      className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted"
                      aria-label="Cancelar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-medium flex-1">{c.name}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {actionsForClient(c.id).length} ações
                    </Badge>
                    <button
                      onClick={() => startEdit(c.id, c.name)}
                      className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted"
                      aria-label="Renomear"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    {confirming ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-muted-foreground">Confirmar?</span>
                        <button
                          onClick={() => {
                            removeClient(c.id);
                            setConfirmRemoveId(null);
                          }}
                          className="h-8 px-2 rounded-lg bg-danger text-danger-foreground text-xs font-medium"
                        >
                          Remover
                        </button>
                        <button
                          onClick={() => setConfirmRemoveId(null)}
                          className="h-8 px-2 rounded-lg border border-border text-xs text-muted-foreground hover:bg-muted"
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmRemoveId(c.id)}
                        className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-danger hover:bg-danger/10"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </>
                )}
              </li>
            );
          })}
          {clients.length === 0 && (
            <li className="py-6 text-center text-sm text-muted-foreground">
              Nenhum cliente cadastrado. Adicione o primeiro acima.
            </li>
          )}
        </ul>
        <p className="text-[11px] text-muted-foreground mt-3">
          Remover um cliente oculta seus registros do mês atual, mas o histórico de ações fica
          preservado se você adicioná-lo novamente com o mesmo nome.
        </p>
      </Card>

      <div>
        <h2 className="text-xl font-semibold">Resumo por cliente</h2>
        <p className="text-sm text-muted-foreground">
          Consolidado do mês por cliente: ações, regra 4h, reunião e desconto acumulado.
        </p>
      </div>

      <Card className="overflow-hidden shadow-[var(--shadow-card)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="text-left px-5 py-3 font-medium">Cliente</th>
                <th className="text-center px-3 py-3 font-medium">Não cumpridas</th>
                <th className="text-center px-3 py-3 font-medium">Regra 4h</th>
                <th className="text-center px-3 py-3 font-medium">Reunião</th>
                <th className="text-right px-5 py-3 font-medium">Desconto</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => {
                const missed = stats.missedByClient[c.id] ?? 0;
                const fourh = stats.fourHByClient[c.id] ?? 0;
                const disc = (missed + fourh) * DISCOUNT_VALUE;
                const meeting = state.meetings[c.id]?.done;
                return (
                  <tr key={c.id} className="border-t border-border">
                    <td className="px-5 py-3 font-medium">{c.name}</td>
                    <td className="px-3 py-3 text-center">
                      <span className={cn(missed > 0 && "text-danger font-semibold")}>
                        {missed}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className={cn(fourh > 0 && "text-danger font-semibold")}>
                        {fourh}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      {meeting ? (
                        <Badge className="bg-success text-success-foreground">Sim</Badge>
                      ) : (
                        <Badge variant="outline">Pendente</Badge>
                      )}
                    </td>
                    <td className="px-5 py-3 text-right font-semibold">
                      {disc > 0 ? (
                        <span className="text-danger">R$ {disc},00</span>
                      ) : (
                        <span className="text-muted-foreground">R$ 0</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-muted/40 font-semibold">
              <tr>
                <td className="px-5 py-3">Total</td>
                <td className="text-center">{stats.missed}</td>
                <td className="text-center">{stats.fourHFails}</td>
                <td className="text-center">
                  {stats.meetingsDone}/{clients.length}
                </td>
                <td className="px-5 py-3 text-right text-danger">R$ {stats.totalDiscount},00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>

      <div>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div>
            <h2 className="text-xl font-semibold">Indicações & depoimentos</h2>
            <p className="text-sm text-muted-foreground">
              Marque quem indicou um novo cliente ou enviou depoimento neste mês.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <Badge variant="secondary" className="gap-1">
              <Gift className="h-3 w-3" /> {stats.indications} indicações
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <MessageSquareQuote className="h-3 w-3" /> {stats.testimonials} depoimentos
            </Badge>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {clients.map((c) => {
            const ex = state.clientExtras[c.id] ?? {};
            return (
              <Card key={c.id} className="p-4 shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm">{c.name}</h3>
                  <div className="flex gap-1.5">
                    <ExtraToggle
                      active={!!ex.indication}
                      onClick={() => toggleExtra(c.id, "indication")}
                      icon={Gift}
                      label="Indicou"
                    />
                    <ExtraToggle
                      active={!!ex.testimonial}
                      onClick={() => toggleExtra(c.id, "testimonial")}
                      icon={MessageSquareQuote}
                      label="Depoimento"
                    />
                  </div>
                </div>
                {ex.indication && (
                  <Input
                    placeholder="Quem foi indicado?"
                    value={ex.indicationNote ?? ""}
                    onChange={(e) => setExtraNote(c.id, "indicationNote", e.target.value)}
                    className="h-8 text-xs mb-2"
                  />
                )}
                {ex.testimonial && (
                  <Input
                    placeholder="Onde/como foi enviado o depoimento?"
                    value={ex.testimonialNote ?? ""}
                    onChange={(e) => setExtraNote(c.id, "testimonialNote", e.target.value)}
                    className="h-8 text-xs"
                  />
                )}
                {!ex.indication && !ex.testimonial && (
                  <p className="text-[11px] text-muted-foreground">
                    Nenhum registro neste mês.
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExtraToggle({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors",
        active
          ? "bg-success text-success-foreground border-success"
          : "bg-background border-border text-muted-foreground hover:bg-muted",
      )}
    >
      <Icon className="h-3 w-3" />
      {label}
    </button>
  );
}
