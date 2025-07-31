import React from "react";
import ButtonShowcase from "./components/dev/ButtonShowcase";
import AccordionShowcase from "./components/dev/AccordionShowcase";
import { AlertDemonstration } from "./components/dev/AlertShowcase";
import { AlertDialogShowcase } from "./components/dev/AlertDialogueShowcase";
import { CalendarShowcase } from "./components/dev/CalendarShowcase";
import { LabelShowcase } from "./components/dev/LabelShowcase";
import { CheckboxShowcase } from "./components/dev/CheckboxShowcase";
import { ContextMenuShowcase } from "./components/dev/ContextMenuShowcase";
import { HoverCardShowcase } from "./components/dev/HoverCardShowcase";
import { InputShowcase } from "./components/dev/InputShowcase";
import { InputOTPShowcase } from "./components/dev/InputOTPShowcase";
import { ProgressShowcase } from "./components/dev/ProgressShowcase";
import { RadioGroupShowcase } from "./components/dev/RadioGroupShowcase";
import { ScrollAreaShowcase } from "./components/dev/ScrollAreaShowcase";
import { SelectShowcase } from "./components/dev/SelectShowcase";
import { SeparatorShowcase } from "./components/dev/SeperatorShowcase";
import { SkeletonShowcase } from "./components/dev/SkeletonShowcase";
import { SonnerShowcase } from "./components/dev/SonnerShowcase";
import { TextareaShowcase } from "./components/dev/TextAreaShowcase";
import { ToggleShowcase } from "./components/dev/ToggleShowcase";
import { ThemeToggle } from "./components/UI/ThemeToggle";
import { TooltipShowcase } from "./components/dev/TooltipShowcase";

const App = () => {
    return (
        <main className="p-10 max-w-[50%]">
            <div className="fixed top-0 z-50 m-4">
                <ThemeToggle />
            </div>
            <ButtonShowcase />
            <AccordionShowcase />
            <AlertDemonstration />
            <AlertDialogShowcase />
            <CalendarShowcase />
            <LabelShowcase />
            <CheckboxShowcase />
            <ContextMenuShowcase />
            <HoverCardShowcase />
            <InputShowcase />
            <InputOTPShowcase />
            <ProgressShowcase />
            <RadioGroupShowcase />
            <ScrollAreaShowcase />
            <SelectShowcase />
            <SeparatorShowcase />
            <SkeletonShowcase />
            <SonnerShowcase />
            <TextareaShowcase />
            <ToggleShowcase />
            <TooltipShowcase />
            {/* Add more components as needed */}
            <div className="h-[200vh]"></div>
        </main>
    );
};

export default App;
