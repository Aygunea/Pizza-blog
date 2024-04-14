import { createSlice } from "@reduxjs/toolkit";

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: wishlist,
    },
    reducers: {
        addWishlist: (state, action) => {
            const { id } = action.payload;
            const existingIndex = state.items.findIndex(item => item.id === id);
            if (existingIndex > -1) {
                state.items.splice(existingIndex, 1)
            } else {
                const newItem = { ...action.payload };
                state.items.push(newItem);
            }
            localStorage.setItem('wishlist', JSON.stringify(state.items));
        },
        removeWishlist: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(state.items));
        }
    }
});

export const { addWishlist,removeWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
