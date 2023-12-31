import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice.js'
import numberReducer from '../features/cart/cartContentSlice.js'
import supaInit from '../supabase/supaconfig.js'

export const cartStore = configureStore({
    reducer:{
        cart: cartReducer,
        number: numberReducer, 
    }
})
