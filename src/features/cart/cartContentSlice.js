import { configureStore, createSlice } from "@reduxjs/toolkit";
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
        state.value -= action.payload;
        if(state.value < 0){
            state.value = 0
        }
        },
        priceTotal: (state, action)=>{
            state.total += action.payload;
            if(state.total < 0){
                state.total = 0
            }
    }, 
        priceReset : (state) => {
            return {...state, value: 0, total:0 }
        }
    }
})
export const cartLength = (state) => state.number.value;
export default cartContentSlice.reducer
export const {itemAdded, itemRemoved, priceTotal, priceReset} = cartContentSlice.actions

