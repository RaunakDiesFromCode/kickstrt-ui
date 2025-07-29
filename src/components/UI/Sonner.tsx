"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "../theme-provider";

const Toaster = (props: ToasterProps) => {
    const { theme } = useTheme();

    return (
        <Sonner
            theme={theme === "system" ? undefined : theme}
            className="kickstrt-effects"
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster };
