//store
import BasketSlice from './Slice/BasketSlice';
import CategorySlice from './Slice/ProductsSlice'
import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from './Slice/WishlistSlice';

export const store = configureStore({
  reducer: {
    products: CategorySlice,
    basket: BasketSlice,
    wishlist: WishlistSlice
  }
})