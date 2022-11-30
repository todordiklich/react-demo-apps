import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  changed: false,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItem(state, action) {
      state.totalPrice += action.payload.price;
      state.totalQuantity++;
      state.changed = true;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
        return;
      }

      state.items[itemIndex].quantity++;
    },
    removeItem(state, action) {
      state.totalPrice -= action.payload.price;
      state.totalQuantity--;
      state.changed = true;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemToRemove = state.items[itemIndex];

      if (itemToRemove.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return;
      }

      state.items[itemIndex].quantity--;
    },
    resetCart(state) {
      state.items = initialState;
    },
  },
});

export const cartActions = slice.actions;

export default slice.reducer;
