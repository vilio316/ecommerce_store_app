import { createSlice } from "@reduxjs/toolkit"

const id_to_store = createSlice({
    name: "uuid",
    initialState: {
        id_val: "zero"
    },
    reducers:{
        updateID: (state, action) =>{
            state.id_val = action.payload
        } 
    }
})
export default id_to_store.reducer
export const {updateID} = id_to_store.actions