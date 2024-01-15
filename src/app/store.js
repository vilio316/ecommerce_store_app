import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice.js'
import numberReducer from '../features/cart/cartContentSlice.js'
import uuidReducer from "../features/cart/idSlice.js"

export const cartStore = configureStore({
    reducer:{
        cart: cartReducer,
        number: numberReducer,
        uuid: uuidReducer,
    }
})
