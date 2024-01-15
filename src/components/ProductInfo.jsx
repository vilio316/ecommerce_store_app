import { Button, Card, CardContent, CardMedia, Grid, Icon, Rating, ThemeProvider, Typography} from "@mui/material"
import { useEffect, useState } from "react"
import { AddShoppingCartSharp, Delete} from "@mui/icons-material"
import { testTheme } from "../assets/mui_themes/themes"
import { useLoaderData } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import supaInit from "../supabase/supaconfig"
import { addToSupa, deleteFromSupa, pickSlice} from '../features/cart/cartSlice';
import { addItem, removeItem } from "../features/cart/cartSlice"
import { itemAdded, itemRemoved, priceTotal } from "../features/cart/cartContentSlice";
import Header from "./Header"
import Footer from "./Footer"

export function ProductInfo(){
    let [cart_state, updateCartState] = useState([])
    useEffect(()=>{ async function fetchfromSupa(){
        const {data} = await supaInit.from("cart_updated").select("cart");
        updateCartState(data[0].cart);
    }
    fetchfromSupa()
}
    , []
    )
    let product_data = useLoaderData();
    let dispatch = useDispatch();
    let [qty, increaseQty] = useState(1);
    const productCartDetails = {
        name: `${product_data.title}`,
        price: `${product_data.price}`,
        quantity: qty,
        id : `${product_data.id}`,
        thumbnail: `${product_data.thumbnail}`,
    }
    console.log(cart_state)
    return(
        <>
        <ThemeProvider theme={testTheme}>
            <Header/>
        <Grid container spacing={1} justifyContent={"center"} alignContent={"center"} mb={3}>
            <Grid item xs={12} md={4} justifySelf={"center"} alignSelf={"center"}>
            <img 
                className="rounded_images" 
                src={product_data.thumbnail} 
                alt="A demo picture of the react logo" 
                style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} md={8}>
            <Card>
                <CardContent>
                    <Typography variant="h6">{product_data.title}</Typography>
                    <Rating defaultValue={product_data.rating} precision={0.25} readOnly/>
                    <span style={{fontStyle: "italic"}}>({product_data.rating})</span>
                    <p></p>
                    <span className="product_price">${product_data.price.toFixed(2)}</span>

                    <div className="product_desc">
                      <p>{product_data.description}</p>
                    </div>
                    <label htmlFor="qty">Quantity:<button className="round_buttons" onClick={()=> {
                        if(qty > 1) increaseQty((numb) => numb - 1)
                    }}>
                        -
                        </button> 
                        <input type="number" readOnly min={1} max={10} value={qty} id="qty" style={{margin: "0 0.5rem", outline: "none"}}/> 
                    <button color='success' className="round_buttons" onClick={()=>{
                        increaseQty((numb) => numb + 1)
                    }}>
                         + </button> 
                   </label>
                   <form style={{margin: "0.5rem 0"}}>
                       <input type="radio" name="payplan"></input>
                       <label>One Time Purchase</label>
                      
                       <input type="radio" name="payplan"></input>
                        <label>Instalments</label>
                      
                      </form> 
                    <Button color="success" variant="outlined" onClick={
                        ()=>{ 
                            updateCartState({...cart_state, productCartDetails})
                        dispatch(itemAdded(Number(qty)));
                        dispatch(priceTotal(Number(productCartDetails.price) * qty));
                        dispatch(addToSupa(productCartDetails, cart_state))
                        }
                    }>
                        <AddShoppingCartSharp></AddShoppingCartSharp>
                        Add to Cart
                    </Button>
                    <Button style={{marginLeft:"0.75rem"}} color="secondary" variant="outlined" onClick={()=> {
                        dispatch(itemRemoved(Number(qty)));
                        dispatch(priceTotal(- (Number(productCartDetails.price) * qty)))
                        dispatch(deleteFromSupa(productCartDetails, cart_state))
                    }    
                    }
                        >
                        <Delete/>
                        Remove from Cart
                    </Button>
               </CardContent>
           </Card>
       </Grid>
       </Grid>
       <Footer/>
       </ThemeProvider>
       </>
)
}
 