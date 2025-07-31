import { Button } from "../UI/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../UI/ToolTip";


export function TooltipShowcase() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    );
}
