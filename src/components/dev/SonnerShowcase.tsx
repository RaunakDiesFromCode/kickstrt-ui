"use client";

import { toast } from "sonner";
import { Button } from "../UI/Button";

export function SonnerShowcase() {
    return (
        <div className=" p-6 space-y-4 text-primary">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Sonner Showcase
            </h2>
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    );
}
