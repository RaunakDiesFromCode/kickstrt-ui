"use client";

import * as React from "react";
import { Calendar } from "../UI/Calendar";

export function CalendarShowcase() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Calendar Showcase
            </h2>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className=""
                captionLayout="dropdown"
            />
        </div>
    );
}
