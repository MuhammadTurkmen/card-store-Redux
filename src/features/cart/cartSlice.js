import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // increase: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    // decrease: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount - 1;
    // },
    toggleItem: (state, { payload }) => {
      if (payload.value === "inc") {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
      }
      if (payload.value === "dec") {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleItem } = cartSlice.actions;

export default cartSlice.reducer;
