import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "./components/UI/Sonner.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className=" bg-background">
                <App />
            </div>
            <Toaster />
        </ThemeProvider>
    </StrictMode>
);

// bg-[url(https://wallpapers.com/blog/wp-content/uploads/2023/06/glitter-golden-bokeh-lights-scaled.jpeg)]
