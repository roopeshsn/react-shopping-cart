import { configureStore } from "@reduxjs/toolkit";
import cartItemSlice from "./CartItemSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer, cartItem: cartItemSlice.reducer },
});

export default store;
