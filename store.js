// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./src/features/productsSlice";
import cartReducer from "./src/features/cartSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});
