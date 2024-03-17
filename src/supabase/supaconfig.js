import { createClient} from "@supabase/supabase-js";

let supabaseURL = import.meta.env.VITE_MY_CLIENT_URL
let supabaseKey = import.meta.env.VITE_MY_KEY

export {supabaseURL}

let supaInit = createClient(supabaseURL, supabaseKey)

export default supaInit;

const cartChannel = supaInit.channel("cart-changes").on('postgres_changes', 
{event: "*", schema: "public", table:"cart"}).subscribe()

const cart_channel = supaInit.channel("cartUpdates").on('postgres_changes', 
{event: "*", schema: "public", table:"cart_updated"}).subscribe()