import { Button } from "../UI/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../UI/Tooltip";

export function TooltipShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Tooltip Showcase
            </h2>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </div>
    );
}
