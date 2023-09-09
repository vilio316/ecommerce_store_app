let baseURL = "https://dummyjson.com/"
export async function fetchProducts(n, skips){
    let loaded = true
    let all_products_call = await fetch(`${baseURL}products?limit=${n}&skip=${skips}`)
    let all_products_res = all_products_call.json();
    return all_products_res
}

export async function fetchProductInfo(id){
    let product_call = await fetch(`${baseURL}products/${id}`);
    let product_res = await product_call.json();
    return product_res;
}