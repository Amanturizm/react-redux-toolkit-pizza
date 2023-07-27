import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../../axiosApi";

export const fetchAll = createAsyncThunk<IDish[]>(
  'dishes/fetchAll',
  async () => {
    const { data } = await axiosApi.get<IDishesApi | null>('/dishes.json');
    return data ? Object.keys(data).map(id => ({ ...data[id], id })) : [];
  }
);

export const fetchOne = createAsyncThunk<TDishApi | null, string>(
  'dishes/fetchOne',
  async (id) => {
    const { data } = await axiosApi.get<TDishApi | null>(`/dishes/${id}.json`);

    return data ? data : null;
  }
);

export const createOne = createAsyncThunk<void, TDishApi>(
  'dishes/createOne',
  async (newDish) => {
    await axiosApi.post('/dishes.json', newDish);
  }
);

export const editOne = createAsyncThunk<void, { id: string, editDish: TDishApi }>(
  'dishes/editOne',
  async ({ id, editDish }) => {
    await axiosApi.put(`/dishes/${id}.json`, editDish);
  }
);

export const deleteOne = createAsyncThunk<void, string>(
  'dishes/deleteOne',
  async (id) => {
    await axiosApi.delete(`/dishes/${id}.json`);
  }
);