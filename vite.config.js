import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/portfolio',                    // Set base if deploying to subpath like GitHub Pages
  assetsInclude: ['**/*.glb'],            // Allow importing .glb model files as modules
});
