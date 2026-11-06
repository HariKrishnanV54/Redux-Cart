import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products");
    return result.data.products; // <-- MUST return the data
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        allProducts: [], // <-- Capitalized 'P' to match Products.jsx
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
            state.allProducts = [];
            state.error = "";
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
            state.error = "";
        });
        builder.addCase(getAllProducts.rejected, (state) => {
            state.loading = false;
            state.allProducts = [];
            state.error = "API CALL FAILED";
        });
    }
});

export default productSlice.reducer;