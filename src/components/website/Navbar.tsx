import { useEffect, useState } from "react";
import { ThemeToggle } from "../UI/ThemeToggle";
import { Button } from "../UI/Button";
import { Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation();
    const currentPath = location.pathname;

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
                <Link
                    to="/UI"
                    className={`hover:underline font-bold mr-3 font-lexend text-xl ${
                        currentPath === "/UI" ? "" : ""
                    }`}
                >
                    kickstrt/UI
                </Link>

                {navItems.map(({ label, path }) => (
                    <Link key={path} to={path}>
                        <Button
                            variant="ghost"
                            className={`px-2 py-1 cursor-pointer ${
                                currentPath.startsWith(path)
                                    ? "bg-card"
                                    : ""
                            }`}
                        >
                            {label}
                        </Button>
                    </Link>
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
