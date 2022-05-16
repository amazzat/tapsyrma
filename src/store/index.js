import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { supabaseApi } from "../api";
import counterReducer from "../features/counter/slices";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware)
});

setupListeners(store.dispatch);

export default store;
