import { createSlice } from "@reduxjs/toolkit";
const cartContentSlice = createSlice({
    name: "number",
    initialState:{
    value: 0
    },
    reducers:{
        itemAdded: (state, action) => {
            state.value += action.payload;
        }, 
        itemRemoved: (state, action) =>{
            state.value -= action.payload
        }
    }
})
export const cartLength = (state) => state.number.value;
export default cartContentSlice.reducer
export const {itemAdded, itemRemoved} = cartContentSlice.actions
