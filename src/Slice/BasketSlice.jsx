import { createSlice } from "@reduxjs/toolkit";

let cart = JSON.parse(localStorage.getItem('cart')) || [];

export const BasketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: cart,
        totalcount: cart.reduce((total, item) => total + item.count, 0),
        totalPrice: cart.reduce((total, item )=> total + item.price * item.count, 0)
    },
    reducers: {
        addBasket: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.count++;
            } else {
                const newItem = { ...action.payload, count: 1 };
                state.items.push(newItem);
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            state.totalcount = state.items.reduce((toplam, item) => toplam + item.count, 0);
            state.totalPrice=state.items.reduce((total, item )=> total + item.price * item.count, 0)
        },
        decrease: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count--;
                } else {
                    state.items = state.items.filter(item => item.id !== id);
                }
                localStorage.setItem('cart', JSON.stringify(state.items));
                state.totalcount = state.items.reduce((toplam, item) => toplam + item.count, 0);
                state.totalPrice=state.items.reduce((total, item )=> total + item.price * item.count, 0)
            }
        },
        removeBasket: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.items));
            state.totalcount = state.items.reduce((toplam, item) => toplam + item.count, 0);
            state.totalPrice=state.items.reduce((total, item )=> total + item.price * item.count, 0)
        }
    }
});

export const { addBasket, decrease, removeBasket, totalCount,totalPrice } = BasketSlice.actions;
export default BasketSlice.reducer;
