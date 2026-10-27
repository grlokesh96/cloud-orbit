
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Custom Vite configuration for the TanStack Start application.
 *
 * The shared Lovable configuration already provides:
 * - TanStack Start and React integration
 * - Tailwind CSS and TypeScript path aliases
 * - Nitro server/build integration
 * - Environment variable injection
 * - React/TanStack dependency deduplication
 * - Development tooling and sandbox-specific settings
 *
 * Do not register these plugins again here.
 */
export default defineConfig({
  tanstackStart: {
    /**
     * Use src/server.ts as the custom server entry point.
     * This allows the application's SSR error wrapper to run
     * through the TanStack Start/Nitro server build.
     */
    server: {
      entry: "server",
    },
  },
});
