import clsx from "clsx";

export function TextLink({ children }) {
  return (
    <div
      className={clsx(
        "text-center font-medium text-zinc-300",
        "transition-colors duration-150 ease-in",
        "hover:text-zinc-400 hover:underline"
      )}
    >
      {children}
    </div>
  );
}
