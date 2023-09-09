import { Grid } from "@mui/material";
import { pickSlice } from "../features/cart/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
export default function Cart(){
let cart_items = useSelector(pickSlice);
return(
    <Grid>
    {cart_items.map((item) => 
    <Grid item>
    <Grid item>
        <img src= {item.thumbnail}/>
        <p>{item.name}</p>
        <p>{item.quantity}</p>
        <p>{Number(item.price) * Number(item.quantity)}</p>
    </Grid>
    </Grid>
    )
    }
    </Grid>
)
}