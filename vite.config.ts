import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const isProduction = mode === 'production';

  const plugins = [react()];

  // Conditionally add development-only plugins
  if (!isProduction) {
    try {
      const dyadComponentTagger = (await import('@dyad-sh/react-vite-component-tagger')).default;
      const runtimeErrorOverlay = (await import('@replit/vite-plugin-runtime-error-modal')).default;
      plugins.push(dyadComponentTagger(), runtimeErrorOverlay());

      if (process.env.REPL_ID) {
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        plugins.push(cartographer());
      }
    } catch (e) {
      console.log("Could not load dev plugins", e);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});