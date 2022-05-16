import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export default authSlice.reducer;
