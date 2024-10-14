import { createSlice } from "@reduxjs/toolkit";

const CartItemsSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    total: 0,
    loading: false,
    error: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image,
          quantity: action.payload.quantity,
          unitPrice: action.payload.unitPrice,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (total, item) => total + item.unitPrice * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, calculateTotal, clearCart } =
  CartItemsSlice.actions;

export default CartItemsSlice.reducer;
