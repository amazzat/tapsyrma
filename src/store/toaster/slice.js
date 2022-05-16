import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  toasts: []
};

export const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },
    hideById: (state, action) => {
      const index = state.toasts.findIndex(
        (toast) => toast.id === action.payload
      );

      state.toasts[index].show = false;
    },
    increaseId: (state) => {
      state.id += 1;
    }
  }
});

export default toasterSlice.reducer;
