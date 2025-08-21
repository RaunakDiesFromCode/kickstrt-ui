import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import UI from "./components/website/UI";
import Docs from "./components/website/Docs";
import ReactGA from "react-ga4";
import Navbar from "./components/website/Navbar";
import { Footer } from "./components/website/Footer";
import Testing from "./Testing";
import ReactLenis from "lenis/react";

const googleAnalID = import.meta.env.VITE_GOOGLE_ANAL;

const AnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize(googleAnalID);
    }, []);

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname,
            title: location.pathname,
        });
    }, [location]);

    return null;
};

const App = () => {
    return (
        <ReactLenis
            root
            className="relative w-screen min-h-screen overflow-x-auto"
        >
            <Router>
                <AnalyticsTracker />
                <Navbar /> {/* ✅ Now inside Router */}
                <main className="pt-10 min-h-screen text-foreground mt-10 px-10">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/UI" replace />}
                        />
                        <Route path="/UI" element={<UI />} />
                        <Route path="/docs" element={<Docs />} />
                        <Route path="/demonstration" element={<Testing />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </ReactLenis>
    );
};

export default App;
