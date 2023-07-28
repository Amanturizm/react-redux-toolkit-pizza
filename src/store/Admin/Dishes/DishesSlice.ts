import { createSlice } from "@reduxjs/toolkit";
import {createOne, deleteOne, editOne, fetchAll, fetchOne} from "./DishesThunk";

interface State {
  dishes: IDish[];
  dishesLoading: boolean;
  currentDish: TDishApi | null;
  currentDishLoading: boolean;
  createOrEditDishLoading: boolean;
  deleteLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  dishes: [],
  dishesLoading: false,
  currentDish: null,
  currentDishLoading: false,
  createOrEditDishLoading: false,
  deleteLoading: false,
  errorMessage: ''
}

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    clearCurrentDish: (state) => { state.currentDish = null },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, state => {
      state.dishesLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(fetchAll.fulfilled, (state, { payload: dishes }) => {
      state.dishes = dishes;
      state.dishesLoading = false;
    });
    builder.addCase(fetchAll.rejected, (state, { error: { message } }) => {
      state.dishesLoading = false;
      state.errorMessage = message || '';
    });

    builder.addCase(fetchOne.pending, state => {
      state.currentDishLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(fetchOne.fulfilled, (state, { payload: currentDish }) => {
      state.currentDish = currentDish;
      state.currentDishLoading = false;
    });
    builder.addCase(fetchOne.rejected, (state, { error: { message } }) => {
      state.currentDishLoading = true
      state.errorMessage = message || '';
    });

    builder.addCase(createOne.pending, state => {
      state.createOrEditDishLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(createOne.fulfilled, state => {state.createOrEditDishLoading = false});
    builder.addCase(createOne.rejected, (state, { error: { message } }) => {
      state.createOrEditDishLoading = false;
      state.errorMessage = message || '';
    });

    builder.addCase(editOne.pending, state => {
      state.createOrEditDishLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(editOne.fulfilled, state => {state.createOrEditDishLoading = false});
    builder.addCase(editOne.rejected, (state, { error: { message } }) => {
      state.createOrEditDishLoading = false;
      state.errorMessage = message || '';
    });

    builder.addCase(deleteOne.pending, state => {
      state.deleteLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(deleteOne.fulfilled, state => {state.deleteLoading = false});
    builder.addCase(deleteOne.rejected, (state, { error: { message } }) => {
      state.deleteLoading = false;
      state.errorMessage = message || '';
    });
  }
});

export const dishesReducer = dishesSlice.reducer;
export const { clearCurrentDish } = dishesSlice.actions;