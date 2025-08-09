import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ mode }) => {
  const isProduction = mode === 'production';

  const plugins: PluginOption[] = [react()];

  // Conditionally add development-only plugins
  if (!isProduction) {
    try {
      const { default: dyadComponentTagger } = await import('@dyad-sh/react-vite-component-tagger');
      const { default: runtimeErrorOverlay } = await import('@replit/vite-plugin-runtime-error-modal');
      
      const devPlugins: PluginOption[] = [dyadComponentTagger(), runtimeErrorOverlay()];

      if (process.env.REPL_ID) {
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        devPlugins.push(cartographer());
      }
      
      plugins.push(...devPlugins);

    } catch (e) {
      console.log("Could not load dev plugins", e);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
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