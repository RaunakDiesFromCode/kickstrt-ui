import { Label } from "../UI/Label";
import { RadioGroup, RadioGroupItem } from "../UI/RadioGroup";


export function RadioGroupShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Radio Group Showcase
            </h2>

            <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
