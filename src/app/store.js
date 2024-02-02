import { configureStore } from "@reduxjs/toolkit";
import appdata from "../features/data/dataSlice";
export const store = configureStore({
  reducer: {
    data: appdata,
  },
});
