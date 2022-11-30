import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsVisible: false,
  notification: null,
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = slice.actions;

export default slice.reducer;
