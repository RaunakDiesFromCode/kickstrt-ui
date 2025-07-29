import * as React from "react";
import { ScrollArea } from "../UI/ScrollArea";
import { Separator } from "../UI/Seperator";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Scroll Area Showcase
            </h2>
            <ScrollArea className="h-72 w-48 rounded-md border border-input">
                <div className="p-4">
                    <h4 className="mb-4 text-sm leading-none font-medium">
                        Tags
                    </h4>
                    {tags.map((tag) => (
                        <React.Fragment key={tag}>
                            <div className="text-sm">{tag}</div>
                            <Separator className="my-2" />
                        </React.Fragment>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
