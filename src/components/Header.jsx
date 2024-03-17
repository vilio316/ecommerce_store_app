import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartLength } from "../features/cart/cartContentSlice";
import { signOut } from "../supabase/authfiles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteID } from "../features/cart/idSlice";
import { revertState } from "../features/cart/cartSlice";
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
        <IconButton onClick={() => {
            dispatch(deleteID())
            //dispatch(revertState())
            dispatch(priceReset())
            signOut();
            navigate('/');
        }}
        >
            <Person color="secondary"/>
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