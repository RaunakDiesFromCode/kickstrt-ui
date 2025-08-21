export interface ComponentEntry {
    path: string; // Path to the component file relative to repo root
    dependencies?: string[]; // NPM packages required for this component
    component?: string[]; // Name of the components required by this component
}

export const componentMap: Record<string, ComponentEntry> = {
    Accordion: {
        path: "src/components/UI/Accordion.tsx",
        dependencies: [
            "clsx",
            "class-variance-authority",
            "tailwind-merge",
            "radix-ui",
            "lucide-react",
        ],
    },
    Alert: {
        path: "src/components/UI/Alert.tsx",
        dependencies: ["clsx", "class-variance-authority", "tailwind-merge"],
    },
    AlertDialogue: {
        path: "src/components/UI/AlertDialogue.tsx",
        dependencies: ["radix-ui"],
    },
    Avatar: {
        path: "src/components/UI/Avatar.tsx",
        dependencies: ["clsx", "tailwind-merge"],
    },
    Button: {
        path: "src/components/UI/Button.tsx",
        dependencies: [
            "clsx",
            "class-variance-authority",
            "tailwind-merge",
            "radix-ui",
            "lucide-react",
        ],
    },
    Calendar: {
        path: "src/components/UI/Calendar.tsx",
        dependencies: [
            "react-day-picker",
            "clsx",
            "tailwind-merge",
            "radix-ui",
            "lucide-react",
        ],
        component: ["Button"],
    },
    Card: {
        path: "src/components/UI/Card.tsx",
        dependencies: ["clsx", "tailwind-merge"],
    },
    Checkbox: {
        path: "src/components/UI/Checkbox.tsx",
        dependencies: ["radix-ui", "lucide-react", "clsx", "tailwind-merge"],
    },
    Command: {
        path: "src/components/UI/Command.tsx",
        dependencies: ["cmdk", "lucide-react"],
    },
    ContextMenu: {
        path: "src/components/UI/ContextMenu.tsx",
        dependencies: ["radix-ui", "lucide-react"],
    },
    Dialog: {
        path: "src/components/UI/Dialog.tsx",
        dependencies: ["radix-ui", "lucide-react"],
    },
    HoverCard: {
        path: "src/components/UI/HoverCard.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    Input: {
        path: "src/components/UI/Input.tsx",
        dependencies: ["clsx", "tailwind-merge"],
    },
    InputOTP: {
        path: "src/components/UI/InputOTP.tsx",
        dependencies: ["input-otp", "clsx", "tailwind-merge", "lucide-react"],
    },
    Label: {
        path: "src/components/UI/Label.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    Popover: {
        path: "src/components/UI/Popover.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    Progress: {
        path: "src/components/UI/Progress.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    RadioGroup: {
        path: "src/components/UI/RadioGroup.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge", "lucide-react"],
    },
    ScrollArea: {
        path: "src/components/UI/ScrollArea.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    Select: {
        path: "src/components/UI/Select.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge", "lucide-react"],
    },
    Seperator: {
        path: "src/components/UI/Seperator.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
    Skeleton: {
        path: "src/components/UI/Skeleton.tsx",
        dependencies: ["clsx", "tailwind-merge"],
    },
    Sonner: {
        path: "src/components/UI/Sonner.tsx",
        dependencies: ["sonner"],
        component: ["theme-provider"],
    },
    Switch: {
        path: "src/components/UI/Switch.tsx",
        dependencies: ["radix-ui"],
    },
    TextArea: {
        path: "src/components/UI/TextArea.tsx",
        dependencies: ["clsx", "tailwind-merge"],
    },
    ThemeToggle: {
        path: "src/components/UI/ThemeToggle.tsx",
        dependencies: ["lucide-react"],
        component: ["theme-provider", "Button"],
    },
    Toggle: {
        path: "src/components/UI/Toggle.tsx",
        dependencies: [
            "radix-ui",
            "clsx",
            "tailwind-merge",
            "class-variance-authority",
        ],
    },
    Tooltip: {
        path: "src/components/UI/Tooltip.tsx",
        dependencies: ["radix-ui", "clsx", "tailwind-merge"],
    },
};
