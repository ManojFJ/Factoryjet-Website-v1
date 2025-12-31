import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "es2020",
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split node_modules into smaller chunks for better caching and parallel loading
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-dom")) {
                return "vendor-react";
              }
              if (id.includes("react-router")) {
                return "vendor-router";
              }
              if (id.includes("framer-motion")) {
                return "vendor-motion";
              }
              if (id.includes("firebase")) {
                return "vendor-firebase";
              }
              // Let lucide-react be tree-shaken per component instead of bundling all icons
              // This allows better code splitting
              if (id.includes("lucide-react")) {
                return undefined; // Let Vite handle tree-shaking naturally
              }
              // Other vendor libraries
              return "vendor";
            }
          },
        },
      },
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 500,
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
  };
});
