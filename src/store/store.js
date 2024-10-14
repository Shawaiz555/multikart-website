import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productSlice';
import CartDetailSlice from './CartDetails/CartDetailSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartDetailSlice,
  },
});

export default store;
