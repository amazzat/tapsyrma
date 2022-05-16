import { createSlice } from "@reduxjs/toolkit";
import { sum } from "../../lib/sum";

const initialState = {
  value: 0
};

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
