import { useEffect } from "react";
import Hero from "./components/website/Hero";
import ReactGA from "react-ga4";

const App = () => {
    useEffect(() => {
        ReactGA.initialize("G-57ES9Y5GPE");

        ReactGA.send({
            hitType: "pageview",
            page: window.location.pathname,
            title: "App.tsx",
        });
    }, []);

    return (
        <main className=" pt-10 min-h-screen text-foreground">
            <Hero />
        </main>
    );
};

export default App;
