import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import bundlesize from "vite-plugin-bundlesize";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    bundlesize({
      limits: [
        { name: "assets/index-*.js",   limit: Infinity },
      ],
    }),
  ],
  build: {
    sourcemap: "hidden",
  },
});
