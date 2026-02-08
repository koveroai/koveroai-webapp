import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

// If we don't have radix slot installed, we'll just use simple button/a logic, 
// but standard shadcn uses Slot. I'll stick to simple HTML button for lightweight unless I install radix.
// Directives said "Next.js + React + Tailwind", didn't strictly ask for shadcn/radix. 
// I will keep it simple and lightweight as requested.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const variants = {
            primary: "bg-deep-blue text-white hover:bg-opacity-90 shadow-sm",
            secondary: "bg-teal text-white hover:bg-opacity-90 shadow-sm",
            outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
            ghost: "hover:bg-gray-100 text-gray-700",
            danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-6 text-lg",
            icon: "h-10 w-10 p-0 flex items-center justify-center",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-blue disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
