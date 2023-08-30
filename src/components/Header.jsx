import { Person, ShoppingCartRounded } from "@mui/icons-material";
import { Badge, Icon, IconButton } from "@mui/material";

export default function Header(){
    return(
        <div className="grid five_cols centered_items nav_bar">
            <p><a href={'/'}>CompanyName</a></p>
            <a href={"/products"}>Products</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <div className="grid centered_items two_cols">
        <IconButton>
            <Person color="secondary"/>
        </IconButton>
        <IconButton>
        <Badge badgeContent={localStorage.length} color="success">
            <ShoppingCartRounded color="success"/>
       </Badge> 
       </IconButton>
            </div>
        </div>
    )
}