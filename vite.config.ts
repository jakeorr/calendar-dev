import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@event-calendar/core": path.resolve(
        "/Users/jakeorr/code/calendar/packages/core"
      ),
      "@event-calendar/time-grid": path.resolve(
        "/Users/jakeorr/code/calendar/packages/time-grid"
      ),
      "@event-calendar/resource-timeline": path.resolve(
        "/Users/jakeorr/code/calendar/packages/resource-timeline"
      ),
      "@event-calendar/interaction": path.resolve(
        "/Users/jakeorr/code/calendar/packages/interaction"
      ),
      "@event-calendar/resource-time-grid": path.resolve(
        "/Users/jakeorr/code/calendar/packages/resource-time-grid"
      ),
    },
  },
});
