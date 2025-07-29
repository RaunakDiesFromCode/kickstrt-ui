import { Textarea } from "../UI/TextArea";

export function TextareaShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Text Area Showcase
            </h2>
            <Textarea placeholder="Type your message here." />
        </div>
    );
}
