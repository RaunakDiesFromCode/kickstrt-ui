import { Checkbox } from "../UI/Checkbox";
import { Label } from "../UI/Label";

export function LabelShowcase() {
    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Label Showcase
            </h2>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    );
}
