import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchOne } from "./DishesThunk";

interface State {
  dishes: IDish[];
  currentDish: TDishApi | null;
}

const initialState: State = {
  dishes: [],
  currentDish: null,
}

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    clearCurrentDish: (state) => { state.currentDish = null },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload: dishes }) => {
      state.dishes = dishes;
    });

    builder.addCase(fetchOne.fulfilled, (state, { payload: currentDish }) => {
      state.currentDish = currentDish;
    });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const { clearCurrentDish } = dishesSlice.actions;