import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import mdx from "@mdx-js/rollup";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        compression({ algorithm: "brotliCompress" }),
        {
            ...mdx(),
            enforce: "pre", // important so Vite parses MDX first
        },
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
