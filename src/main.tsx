import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "./components/UI/Sonner.tsx";
import Navbar from "./components/website/Navbar.tsx";
import { Footer } from "./components/website/Footer.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main>
                <Navbar />
                <App />
                <Footer/>
            </main>
            <Toaster />
        </ThemeProvider>
    </StrictMode>
);

// bg-[url(https://wallpapers.com/blog/wp-content/uploads/2023/06/glitter-golden-bokeh-lights-scaled.jpeg)]
