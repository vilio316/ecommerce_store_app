import { Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ShoppingCartCheckout } from "@mui/icons-material";
import supaInit from "../supabase/supaconfig";
import {Button} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { user_id } from "../features/cart/idSlice";
import { useLoaderData } from "react-router-dom";

;
export default function Cart(){
//let [total, setTotal] = useState(0);
let [cart, cartLoad] = useState([])
let cart_price = useSelector((state)=> state.number.total);
let user = useSelector(user_id)

 useEffect(()=> {async function getCart(){
    const {data, error} = await supaInit.from("cart_updated").select("cart").eq("id", user);
    cartLoad(...cart, data[0].cart)
    }

    getCart()
}, [])


return(
   <>
    <Header/>
    <Typography paragraph variant="h3">
        Checkout
    </Typography>
    <Table aria-label="Cart Table" style={{width: "90%"}}>
        <TableHead>
            <TableRow>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {cart.map((item)=>  <TableRow key={Math.random()* 2000}>
                    <TableCell>
                        <Grid container>
                            <Grid item xs={4} md={6}>
                                <div className="grid centered_items">
                            <img src={item.thumbnail} style={{width: "10rem"}} className="rounded_images"/>
                            </div>
                            </Grid>
                            <Grid item alignSelf={"center"}>
                            <p style={{display: "block"}}><a href={`/product/${item.id}`}>{item.name}</a></p>
                            </Grid>
                        </Grid>
                        </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{Number(String(item.price)) * Number(String(item.quantity))}</TableCell>
                </TableRow>
)}
        </TableBody> 
    </Table>
    <div className="grid centered_items">
    <Button color="success"  variant="contained" style={{width: "50%"}}>
        <ShoppingCartCheckout/>
    < span style={{color:'white', padding:"0.5rem 0 "}}>Proceed to Checkout</span>
    </Button>
    </div>
    <Footer></Footer>
</>

)
}
