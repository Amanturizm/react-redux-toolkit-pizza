import { createSlice } from "@reduxjs/toolkit";
import {createOne, deleteOne, editOne, fetchAll, fetchOne} from "./DishesThunk";

interface State {
  dishes: IDish[];
  dishesLoading: boolean;
  currentDish: TDishApi | null;
  currentDishLoading: boolean;
  createOrEditDishLoading: boolean;
  deleteLoading: boolean;
}

const initialState: State = {
  dishes: [],
  dishesLoading: false,
  currentDish: null,
  currentDishLoading: false,
  createOrEditDishLoading: false,
  deleteLoading: false,
}

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    clearCurrentDish: (state) => { state.currentDish = null },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {state.dishesLoading = true});
    builder.addCase(fetchAll.fulfilled, (state, { payload: dishes }) => {
      state.dishes = dishes;
      state.dishesLoading = false;
    });
    builder.addCase(fetchAll.rejected, (state) => {state.dishesLoading = false});

    builder.addCase(fetchOne.pending, (state) => {state.currentDishLoading = true});
    builder.addCase(fetchOne.fulfilled, (state, { payload: currentDish }) => {
      state.currentDish = currentDish;
      state.currentDishLoading = false;
    });
    builder.addCase(fetchOne.rejected, (state) => {state.currentDishLoading = true});

    builder.addCase(createOne.pending, (state) => {state.createOrEditDishLoading = true});
    builder.addCase(createOne.fulfilled, (state) => {state.createOrEditDishLoading = false});
    builder.addCase(createOne.rejected, (state) => {state.createOrEditDishLoading = false});

    builder.addCase(editOne.pending, (state) => {state.createOrEditDishLoading = true});
    builder.addCase(editOne.fulfilled, (state) => {state.createOrEditDishLoading = false});
    builder.addCase(editOne.rejected, (state) => {state.createOrEditDishLoading = false});

    builder.addCase(deleteOne.pending, (state) => {state.deleteLoading = true});
    builder.addCase(deleteOne.fulfilled, (state) => {state.deleteLoading = false});
    builder.addCase(deleteOne.rejected, (state) => {state.deleteLoading = false});
  }
});

export const dishesReducer = dishesSlice.reducer;
export const { clearCurrentDish } = dishesSlice.actions;