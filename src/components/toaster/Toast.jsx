import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideById } from "../../store/toaster";

export function Toast({ text, id, show, timeout }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(hideById(id));
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [id, timeout]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="rounded-lg border border-sky-900 bg-sky-700 py-3 px-6 text-base font-medium text-zinc-300 shadow-inner"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
