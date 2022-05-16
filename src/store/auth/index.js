import { authSlice } from "./slice";

export const { setUser, setLoading } = authSlice.actions;

export const userSelector = (state) => state.auth.user;
export const isAuthLoadingSelector = (state) => state.auth.isLoading;
