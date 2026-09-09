import actionsSeed from "@/data-actions.json";

export type ActionStatus = "pending" | "done" | "missed";

export interface WeeklyAction {
  id: string;
  client: string;
  date: string; // ISO
  day: string;
  action: string;
}

export interface ActionState {
  status: ActionStatus;
  note?: string;
}

export interface MeetingState {
  done: boolean;
  dateDone?: string;
  report: boolean;
  audio: boolean;
  joaoNotified: boolean;
  note?: string;
}

export interface FourHourWeek {
  weekStart: string; // ISO
  fails: Partial<Record<"seg" | "ter" | "qua" | "qui" | "sex", boolean>>;
}

export const MONTH_LABEL = "Setembro / 2026";
export const DISCOUNT_VALUE = 25;
export const MEETING_DEADLINE = "2026-09-10";

export const CLIENTS: string[] = [
  "Ju Body",
  "Izzy Burguer",
  "Vanessa Premium",
  "Emalteria Daniela",
  "Poliana Campos",
  "Elaine",
  "Cleiziane",
  "JOÃO TESTE",
];

export const WEEK_STARTS = [
  "2026-09-01",
  "2026-09-07",
  "2026-09-14",
  "2026-09-21",
  "2026-09-28",
];

const SEED = actionsSeed as Array<{
  id: number;
  client: string;
  date: string;
  day: string;
  action: string;
}>;

export const ACTIONS: WeeklyAction[] = SEED.map((a) => ({ ...a, id: String(a.id) }));

/** Modelo de ações semanais (datas + tarefas) usado para novos clientes. */
export const ACTION_TEMPLATE = SEED.filter((a) => a.client === SEED[0]?.client).map((a) => ({
  date: a.date,
  day: a.day,
  action: a.action,
}));

const seedByClient = new Map<string, WeeklyAction[]>();
for (const a of ACTIONS) {
  const list = seedByClient.get(a.client) ?? [];
  list.push(a);
  seedByClient.set(a.client, list);
}

/** Ações semanais de um cliente: do seed quando existir, senão geradas pelo modelo. */
export function actionsForClient(clientId: string): WeeklyAction[] {
  const seeded = seedByClient.get(clientId);
  if (seeded) return seeded;
  return ACTION_TEMPLATE.map((t, i) => ({
    id: `${clientId}::${i}`,
    client: clientId,
    date: t.date,
    day: t.day,
    action: t.action,
  }));
}
