let baseURL = "https://dummyjson.com/"
import { useSelector } from "react-redux";
import supaInit from "../supabase/supaconfig";
import { user_id } from "../features/cart/idSlice";
import { cartStore } from "../app/store";

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
    const getCart = async() =>{
        console.log(cartStore.getState())
       /* const {data} = await supaInit.from("cart_updated").select("cart").eq("id", id);
        let omicron = data[0].cart;
        console.log(omicron) */
        
    }




export {fetchProductInfo, fetchProducts, getCart}

