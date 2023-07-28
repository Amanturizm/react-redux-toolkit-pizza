import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {deleteOne, fetchOrders} from "./OrdersThunk";

interface State {
  orders: IOrder[];
  ordersLoading: boolean;
  completeButtonLoading: string;
}

const initialState: State = {
  orders: [],
  ordersLoading: false,
  completeButtonLoading: '',
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, (state) => {state.ordersLoading = true});
    builder.addCase(fetchOrders.fulfilled, (state, { payload: orders }: PayloadAction<IOrder[]>) => {
      state.orders = orders;
      state.ordersLoading = false;
    });
    builder.addCase(fetchOrders.rejected, (state) => {state.ordersLoading = false});

    builder.addCase(deleteOne.pending, (state, { meta: { arg: id } }) => {
      state.completeButtonLoading = id;
    });
    builder.addCase(deleteOne.fulfilled, (state) => {
      state.completeButtonLoading = '';
    });
    builder.addCase(deleteOne.rejected, (state) => {
      state.completeButtonLoading = '';
    });
  }
});

export const ordersReducer = ordersSlice.reducer;