import { counterSlice } from "./slice";

export const { increment } = counterSlice.actions;

export const counterSelector = (state) => state.counter.value;
