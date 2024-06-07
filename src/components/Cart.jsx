import { Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { DeleteForeverRounded, ShoppingCartCheckout } from "@mui/icons-material";
import supaInit from "../supabase/supaconfig";
import {Button} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { user_id } from "../features/cart/idSlice";
import { useDispatch } from "react-redux";
import { clearSupa } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const looper_for_total = (array) =>{
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += (array[i].price * array[i].quantity)
    }
    return total
} 

export default function Cart(){
let [cart, cartLoad] = useState([])
let [grandTotal, updateTotal] = useState(0)
let user = useSelector(user_id)
let [cart_size, setTrue] = useState(false)



 useEffect(()=> {async function getCart(){
    const {data, error} = await supaInit.from("cart_updated").select("cart").eq("id", user);
    let omniverse = data[0].cart
    cartLoad(...cart, omniverse)
    for(let i =0; i < omniverse.length; i++){
        updateTotal((state) => state += (omniverse[i].quantity * omniverse[i].price))
    }
    if(omniverse.length > 0){
        setTrue(true)
    }
    }
    getCart()
}, [])

return(
    <>
    {cart_size ? 
    <>
    <CartBody cart={cart}/>
    </>
 : 
 <>
    <EmptyCart/>
</>
}
</>
)
}


function EmptyCart(){
    return(
        <>
       <Header/>
    <Typography paragraph variant="h3">
        Checkout
    </Typography>
    <div style={{display: 'grid', justifyItems:"center", alignItems:"center", height:"70vh"}}>
    <div>
    <Typography paragraph variant="h2">
    Nothing's in Your Cart Yet!
    </Typography>
    <p style={{textAlign:"center"}}>Click <a style={{textDecoration:"underline"}} href={`/home`}>here</a> to find exactly what fits you!</p>
    </div>
    </div>
    <Footer/>
    </> 
    )
}


function CartBody(props) {
    let cartes = props.cart
    let dispatch = useDispatch();
    let nav = useNavigate();
    let iden = useSelector(user_id)

    return(
        <>
        <Header/>
        <Typography paragraph variant="h3">
            Checkout
        </Typography>
        <Table aria-label="Cart Table" style={{width: "100%"}}>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Item Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total ($) </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cartes.map((item)=>  <TableRow key={Math.random()* 2000}>
                        <TableCell>
                            <Grid container columnSpacing={0.75}>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <div className="grid centered_items">
                                <img src={item.thumbnail} style={{width: "10rem"}} className="rounded_images"/>
                                </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={8} justifySelf={"center"} alignSelf={"center"}>
                                <p style={{display: "block", fontWeight:"bold"}}><a href={`/product/${item.id}`}>{item.name}</a></p>
                                </Grid>
                            </Grid>
                            </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{Number(String(item.price)).toFixed(2) * Number(String(item.quantity)).toFixed(2)}</TableCell>
                    </TableRow>
    )}
    <TableRow>
        <TableCell ><span style={{fontSize: "2.5rem", fontWeight:"bold"}}>Grand Total: </span></TableCell>
        <TableCell align="right" colSpan={4}><span style={{fontSize: "2.5rem", fontWeight:"bold"}}>$ {looper_for_total(cartes).toFixed(2)}</span></TableCell>
    </TableRow>
            </TableBody> 
        </Table>
        <div className="grid centered_items" style={{gridTemplateColumns:"auto auto", justifyContent:"center", gap:"1rem"}}>
        <Button color="success"  variant="contained">
            <ShoppingCartCheckout/>
        < span style={{color:'white', padding:"0.5rem 0 "}}>Proceed to Checkout</span>
        </Button>
        <Button color='error' variant="contained" onClick={() => {
            dispatch(clearSupa(iden));
            nav('/products/cart')
        }}>
            <DeleteForeverRounded/>
            <span style={{color:'white', padding:"0.5rem 0 "}}>Clear Cart</span>
        </Button>
        </div>
        <Footer></Footer>
    </> 
    )
}