import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://juliancamilogallego.github.io/EAFC-trading-calculator/", // Set this to your repository name
});
