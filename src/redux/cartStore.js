import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.js";

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice
    }
});

export default cartStore;