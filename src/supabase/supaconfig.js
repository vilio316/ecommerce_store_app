import { createClient} from "@supabase/supabase-js";

let supabaseURL = "https://faaddicaczvzcddyipjo.supabase.co"
let supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhYWRkaWNhY3p2emNkZHlpcGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMjg5NjAsImV4cCI6MjAxMDcwNDk2MH0.z7Y9-Ve0AGnd4wuEmAMAa5MfJGDasxsKgIbiGBnvODY"

let supaInit = createClient(supabaseURL, supabaseKey)

export default supaInit;

const cartChannel = supaInit.channel("cart-changes").on('postgres_changes', 
{event: "*", schema: "public", table:"cart"}).subscribe()

const cart_channel = supaInit.channel("cartUpdates").on('postgres_changes', 
{event: "*", schema: "public", table:"cart_updated"}).subscribe()