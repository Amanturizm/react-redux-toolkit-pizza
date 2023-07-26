import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
  cartDishes: ICartDishes | null;
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
    },
    increaseDish: (state, { payload: id }: PayloadAction<string>) => {
      if (state.cartDishes) {
        state.cartDishes[id] = state.cartDishes[id] + 1;
      }
    },
    decreaseDish: (state, { payload: id }: PayloadAction<string>) => {
      if (state.cartDishes) {
        if (state.cartDishes[id] === 0) return;
        state.cartDishes[id] = state.cartDishes[id] - 1;
      }
    }
  },
  extraReducers: (builder) => {

  }
});

export const clientSideReducer = clientSideSlice.reducer;
export const { addOrRemoveDish, increaseDish, decreaseDish } = clientSideSlice.actions;