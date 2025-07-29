import { Moon, Sun } from "lucide-react";
import { Button } from "./UI/Button";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button onClick={toggleTheme} variant="outline" size="icon">
            {theme === "dark" ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
