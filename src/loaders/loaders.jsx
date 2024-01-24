let baseURL = "https://dummyjson.com/"
import { useSelector } from "react-redux";
import supaInit from "../supabase/supaconfig";
import { cartStore } from "../app/store";
import { user_id } from "../features/cart/idSlice";


    async function fetchProducts(n, skips){
    let all_products_call = await fetch(`${baseURL}products?limit=${n}&skip=${skips}`)
    let all_products_res = all_products_call.json();
    return all_products_res
}

 async function fetchProductInfo(id){
    let product_call = await fetch(`${baseURL}products/${id}`);
    let product_res = await product_call.json();
    return product_res;
}

    async function fetchID(){
        let id_search = await supaInit.from("cart_updated").select("id")
        return id_search.data[0].id
    }
export {fetchProductInfo, fetchProducts, fetchID}

