import { createSlice } from "@reduxjs/toolkit";
import {fetchAll, fetchOne} from "./AdminThunk";

interface State {
  dishes: IDish[];
  currentDish: TDishApi | null;
}

const initialState: State = {
  dishes: [],
  currentDish: null,
}

const adminSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload: dishes }) => {
      state.dishes = dishes;
    });

    builder.addCase(fetchOne.fulfilled, (state, { payload: currentDish }) => {
      state.currentDish = currentDish;
    });
  }
});

export const adminReducer = adminSlice.reducer;