import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});

export default counterSlice.reducer;
