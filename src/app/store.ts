import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "../store/Admin/Dishes/DishesSlice";
import { ordersReducer } from "../store/Admin/Orders/OrdersSlice";
import { clientSideReducer } from "../store/ClientSide/ClientSideSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    orders: ordersReducer,
    clientSide: clientSideReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;