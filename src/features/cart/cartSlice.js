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
export const addToSupa = (item, arr)=> async(dispatch)=>{
    dispatch(addItem(item));
    arr.push(item)
    let id;
    const blaster = await supaInit.from("cart_updated").select("id")
    id = blaster.data[0].id
    console.log(id)
    const {data} = await supaInit.from("cart_updated").update({
        total_price : Number(item.quantity) * Number(item.price), 
        cart: arr, 
        item_number: Number(item.quantity)}).eq("id", id);
    console.log(data)
}
export const deleteFromSupa = (item)=> async(dispatch)=>{
    const {data} = await supaInit.from("cart").delete().eq("id",item.id);
    dispatch(removeItem(item))
}

export const pickSlice = (state)=> state.cart
export default cartSlice.reducer
export const {addItem, removeItem} = cartSlice.actions

