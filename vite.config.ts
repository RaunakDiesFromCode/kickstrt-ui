import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => ({
    plugins: [
        react(),
        tailwindcss(),
        {
            name: "simpleanalytics",
            transformIndexHtml(html) {
                const file =
                    mode === "development" ? "latest.dev.js" : "latest.js";
                return {
                    html,
                    tags: [
                        {
                            tag: "script",
                            attrs: {
                                async: true,
                                src: `https://scripts.simpleanalyticscdn.com/${file}`,
                            },
                            injectTo: "head",
                        },
                    ],
                };
            },
        },
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
