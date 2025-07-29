"use client";

import * as React from "react";
import { Progress } from "../UI/Progress";

export function ProgressShowcase() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Progress Showcase
            </h2>

            <Progress value={progress} className="w-[60%]" />
        </div>
    );
}
