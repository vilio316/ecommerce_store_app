import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartLength } from "../features/cart/cartContentSlice";
import { signOut } from "../supabase/authfiles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteID, user_email } from "../features/cart/idSlice";
import { priceReset } from "../features/cart/cartContentSlice";
import supaInit from "../supabase/supaconfig";
import { user_id } from "../features/cart/idSlice";
import { useNavigate } from "react-router-dom";

export default function Header(){
    let cart_length = Number(useSelector(cartLength));
    let [number, numberSwitch] = useState(0);
    let uuid = useSelector(user_id) 
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [modal_state, setMod] = useState(false)
    let email = useSelector(user_email)
    

    useEffect(()=> {async function getNo(){ 
        const {data} = await supaInit.from("cart_updated").select("cart").eq("id", uuid);
        let badge_val = data[0].cart.length;
        numberSwitch(badge_val)
    }
    getNo()
}, [])

    return(
        <div className="grid five_cols centered_items nav_bar">
            <p style={{fontSize:"1.5rem", fontWeight:"bold"}}><a href={'/'}>TheDummyStore</a></p>
            <a href={"/products/1"}>Products</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <div className="grid centered_items two_cols">  
        <IconButton onMouseEnter={()=> setMod(true)} onMouseLeave={()=> setMod(false)} style={{position: "relative"}}>
            <Person color="secondary"/>
            {modal_state ? <div style={{position: "absolute", left:"0", zIndex:"1", width:'7.5rem'}}>
        <p>{email}</p>
        <ul>
            <li>Your Cart</li>
            <li>Offers & Discounts</li>
            <li>Payment Methods</li>
            <li>Sign Out</li>
        </ul>
       </div> : <div></div>
       }
        </IconButton>
        <IconButton>
            <a href={'/products/cart'}>
        <Badge badgeContent={Number(number)} color="success">
            <ShoppingCartRounded color="success"/>
       </Badge>
       </a> 
       </IconButton>

      
            </div>
        </div>
    )
}

