"use client";

import { Button } from "../UI/Button";
import { Bell, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = [
    "default",
    "secondary",
    "destructive",
    "outline",
    "ghost",
    "link",
] as const;

const sizes = ["default", "sm", "lg", "icon"] as const;

export default function ButtonShowcase() {
    return (
        <div className="p-6 space-y-10">
            <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                    Button Variants
                </h2>
                <div className="grid gap-6">
                    {variants.map((variant) => (
                        <div key={variant}>
                            <h3 className="font-semibold capitalize mb-2 text-foreground">
                                {variant}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size) => (
                                    <Button
                                        key={`${variant}-${size}`}
                                        variant={variant}
                                        size={size}
                                        icon={
                                            size === "icon" ? (
                                                <Sun className="size-4" />
                                            ) : undefined
                                        }
                                    >
                                        {size === "icon"
                                            ? null
                                            : variant === "link"
                                            ? "Link"
                                            : `${variant} - ${size}`}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                    Loading State
                </h2>
                <div className="flex gap-4 flex-wrap">
                    <Button isLoading>Primary Loading</Button>
                    <Button variant="destructive" isLoading size={"lg"}>
                        Deleting...
                    </Button>
                    <Button isLoading size={"sm"}></Button>
                    <Button isLoading variant={"outline"}>
                        Loading
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                    Inline Icon Button
                </h2>
                <div className="flex gap-4 flex-wrap">
                    <Button
                        variant="outline"
                        size="sm"
                        icon={<Sun className="size-4" />}
                    >
                        sun!
                    </Button>
                    <Button
                        variant="destructive"
                        size="lg"
                        icon={<Bell className="size-4" />}
                    >
                        Subsribe
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                    Custom Styled Button
                </h2>
                <div className="flex gap-4 flex-wrap">
                    <button
                        className={cn(
                            "kickstart-base px-4 py-2 rounded-xl text-black font-semibold bg-green-400 shadow-xl shadow-foreground/10 cursor-pointer hover:shadow-foreground/50 hover:shadow-2xl transition-all"
                        )}
                    >
                        Custom Green Button
                    </button>
                </div>
            </section>
        </div>
    );
}
