import { configureStore } from '@reduxjs/toolkit';

import cartItemsReducer from './cart-slice';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: { cart: cartItemsReducer, ui: uiReducer },
});

export default store;
