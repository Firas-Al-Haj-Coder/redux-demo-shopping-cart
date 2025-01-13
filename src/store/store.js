import { configureStore } from "@reduxjs/toolkit"; // sehe Doks in Redux-kap ConfigureStore
import { cartReducer } from "./cartSlice";

export const store = configureStore({
    reducer: {
        cartState: cartReducer // central config point for all our slices
    }
})