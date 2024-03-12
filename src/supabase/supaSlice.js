import supaInit from "./supaconfig"
import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const supaSlice = createApi({
    reducerPath : "supadata",
    baseQuery: fetchBaseQuery({baseUrl : "https://www.themealdb.com/api/json/v1/1"}),
    endpoints: (builder) => ({
        /*findUser : builder.query({
            queryFn : async(email, pwd) => {
                const { data, error } = await supaInit.auth.signInWithPassword({
                    email: email,
                    password: pwd,
                })
            }
        }),*/
        findFood : builder.query({
            query : (name) => ({url : `/search.php?s=${name}`})
        })
    })
})
export const { useFindFoodQuery } = supaSlice

// www.themealdb.com/api/json/v1/1/search.php?s=