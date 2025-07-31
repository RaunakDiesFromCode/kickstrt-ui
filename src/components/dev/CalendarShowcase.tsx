"use client";

import * as React from "react";
import { Calendar } from "../UI/Calendar";

export function CalendarShowcase() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className=""
            captionLayout="dropdown"
        />
    );
}
