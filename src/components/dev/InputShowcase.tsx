"use client";

import * as React from "react";
import { Input } from "../UI/Input";
import { Label } from "../UI/Label";

export function InputShowcase() {
    return (
        <div className="p-6 space-y-4 w-96 border border-input">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Input Showcase
            </h2>

            {/* Default Input */}
            <div className="space-y-1">
                <Label className="text-sm font-medium text-muted-foreground">
                    Default
                </Label>
                <Input type="text" placeholder="Type something..." />
            </div>

            {/* Disabled Input */}
            <div className="space-y-1">
                <Label className="text-sm font-medium text-muted-foreground">
                    Disabled
                </Label>
                <Input type="text" placeholder="Can't type here" disabled />
            </div>

            {/* Invalid Input */}
            <div className="space-y-1">
                <Label className="text-sm font-medium text-muted-foreground">
                    With Error
                </Label>
                <Input
                    type="text"
                    aria-invalid="true"
                    placeholder="Invalid value"
                />
            </div>

            {/* Password Input */}
            <div className="space-y-1">
                <Label className="text-sm font-medium text-muted-foreground">
                    Password
                </Label>
                <Input type="password" placeholder="••••••••" />
            </div>

            {/* File Input */}
            <div className="space-y-1">
                <Label className="text-sm font-medium text-muted-foreground">
                    File Upload
                </Label>
                <Input type="file" />
            </div>
        </div>
    );
}
