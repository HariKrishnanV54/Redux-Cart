import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    return result.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    allProducts: [],      // The currently displayed (and filtered) list
    dummyAllProducts: [], // The permanent master copy
    error: ""
  },
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.trim().toLowerCase();
      // Always filter against the master list (dummyAllProducts)
      state.allProducts = state.dummyAllProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.dummyAllProducts = action.payload; // Keep both populated
        state.error = "";
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
        state.allProducts = [];
        state.dummyAllProducts = [];
        state.error = "API CALL FAILED";
      });
  }
});

export const { searchProducts } = productSlice.actions;

export default productSlice.reducer;