import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePlugin from "vite-plugin-react-js-support";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePlugin([], { jsxInject: true })],
});
