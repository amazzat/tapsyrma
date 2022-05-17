/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../common/Button";

export function Modal({ onCancel, onConfirm, show, description, title }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={onCancel}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed inset-0 z-[8888] flex h-screen w-screen items-center justify-center bg-scroll backdrop-blur-sm"
        >
          <div
            role="dialog"
            className="max-w-md rounded-lg border-neutral-700 bg-neutral-800 p-8 shadow-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="mb-4 text-center text-xl font-bold text-zinc-300">
              {title}
            </h1>
            <p className="mb-3 text-base font-normal text-zinc-400">
              {description}
            </p>
            <div className="flex space-x-4">
              <Button
                className="w-fit flex-1 border-red-900 bg-red-600 hover:bg-red-700 hover:text-zinc-300 focus:border-red-500"
                type="button"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
              <Button
                className="w-fit flex-1 border-emerald-900 bg-emerald-600 hover:bg-emerald-700 hover:text-zinc-300 focus:border-emerald-500"
                type="button"
                onClick={() => onConfirm()}
              >
                Confirm
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
