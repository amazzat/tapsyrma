import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToast } from "../../store/toaster";

export function useToast() {
  const dispatch = useDispatch();

  const toast = useCallback(
    (text, type = "info", timeout = 3000) => {
      dispatch(addToast({ text, show: true, timeout, type }));
    },
    [dispatch]
  );

  return toast;
}
