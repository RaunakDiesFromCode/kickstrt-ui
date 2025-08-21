import { Button } from "../UI/Button";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Box, Rocket } from "lucide-react";
import {
    Card,
    CardTitle,
    CardDescription,
} from "../UI/Card";

const description = (
    <>
        Stunning components, fully yours to shape.
        <br />
        Tweak it, own it. No walls, no limits. All open source.
    </>
);

const features = [
    {
        icon: <Sparkles className="w-6 h-6 text-teal-400" />,
        title: "Customizable",
        desc: "Every component is fully editable, down to the last detail.",
    },
    {
        icon: <Box className="w-6 h-6 text-teal-400" />,
        title: "Open Source",
        desc: "No paywalls, no restrictions. MIT-licensed and free forever.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-teal-400" />,
        title: "Next-Gen",
        desc: "Optimized for speed, modern React, and smooth DX.",
    },
];

const UI = () => {
    const handleGetStartedClick = () => {
        console.log("Get Started button clicked");
        ReactGA.event({
            category: "Hero",
            action: "Get_started",
            label: "Hero Button",
        });
    };

    useEffect(() => {
        document.title = "Kickstrt/UI";
    }, []);

    return (
        <div className="relative pt-28 overflow-x-clip bg-gradient-to-b from-background via-background/95 to-background">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto text-center px-6">
                <p className="text-sm uppercase tracking-widest text-teal-400 font-semibold mb-2">
                    Kickstrt your React projects
                </p>
                <h1 className="text-6xl font-bold font-lexend leading-tight">
                    The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                        next-gen
                    </span>{" "}
                    React component library
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="flex justify-center gap-4 mt-8">
                    <Link to={"/docs"}>
                        <Button
                            className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-6 py-3 shadow-lg hover:scale-105 transition-transform"
                            onClick={handleGetStartedClick}
                        >
                            Let&apos;s Go &gt;
                        </Button>
                    </Link>
                    <Link to={"/components"}>
                        <Button variant="ghost" className="px-6 py-3">
                            View Components
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-24 max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
                {features.map((f, idx) => (
                    <Card
                        key={idx}
                        className="hover:shadow-lg transition flex flex-col items-center text-center p-6"
                    >
                        <div className="flex flex-col items-center gap-y-3">
                            <div className="p-3 rounded-full bg-teal-50 dark:bg-teal-900/30">
                                {f.icon}
                            </div>
                            <CardTitle className="text-lg font-semibold">
                                {f.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">
                                {f.desc}
                            </CardDescription>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UI;
