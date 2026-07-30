CREATE TABLE public.dashboard_state (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.dashboard_state TO anon, authenticated;
GRANT ALL ON public.dashboard_state TO service_role;

ALTER TABLE public.dashboard_state ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read dashboard" ON public.dashboard_state FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "public insert dashboard" ON public.dashboard_state FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "public update dashboard" ON public.dashboard_state FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

ALTER PUBLICATION supabase_realtime ADD TABLE public.dashboard_state;