import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartLength } from "../features/cart/cartContentSlice";
import { SignOut } from "../supabase/authfiles";
import { useEffect, useState } from "react";
import supaInit from "../supabase/supaconfig";
export default function Header(){
    let cart_length = Number(useSelector(cartLength));
    let [number, numberSwitch] = useState(0);

    useEffect(()=> {async function getNo(){
        const {data}  = await supaInit.from("cart_updated").select("item_number");
        numberSwitch(data[0].item_number)
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
        <IconButton onClick={()=> SignOut()}>
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