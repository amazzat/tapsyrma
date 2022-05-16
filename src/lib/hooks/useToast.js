import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToast, increaseId, toastIdSelector } from "../../store/toaster";

export function useToast() {
  const dispatch = useDispatch();
  const toastId = useSelector(toastIdSelector);

  const toast = useCallback(
    (text, timeout) => {
      dispatch(addToast({ text, id: toastId, show: true, timeout }));
      dispatch(increaseId());
    },
    [toastId]
  );

  return toast;
}
