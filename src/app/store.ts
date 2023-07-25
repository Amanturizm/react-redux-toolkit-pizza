import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../store/Admin/AdminSlice";
import { clientSideReducer } from "../store/ClientSide/ClientSideSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    clientSide: clientSideReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;