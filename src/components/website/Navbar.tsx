import { useEffect, useState } from "react";
import { ThemeToggle } from "../UI/ThemeToggle";
import { Button } from "../UI/Button";
import { Github } from "lucide-react";
import { NavLink } from "react-router-dom";

const REPO_URL = "https://github.com/RaunakDiesFromCode/kickstrt-ui";
const API_URL = "https://api.github.com/repos/RaunakDiesFromCode/kickstrt-ui";

const navItems = [
    { label: "Docs", path: "/docs" },
    { label: "Components", path: "/components" },
    { label: "Themes", path: "/themes" },
    { label: "Colors", path: "/colors" },
];

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
                <NavLink
                    to="/UI"
                    className={({ isActive }) =>
                        `hover:underline font-bold mr-3 font-lexend text-xl ${
                            isActive ? "text-primary" : ""
                        }`
                    }
                >
                    kickstrt/UI
                </NavLink>

                {navItems.map(({ label, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        className={({ isActive }) => ""}
                    >
                        {({ isActive }) => (
                            <Button
                                variant="ghost"
                                className={`px-2 py-1 cursor-pointer ${
                                    isActive ? "bg-accent" : ""
                                }`}
                            >
                                {label}
                            </Button>
                        )}
                    </NavLink>
                ))}
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
                        {stars && stars > 0 && (
                            <span className="ml-1">{stars}</span>
                        )}
                    </div>
                </Button>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
