import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsVisible: false, notification: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        name: action.payload.name,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
