"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

function Label({
    className,
    ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
    return (
        <LabelPrimitive.Root
            data-slot="label"
            className={cn(
                "kickstrt-effects", // apply base styles
                "bg-transparent p-0 shadow-none justify-start gap-2", // override button-like stuff
                "text-[var(--color-foreground)]", // enforce theme color
                "leading-none select-none text-sm font-medium",
                "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
                className
            )}
            {...props}
        />
    );
}

export { Label };
