import { createSlice } from "@reduxjs/toolkit";
import {fetchAll} from "./AdminThunk";

interface State {
  dishes: IDish[];
}

const initialState: State = {
  dishes: []
}

const adminSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload: dishes }) => {
      state.dishes = dishes;
    });
  }
});

export const adminReducer = adminSlice.reducer;