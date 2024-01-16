import supaInit from "../supabase/supaconfig";
import { useSelector } from "react-redux";
import { user_id } from "../features/cart/idSlice";

let baseURL = "https://dummyjson.com/"

export async function fetchProducts(n, skips){
    let all_products_call = await fetch(`${baseURL}products?limit=${n}&skip=${skips}`)
    let all_products_res = all_products_call.json();
    return all_products_res
}

export async function fetchProductInfo(id){
    let product_call = await fetch(`${baseURL}products/${id}`);
    let product_res = await product_call.json();
    return product_res;
}

export async function fetchFromSupaBase(){
    let uuid_value =  useSelector(user_id);
    let {data} = await supaInit.from("cart_updated").select("cart").eq("id", uuid_value);
    return data[0].cart
}
