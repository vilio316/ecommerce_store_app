import { createSlice } from "@reduxjs/toolkit";
const cartContentSlice = createSlice({
    name: "number",
    initialState:{
    value: 0, total : 0,
    },
    reducers:{
        itemAdded: (state, action) => {
            state.value += action.payload;
        }, 
        itemRemoved: (state, action) =>{
            if(action.payload > 0)
            state.value -= action.payload
        },
        priceTotal: (state, action)=>{
            state.total += action.payload
    }
    }
})
export const cartLength = (state) => state.number.value;
export default cartContentSlice.reducer
export const {itemAdded, itemRemoved, priceTotal} = cartContentSlice.actions
