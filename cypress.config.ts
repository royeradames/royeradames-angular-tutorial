import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    port: 4201,
    viewportWidth: 1792,
    viewportHeight: 928,
  },
});
