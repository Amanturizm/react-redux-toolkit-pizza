import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { RootState } from "../../app/store";

export const addOrder = createAsyncThunk<void, ICustomer, { state: RootState }>(
  'client-side/add-order',
  async (customer, { getState }) => {
    const order = getState().clientSide.cartDishes;
    await axiosApi.post('/orders.json', { customer, order });
  }
);