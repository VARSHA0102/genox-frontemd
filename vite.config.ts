import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    // only enable proxy for local development (Vite dev server)
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    } : undefined,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
      "@shared": path.resolve(__dirname, "../shared"),
      // ensure all imports use the frontend node_modules copy
      react: path.resolve(__dirname, "node_modules", "react"),
      "react-dom": path.resolve(__dirname, "node_modules", "react-dom"),
      // if using react-dom/client
      "react-dom/client": path.resolve(__dirname, "node_modules", "react-dom", "client"),
    },
  },
});