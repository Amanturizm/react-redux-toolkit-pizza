import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
  cartDishes: ICartDish | null;
}

const initialState: State = {
  cartDishes: null,
}

const clientSideSlice = createSlice({
  name: 'client-side',
  initialState,
  reducers: {
    addOrRemoveDish: (state, { payload: { type, id } }: PayloadAction<{ type: string, id: string }>) => {
      if (!state.cartDishes) {
        state.cartDishes = { [id]: 1 };
      }

      if (type === 'add') {
        state.cartDishes[id] = 1;
      } else if (type === 'remove') {
        delete state.cartDishes[id];
      }
    }
  },
  extraReducers: (builder) => {

  }
});

export const clientSideReducer = clientSideSlice.reducer;
export const { addOrRemoveDish } = clientSideSlice.actions;