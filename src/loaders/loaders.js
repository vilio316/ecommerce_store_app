import supaInit from "../supabase/supaconfig";

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
    let id;
    const blaster = await supaInit.from("cart_updated").select("id");
    id = blaster.data[0].id
    console.log(id)
    let {data} = await supaInit.from("cart_updated").select("cart").eq("id", id);
    return data[0].cart
}