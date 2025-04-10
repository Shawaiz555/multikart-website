import { createSlice } from "@reduxjs/toolkit";

const CartItemsSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    total: 0,
    loading: false,
    error: "",
    isCheckoutSuccess: false, // To track the status of checkout
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
      state.isCheckoutSuccess = false; // Reset checkout success
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
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
    checkout: (state) => {
      if (state.items.length > 0) {
        state.isCheckoutSuccess = true;
        state.items = []; // Clear cart after successful checkout
        state.total = 0;
        localStorage.removeItem("cartItems");
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateItemQuantity,
  calculateTotal,
  clearCart,
  checkout,
} = CartItemsSlice.actions;

export default CartItemsSlice.reducer;
