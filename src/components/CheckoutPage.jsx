import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { user_id } from "../features/cart/idSlice";
import { useState, useEffect } from "react";
import supaInit from "../supabase/supaconfig";
import { Typography } from "@mui/material";
import { looper_for_total } from "./Cart";

export function CheckoutPage(){
let discount_codes = ["COMPLETIONIST", "FREEDELIVER", "COVFEFE", "INTERRELATED", "YELLOW", "DORCAS", "REMONTADA", "CHELSEA"]
let [cart, cartUpdate] = useState([])
let [gt, up_gt] = useState(0)
let user = useSelector(user_id)
let [discount_code, setDiscountCode] = useState("")
let [disc_percent, changePercent] = useState(0)

useEffect(()=> {async function getCart(){
    const {data, error} = await supaInit.from("cart_updated").select("cart").eq("id", user);
    let omniverse = data[0].cart
    up_gt(looper_for_total(omniverse).toFixed(2))
    cartUpdate(...cart, omniverse)
    console.log(cart)
    }
    getCart()
}, [])

function checkDisc(parameter){
    let param = parameter.toUpperCase()
    if(discount_codes.indexOf(param) !== -1){
        let disc_charge = 0.05 * discount_codes.indexOf(param) 
        changePercent(disc_charge)
        alert(`${disc_charge * 100}% Discount Applied`)
    }
    else{
        changePercent(0);
        alert('Invalid Code Provided')
    }
}
    return(
         <>
            <Header/>
            <Typography variant="h2">
                Checkout
            </Typography>
            <Typography variant="h4">
                Order Details
            </Typography>
            <div style={{width: "100%", padding:"0.5rem"}}>
                {cart.map((item) => (
                    <>
                    <div className="grid three_cols" id="checkout_container" key={item.name}>
                        <div>
                            <img src={item.thumbnail} alt={item.name} style={{width: '90%', opacity: "0.85", borderRadius:"1.5rem"}}/>
                        </div>
                        <div>
                            <p>{item.name} x {item.quantity}</p>
                            <p>{item.qty} @ {item.price}</p>
                        </div>
                        <div>
                            <p style={{textAlign:"end"}}>  {Number(Number(String(item.price)).toFixed(2) * Number(String(item.quantity)).toFixed(2)).toFixed(2)}  </p>
                        </div>
                    </div>
                    </>
                ))}
            </div>

            <div className="grid two_cols" style={{gap: '1rem'}}>
            <input id='discount' type="text" onChange={(e)=> {setDiscountCode(e.target.value); console.log(discount_code)}} style={{outline: 'none', border: '5px solid blue', borderRadius:"1.25rem", fontSize: "1.5rem", padding:"0 0.5rem", textIndent:"1.5rem"}} />
            <button onClick={()=> checkDisc(discount_code)}>Check Discount Code!</button>
            </div>

            <div style={{width: "100%", display:"grid"}}>
                <div className="grid" style={{gridTemplateColumns:"auto auto", justifySelf:"center", width: "90%", padding:"0.5rem"}}>
                    <p>Total:</p>
                    <p style={{textAlign:"end"}}>{gt}</p>
                </div>
                <div className="grid" style={{gridTemplateColumns:"auto auto", justifySelf:"center", padding:"0.5rem", width:"90%"}}>
                    <p>Delivery Surcharge:</p>
                    <p style={{textAlign:"end"}}> +12.00</p>
                </div>
                <div className="grid" style={{gridTemplateColumns:"auto auto", justifySelf:"center", padding:"0.5rem", width:"90%"}}>
                    <p>Discount Applied:</p>
                    <p style={{textAlign:"end"}}> -{(gt * disc_percent).toFixed(2)}</p>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}