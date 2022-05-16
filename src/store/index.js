import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/slices";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
