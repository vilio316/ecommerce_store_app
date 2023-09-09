import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addItem:(state, action) =>{ return [...state, action.payload]},
        removeItem : (state, action)=> {
            state.splice(state.indexOf(action.payload), 1)
        }
    },
})
export const pickSlice = (state)=> state.cart
export default cartSlice.reducer
export const {addItem, removeItem} = cartSlice.actions

