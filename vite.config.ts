import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "192.168.56.56",
    port: 5173,
    hmr: {
      host: "quizhub.test",
    },
    watch: {
      usePolling: true,
    },
    cors: {
      origin: ["https://api.quizhub.test"],
    },
  },
});
