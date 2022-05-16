import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { sum } from "../../lib/sum";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = sum(state.value, 1);
    }
  }
});

export default counterSlice.reducer;
