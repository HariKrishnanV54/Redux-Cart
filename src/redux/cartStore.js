import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.js";
import wishlistSlice from "./slices/wishlistSlice.js";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice
  }
});

export default cartStore;