import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { supabaseApi } from "../api";
import authReducer from "./auth/slice";
import counterReducer from "./counter/slice";
import toasterReducer from "./toaster/slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    toaster: toasterReducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware)
});

setupListeners(store.dispatch);

export default store;
