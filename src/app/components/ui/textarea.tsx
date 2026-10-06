import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none placeholder:text-[#AEB0B5] selection:bg-[#05547A] selection:text-white flex field-sizing-content min-h-32 w-full rounded-lg border-2 border-[#AEB0B5] bg-white dark:bg-[#1A3A52] px-4 py-3 text-base text-foreground transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F5F5F5] dark:disabled:bg-[#0A1929]",
        "focus:border-[#05547A] focus:ring-2 focus:ring-[#05547A] focus:ring-offset-0",
        "hover:border-[#05547A] hover:shadow-sm",
        "aria-invalid:border-[#C71C22] aria-invalid:ring-2 aria-invalid:ring-[#C71C22]/30 aria-invalid:focus:ring-[#C71C22]",
        "dark:border-[#AEB0B5]/30 dark:focus:border-[#05547A] dark:hover:border-[#05547A]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
