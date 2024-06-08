import { createSlice } from "@reduxjs/toolkit"

const id_to_store = createSlice({
    name: "uuid",
    initialState: {
        id_val: "",
        email_val : ''
    },
    reducers:{

        updateID: (state, action) =>{
            return {...state, id_val:action.payload}
        }
        ,
        addMail : (state, action) => {
            return {...state, email_val: action.payload}
        },
        deleteID: (state) => {
            return {...state, id_val: "0000", email_val:""}
        }
    }
})

export const user_id = (state) => state.uuid.id_val
export const user_email = (state) => state.uuid.email_val
export default id_to_store.reducer
export const {updateID, deleteID, addMail} = id_to_store.actions