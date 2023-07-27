import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOrders} from "./OrdersThunk";

interface State {
  orders: IOrder[];
}

const initialState: State = {
  orders: []
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, { payload: orders }: PayloadAction<IOrder[]>) => {
      state.orders = orders;
    });
  }
});

export const ordersReducer = ordersSlice.reducer;