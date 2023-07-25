import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const fetchAll = createAsyncThunk<IDish[]>(
  'dishes/fetchAll',
  async () => {
    const { data } = await axiosApi.get<IDishesApi | null>('/dishes.json');
    return data ? Object.keys(data).map(id => ({ ...data[id], id })) : [];
  }
);