import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartLength } from "../features/cart/cartContentSlice";
export default function Header(){
    let cart_length = Number(useSelector(cartLength));
    return(
        <div className="grid five_cols centered_items nav_bar">
            <p><a href={'/'}>CompanyName</a></p>
            <a href={"/products/1"}>Products</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <div className="grid centered_items two_cols">
        <IconButton>
            <Person color="secondary"/>
        </IconButton>
        <IconButton>
            <a href={'/products/cart'}>
        <Badge badgeContent={cart_length} color="success">
            <ShoppingCartRounded color="success"/>
       </Badge>
       </a> 
       </IconButton>
            </div>
        </div>
    )
}