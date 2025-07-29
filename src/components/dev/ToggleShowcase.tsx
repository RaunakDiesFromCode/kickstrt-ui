import { Bold } from "lucide-react";
import { Toggle } from "../UI/Toggle";

export function ToggleShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Toggle Showcase
            </h2>
            <Toggle aria-label="Toggle italic">
                <Bold className="h-4 w-4" />
            </Toggle>
        </div>
    );
}
