import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // Add to cart - view and wishlist component
        addCart: (state, action) => {
            const existingItem = state.find(item => item.id == action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
            }
        },
        // Remove cart item
        removeCartItem: (state, action) => {
            return state.filter(item => item.id != action.payload);
        },
        // Increment quantity
        incrementCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            }
        },
        // Decrement quantity (removes item if quantity reaches 0)
        decrementCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                    existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                } else {
                    return state.filter(item => item.id != action.payload);
                }
            }
        },
        // Empty cart
        emptyCart: () => {
            return [];
        }
    }
});

export const { addCart, removeCartItem, incrementCart, decrementCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;