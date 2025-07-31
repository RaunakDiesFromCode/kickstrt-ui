import { useEffect } from "react";
import Hero from "./components/website/Hero";
import ReactGA from "react-ga4";

const googleAnalID = import.meta.env.VITE_GOOGLE_ANAL;

const App = () => {
    useEffect(() => {
        ReactGA.initialize(googleAnalID);

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
