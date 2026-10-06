import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const alertVariants = cva(
  "relative w-full rounded-lg border-2 px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#132F4C] text-[#002E45] dark:text-[#E6F1F4] border-[#AEB0B5]/30",
        destructive:
          "text-[#C71C22] dark:text-[#EF5350] bg-[#C71C22]/5 dark:bg-[#C71C22]/10 border-[#C71C22] [&>svg]:text-[#C71C22] dark:[&>svg]:text-[#EF5350] *:data-[slot=alert-description]:text-[#C71C22]/90 dark:*:data-[slot=alert-description]:text-[#EF5350]/90",
        success:
          "text-[#2E8540] dark:text-[#66BB6A] bg-[#2E8540]/5 dark:bg-[#2E8540]/10 border-[#2E8540] [&>svg]:text-[#2E8540] dark:[&>svg]:text-[#66BB6A] *:data-[slot=alert-description]:text-[#2E8540]/90 dark:*:data-[slot=alert-description]:text-[#66BB6A]/90",
        warning:
          "text-[#002E45] dark:text-[#FFA726] bg-[#F0AB00]/10 dark:bg-[#F0AB00]/10 border-[#F0AB00] [&>svg]:text-[#F0AB00] dark:[&>svg]:text-[#FFA726] *:data-[slot=alert-description]:text-[#002E45]/90 dark:*:data-[slot=alert-description]:text-[#FFA726]/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight text-base",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
