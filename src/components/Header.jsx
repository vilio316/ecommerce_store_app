import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartLength } from "../features/cart/cartContentSlice";
import { signOut } from "../supabase/authfiles";
import { useEffect, useState } from "react";
import supaInit from "../supabase/supaconfig";
import { user_id } from "../features/cart/idSlice";

export default function Header(){
    let cart_length = Number(useSelector(cartLength));
    let [number, numberSwitch] = useState(0);
    let uuid = useSelector(user_id) 

    useEffect(()=> {async function getNo(){ 
        const {data} = await supaInit.from("cart_updated").select("cart").eq("id", uuid);
        let badge_val = data[0].cart.length;
        console.log(badge_val)
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
        <IconButton onClick={()=> signOut()}>
            <a href={'/'}>
            <Person color="secondary"/>
            </a>
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