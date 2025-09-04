import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/portfolio/",
=======
  base: "/portfolio/",                    // Set base if deploying to subpath like GitHub Pages
>>>>>>> 5db4c2a580ba56020a1bb0ea9de3ab5673ff6d2d
  assetsInclude: ['**/*.glb'],            // Allow importing .glb model files as modules
});
