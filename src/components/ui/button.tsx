import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 animated-gradient-border relative z-10",
  {
    variants: {
      variant: {
        default: "bg-primary text-black hover:bg-primary/90 button-rgb",
        destructive: "bg-destructive text-white hover:bg-destructive/90 button-rgb",
        outline: "border-0 bg-card/80 text-foreground hover:bg-accent hover:text-accent-foreground button-rgb",
        secondary: "bg-card/80 text-foreground hover:bg-card button-rgb",
        ghost: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground button-rgb",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-primary text-black hover:bg-primary/90 hover:shadow-neon-cyan button-rgb button-rgb-glow",
        "neon-outline": "border-0 bg-card/80 text-primary hover:bg-primary hover:text-black button-rgb button-rgb-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
