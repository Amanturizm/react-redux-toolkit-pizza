import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addOrder } from "./ClientSideThunk";

interface State {
  cartDishes: ICartDishes | null;
  addOrderLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  cartDishes: null,
  addOrderLoading: false,
  errorMessage: ''
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
        state.cartDishes[id] += 1;
      }
    },
    decreaseDish: (state, { payload: id }: PayloadAction<string>) => {
      if (state.cartDishes) {
        if (state.cartDishes[id] === 0) return;
        state.cartDishes[id] -= 1;
      }
    },
    clearCart: (state) => { state.cartDishes = null }
  },
  extraReducers: (builder) => {
    builder.addCase(addOrder.pending, state => {
      state.addOrderLoading = true;
      state.errorMessage = '';
    });
    builder.addCase(addOrder.fulfilled, state => {state.addOrderLoading = false});
    builder.addCase(addOrder.rejected, (state, { error: { message } }) => {
      state.addOrderLoading = false;
      state.errorMessage = message || '';
    });
  }
});

export const clientSideReducer = clientSideSlice.reducer;
export const { addOrRemoveDish, increaseDish, decreaseDish, clearCart } = clientSideSlice.actions;