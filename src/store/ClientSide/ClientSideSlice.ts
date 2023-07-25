import { createSlice } from "@reduxjs/toolkit";

interface State {
  cartDishes: ICartDish[];
}

const initialState: State = {
  cartDishes: []
}

const clientSideSlice = createSlice({
  name: 'client-side',
  initialState,
  reducers: {
    addDish: (state, { payload: newDish }) => {
      state.cartDishes.push(newDish);
    }
  },
  extraReducers: (builder) => {

  }
});

export const clientSideReducer = clientSideSlice.reducer;
export const { addDish } = clientSideSlice.actions;