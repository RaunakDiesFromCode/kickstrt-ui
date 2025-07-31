import React, { useEffect, useState } from "react";
import { ThemeToggle } from "../UI/ThemeToggle";
import { Button } from "../UI/Button";
import { Github } from "lucide-react";

const REPO_URL = "https://github.com/RaunakDiesFromCode/kickstrt-ui";
const API_URL = "https://api.github.com/repos/RaunakDiesFromCode/kickstrt-ui";

const Navbar = () => {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("GitHub API error");
                return res.json();
            })
            .then((data) => setStars(data.stargazers_count))
            .catch((err) => {
                console.error("Failed to fetch stars:", err);
                setStars(null);
            });
    }, []);

    return (
        <nav className="fixed top-0 z-50 flex justify-between p-3 w-full px-10 bg-background text-foreground items-center">
            <div className="flex gap-1 items-center">
                <a
                    href="/docs"
                    className="hover:underline font-bold mr-3 font-lexend text-xl"
                >
                    kickstrt/UI
                </a>
                <a href="/docs">
                    <Button
                        variant="ghost"
                        className="px-2 py-1-1 cursor-pointer"
                    >
                        Docs
                    </Button>
                </a>
                <a href="/components">
                    <Button
                        variant="ghost"
                        className="px-2 py-1 cursor-pointer"
                    >
                        Components
                    </Button>
                </a>
                <a href="/themes">
                    <Button
                        variant="ghost"
                        className="px-2 py-1 cursor-pointer"
                    >
                        Themes
                    </Button>
                </a>
                <a href="/colors">
                    <Button
                        variant="ghost"
                        className="px-2 py-1 cursor-pointer"
                    >
                        Colors
                    </Button>
                </a>
            </div>
            <div className="flex gap-2">
                <Button
                    className="hidden sm:flex"
                    variant="ghost"
                    size={stars && stars > 0 ? "default" : "icon"}
                    onClick={() =>
                        window.open(REPO_URL, "_blank", "noopener,noreferrer")
                    }
                >
                    <div className="flex items-center">
                        <Github className="size-5" />
                        {stars && stars > 0 ? (
                            <span className="ml-1">{stars}</span>
                        ) : null}
                    </div>
                </Button>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
