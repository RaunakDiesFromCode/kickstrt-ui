"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../UI/Accordion";

export default function AccordionShowcase() {
    return (
        <div className=" p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
                Accordion Showcase
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full rounded-md border p-1 border-accent"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Kickstart UI?</AccordionTrigger>
                    <AccordionContent>
                        Kickstart UI is a utility-first design system built on
                        top of TailwindCSS with custom design tokens and
                        prebuilt components for rapid development.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Is it compatible with Dark Mode?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. All components and tokens are designed to respond
                        to Tailwind’s dark mode strategy and theme-based
                        variants.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize styles?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely. You can override classes or extend
                        components using Tailwind, `cva`, or your own custom
                        tokens.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Our flagship product combines cutting-edge
                            technology with sleek design. Built with premium
                            materials, it offers unparalleled performance and
                            reliability.
                        </p>
                        <p>
                            Key features include advanced processing
                            capabilities, and an intuitive user interface
                            designed for both beginners and experts.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Shipping Details</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We offer worldwide shipping through trusted courier
                            partners. Standard delivery takes 3-5 business days,
                            while express shipping ensures delivery within 1-2
                            business days.
                        </p>
                        <p>
                            All orders are carefully packaged and fully insured.
                            Track your shipment in real-time through our
                            dedicated tracking portal.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Return Policy</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We stand behind our products with a comprehensive
                            30-day return policy. If you&apos;re not completely
                            satisfied, simply return the item in its original
                            condition.
                        </p>
                        <p>
                            Our hassle-free return process includes free return
                            shipping and full refunds processed within 48 hours
                            of receiving the returned item.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
