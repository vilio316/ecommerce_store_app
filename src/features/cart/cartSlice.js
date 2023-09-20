import { createSlice } from '@reduxjs/toolkit';
import supaInit from '../../supabase/supaconfig';

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
export const addToSupa = (item)=> async(dispatch)=>{
    const {data} = await supaInit.from("cart").upsert([item]);
    dispatch(addItem(item))
}
export const deleteFromSupa = (item)=> async(dispatch)=>{
    const {data} = await supaInit.from("cart").delete().eq("id",item.id);
    dispatch(removeItem(item))
}

export const pickSlice = (state)=> state.cart
export default cartSlice.reducer
export const {addItem, removeItem} = cartSlice.actions

