import { Button } from "../UI/Button";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const description = (
    <>
        Stunning components, fully yours to shape.
        <br />
        Tweak it, own it. No walls, no limits. All open source
    </>
);

const UI = () => {
    const handleGetStartedClick = () => {
        console.log("Get Started button clicked");
        ReactGA.event({
            category: "Hero",
            action: "Get_started",
            label: "Hero Button",
        });
        // Additional logic (e.g., navigation) can be added here
    };

    useEffect(() => {
        document.title = "Kickstrt/UI";
    }, []);

    return (
        <div className="pt-20 overflow-x-clip">
            <h1 className="text-5xl font-bold text-center mt-10 font-lexend">
                The{" "}
                <span className="text-teal-400 text-shadow-lg text-shadow-primary/5 ">
                    next-gen
                </span>{" "}
                React component library
            </h1>
            <p className="text-center mt-4 mb-10">{description}</p>
            <div className="flex justify-center gap-4 mb-10">
                <Link to={"/docs"}>
                    <Button
                        className="bg-foreground"
                        onClick={handleGetStartedClick}
                    >
                        Let&apos;s Go &gt;
                    </Button>
                </Link>
                <Link to={"/components"}>
                    <Button variant="ghost">View Components</Button>
                </Link>
            </div>
            {/* <Showcase /> */}
        </div>
    );
};

export default UI;
