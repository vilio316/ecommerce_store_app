import { createSlice } from '@reduxjs/toolkit';
import supaInit from '../../supabase/supaconfig';


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addItem:(state, action) =>{ return [...state, action.payload]},
        removeItem : (state, action)=> {
            state.splice(state.indexOf(action.payload), 1)
        },
        revertState: ()=> {
            return []
        },
        refreshState : (state, action) => {
            state.concat(action.payload)
        }
    },
})

export const pickSlice = (state)=> state.cart
export default cartSlice.reducer
export const {addItem, removeItem, revertState, refreshState} = cartSlice.actions

 export const addToSupa = (item, array, id)=> async(dispatch)=>{
    dispatch(addItem(item))
    array.push(item)
    const {data} = await supaInit.from("cart_updated").update({ 
        cart: array,
        item_number : array.length,
    }).eq("id", id);   
}

export const deleteFromSupa = (item, array, id)=> async(dispatch)=>{
   dispatch(removeItem(item));
   let str = item.name
   const newArr = array.filter((member)=> member.name !== str )
   const {data} = await supaInit.from("cart_updated").update({ 
    cart: newArr,
    item_number : array.length,
   }).eq("id", id);
}

export const clearSupa = (id) => async(dispatch)=> {
    dispatch(revertState());
    const newArray = [];
    const {data, error} = await supaInit.from('cart_updated').update({
        cart: newArray,
        item_number: newArray.length,
    }).eq('id', id)
}

