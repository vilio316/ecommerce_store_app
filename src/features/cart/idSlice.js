import { createSlice } from "@reduxjs/toolkit"

const id_to_store = createSlice({
    name: "uuid",
    initialState: {
        id_val: ""
    },
    reducers:{

        updateID: (state, action) =>{
            return {...state, id_val:action.payload}
        }
        ,
        deleteID: (state) => {
            return {...state, id_val: "0000"}
        }
    }
})

export const user_id = (state) => state.uuid.id_val
export default id_to_store.reducer
export const {updateID, deleteID} = id_to_store.actions