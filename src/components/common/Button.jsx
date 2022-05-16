import clsx from "clsx";
import { forwardRef } from "react";

export const Button = forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    type="submit"
    className={clsx(
      "w-full rounded-lg border border-sky-900 bg-sky-600 py-2 px-4 text-base font-medium text-zinc-200 shadow-inner",
      "transition-colors duration-150 ease-in",
      "focus:border-sky-500 focus:outline-none focus:ring-0",
      "disabled:cursor-not-allowed disabled:bg-sky-700 disabled:text-zinc-300",
      "hover:bg-sky-700 hover:text-zinc-300",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
