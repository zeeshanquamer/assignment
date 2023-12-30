import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import CartSlice from "./slices/cartSlice";
export const Store = configureStore({
  reducer: {
    auth: authSlice,
    cart: CartSlice,
  },
});
