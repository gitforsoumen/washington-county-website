import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 transition-all duration-200 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#05547A] text-white [a&]:hover:bg-[#044261] focus-visible:ring-[#05547A]",
        secondary:
          "bg-[#E6F1F4] text-[#002E45] [a&]:hover:bg-[#D1E7ED] focus-visible:ring-[#05547A]",
        destructive:
          "bg-[#C71C22] text-white [a&]:hover:bg-[#A61519] focus-visible:ring-[#C71C22]",
        success:
          "bg-[#2E8540] text-white [a&]:hover:bg-[#257032] focus-visible:ring-[#2E8540]",
        warning:
          "bg-[#F0AB00] text-[#002E45] [a&]:hover:bg-[#D99600] focus-visible:ring-[#F0AB00]",
        outline:
          "border-2 border-[#05547A] text-[#05547A] bg-transparent [a&]:hover:bg-[#05547A] [a&]:hover:text-white focus-visible:ring-[#05547A]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
