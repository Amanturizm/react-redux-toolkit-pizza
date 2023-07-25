import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../store/Admin/AdminSlice";

export const store = configureStore({
  reducer: {
    dishes: adminReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;