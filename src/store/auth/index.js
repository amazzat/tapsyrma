import { authSlice } from "./slice";

export const { setUser } = authSlice.actions;

export const userSelector = (state) => state.auth.user;
