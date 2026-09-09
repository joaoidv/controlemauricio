// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force the Vercel Nitro preset for production deploys. The Lovable wrapper
  // defaults to "cloudflare" and its own sandbox build overrides this back to
  // "cloudflare-module", so this only takes effect outside Lovable (i.e. on Vercel),
  // where it makes `npm run build` emit `.vercel/output` (Build Output API).
  nitro: {
    preset: "vercel",
  },
});
