import { createSlice } from '@reduxjs/toolkit';
import supaInit from '../../supabase/supaconfig';
import { useSelector } from 'react-redux';
import { ContactSupportOutlined } from '@mui/icons-material';

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

 export const addToSupa = (item, array)=> async(dispatch)=>{
    dispatch(addItem(item))
    array.push(item)
    let id;
    const blaster = await supaInit.from("cart_updated").select("id")
    id = blaster.data[0].id
    const {data} = await supaInit.from("cart_updated").update({ 
      cart: array,
        item_number : array.length,
    }).eq("id", id);
}

export const deleteFromSupa = (item, array)=> async(dispatch)=>{
   dispatch(removeItem(item));
   let str = item.name
   console.log(str)
   const newArr = array.filter((member)=> member.name !== str )
   console.log(newArr)
  const blaster = await supaInit.from("cart_updated").select("id");
  let id
   id = blaster.data[0].id
   const {data} = await supaInit.from("cart_updated").update({ 
    cart: newArr,
    item_number : array.length,
   }).eq("id", id);
}


