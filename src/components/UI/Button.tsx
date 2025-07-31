// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Loader2Icon } from "lucide-react";

const baseStyles =
    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:border-destructive aria-invalid:ring-destructive/40 text-secondary-foreground/90 hover:text-secondary-foreground";

const buttonVariants = cva(`${baseStyles} kickstrt-effects`, {
    variants: {
        variant: {
            default:
                "bg-primary/80 text-primary-foreground/90 hover:bg-primary hover:text-primary-foreground",
            destructive:
                "bg-destructive/80 hover:bg-destructive text-destructive-foreground/90 hover:text-destructive-foreground ",
            outline:
                "border border-input bg-background hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary/80 hover:bg-secondary",
            ghost: "hover:bg-accent dark:hover:bg-accent/50 shadow-none",
            link: "underline-offset-4 hover:underline bg-transparent border-none shadow-none cursor-pointer",
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 px-6 has-[>svg]:px-4",
            icon: "size-9 p-0",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

type ButtonProps = {
    isLoading?: boolean;
    icon?: React.ReactNode;
    asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            isLoading = false,
            icon,
            children,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size }), className)}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2Icon className="size-4 animate-spin" />}
                {icon && !isLoading && (
                    <span className="inline-block">{icon}</span>
                )}
                {children && <span className="truncate">{children}</span>}
            </Comp>
        );
    }
);

Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
