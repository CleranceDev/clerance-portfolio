import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/clerance-portfolio/",
  build: {
    assetsInlineLimit: 0, // Force file copying
  },
});
