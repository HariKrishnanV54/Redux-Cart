import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.js";
import wishlistSlice from "./slices/wishlistSlice.js";
import cartSlice from "./slices/cartSlice.js";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice,
    cartReducer :cartSlice
  }
});

export default cartStore;