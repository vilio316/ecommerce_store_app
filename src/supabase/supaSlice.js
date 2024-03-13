import supaInit from "./supaconfig"
import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const supaSlice = createApi({
    reducerPath : "supadata",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        findUser : builder.query({
            queryFn : async(email, pwd) => {
                const { data, error } = await supaInit.auth.signInWithPassword({
                    email: email,
                    password: pwd,
                })
            }
        }),
       
    })
})
export const { useFindUserQuery } = supaSlice