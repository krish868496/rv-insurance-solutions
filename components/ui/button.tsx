import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus:outline-none active:scale-[0.97] shadow-sm",
  {
    variants: {
      variant: {
        /** 🔵 Primary — main CTA buttons */
        default:
          "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white hover:shadow-lg hover:from-[var(--primary-light)] hover:to-[var(--primary)]",

        /** 🟡 Accent / Secondary CTA (e.g. “Get a Quote”) */
        accent:
          "bg-[var(--accent)] text-gray-900 hover:bg-[var(--accent-light)] hover:shadow-md",

        /** 🧊 Outline buttons (for neutral secondary actions) */
        outline:
          "border border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white",

        /** 🕊️ Ghost — subtle text button (e.g. “Learn more”) */
        ghost: "text-[var(--primary)] hover:bg-[var(--primary-light)]/20",

        /** ❌ Destructive (rare use) */
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",

        /** 🔗 Link-style buttons */
        link: "text-[var(--primary)] underline underline-offset-4 hover:text-[var(--primary-dark)]",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
