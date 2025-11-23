"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-md hover:shadow-lg hover:scale-[1.03] cursor-pointer",
        outline:
          "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
        soft: "bg-[var(--primary-light)]/20 text-[var(--primary)] hover:bg-[var(--primary-light)]/30",
        ghost: "text-[var(--primary)] hover:bg-[var(--primary-light)]/20",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
