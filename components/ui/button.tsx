"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#d6b98c] text-black shadow-[0_18px_50px_rgba(214,185,140,0.18)] hover:-translate-y-0.5 hover:bg-[#e3cda9]",
        secondary:
          "border border-white/12 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-[#d6b98c]/40 hover:bg-white/[0.06]",
        ghost: "text-white/80 hover:bg-white/[0.05] hover:text-white"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
