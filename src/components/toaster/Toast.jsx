import clsx from "clsx";
import { AnimatePresence, m } from "framer-motion";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideById } from "../../store/toaster";

export function Toast({ text, id, show, timeout, type }) {
  const dispatch = useDispatch();

  const hideSelf = useCallback(() => {
    dispatch(hideById(id));
  }, [dispatch, id]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      hideSelf();
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [hideSelf, timeout]);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          onClick={hideSelf}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className={clsx([
            "cursor-pointer rounded-lg border py-3 px-6 text-base font-medium text-zinc-300 shadow-inner",
            type === "info" && "border-sky-900 bg-sky-700",
            type === "error" && "border-red-800 bg-red-600",
            type === "warning" && "border-amber-800 bg-amber-600",
            type === "success" && "border-green-900 bg-green-700"
          ])}
        >
          {text}
        </m.div>
      )}
    </AnimatePresence>
  );
}
