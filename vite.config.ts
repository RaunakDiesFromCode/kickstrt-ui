import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        compression({ algorithm: "brotliCompress" }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        target: "esnext", // don’t ship legacy JS
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                    vendor: ["lucide-react"],
                },
            },
        },
    },
});
