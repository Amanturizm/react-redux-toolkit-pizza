import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {deleteOne, fetchOrders} from "./OrdersThunk";

interface State {
  orders: IOrderMutation[];
  ordersLoading: boolean;
  completeButtonLoading: string;
  errorMessage: string;
}

const initialState: State = {
  orders: [],
  ordersLoading: false,
  completeButtonLoading: '',
  errorMessage: ''
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.pending, state => {
      state.ordersLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(fetchOrders.fulfilled, (state, { payload: orders }: PayloadAction<IOrderMutation[]>) => {
      state.orders = orders;
      state.ordersLoading = false;
    });
    builder.addCase(fetchOrders.rejected, (state, { error: { message } }) => {
      state.ordersLoading = false;
      state.errorMessage = message || '';
    });

    builder.addCase(deleteOne.pending, (state, { meta: { arg: id } }) => {
      state.completeButtonLoading = id;
      state.errorMessage = '';
    });
    builder.addCase(deleteOne.fulfilled, state => {
      state.completeButtonLoading = '';
    });
    builder.addCase(deleteOne.rejected, (state, { error: { message } }) => {
      state.completeButtonLoading = '';
      state.errorMessage = message || '';
    });
  }
});

export const ordersReducer = ordersSlice.reducer;