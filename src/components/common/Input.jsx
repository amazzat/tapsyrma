import clsx from "clsx";
import { forwardRef } from "react";

/**
 * @deprecated Use component classes
 */
export const Input = forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "w-full rounded-lg border border-zinc-900 bg-zinc-900 py-2 px-4 text-base font-normal text-zinc-300",
      "placeholder:text-zinc-500",
      "transition-colors duration-150 ease-in",
      "focus:border-zinc-500 focus:ring-0",
      "disabled:cursor-not-allowed disabled:text-zinc-500",
      className
    )}
    {...props}
  />
));
