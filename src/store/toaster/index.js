import { toasterSlice } from "./slice";

export const { addToast, removeToasts, increaseId, hideById } =
  toasterSlice.actions;

export const toastsSelector = (state) => state.toaster.toasts;
export const toastIdSelector = (state) => state.toaster.id;
