import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: "cart",
    initialState: [{example:"1", bloob: "2", rod: "3"}],
    reducers:{
        addItem:(state, action) => {state.push(action.payload)}
    },
})
export const pickSlice = (state)=> state.cart
export default cartSlice.reducer
export const {addItem} = cartSlice.actions