import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice.js'

export const cartStore = configureStore({
    reducer:{
        cart: cartReducer,
    }
})