import { Logout, Person, ShoppingCartRounded } from "@mui/icons-material";
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
            
            {modal_state ? <div style={{position: "absolute", left:"-12.5rem", top:"2.5rem", padding: '0.5rem', zIndex:"1", backgroundColor:"rgba(255,55,25, 0.85)", borderRadius:"1.5rem", }}>
        <p style={{fontWeight:"bold"}}>{email}</p>
        <ul style={{listStyleType:"none"}}>
            <li><a href={'/products/cart'}>Your Cart</a></li>
            <li>Offers & Discounts</li>
            <li>Payment Methods</li>
            <button  style={{outline :"none", border: "none", backgroundColor: "red", borderRadius:"1.5rem", padding: "0.5rem"}} onClick={() => {
            dispatch(deleteID())
            dispatch(priceReset())
            signOut();
            navigate('/');
        }}>
            <Icon>
                <Logout/>
            </Icon>
            Sign Out</button>
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

