import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";

export const addOrder = createAsyncThunk<void, undefined, { state: RootState }>(
  'client-side/add-order',
  async (_, { getState }) => {
    await axiosApi.post('/orders.json', getState().clientSide.cartDishes);
  }
);