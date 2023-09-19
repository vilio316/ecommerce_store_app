import { Button, Card, CardContent, CardMedia, Grid, Icon, Rating, ThemeProvider, Typography} from "@mui/material"
import { useEffect, useState } from "react"
import { AddShoppingCartSharp, Delete} from "@mui/icons-material"
import { testTheme } from "../assets/mui_themes/themes"
import { useLoaderData } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToSupa, deleteFromSupa} from '../features/cart/cartSlice';
import { addItem, fetchStoreFromSupa, removeItem } from "../features/cart/cartSlice"
import { itemAdded, itemRemoved, priceTotal } from "../features/cart/cartContentSlice"
export default function ProductInfo(){
    useEffect(()=> dispatch(fetchStoreFromSupa()), [])
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
    return(
        <>
        <ThemeProvider theme={testTheme}>
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
                    <label htmlFor="qty">Quantity: <input type="number" defaultValue={1} min={1} max={10} onChange={(e)=> increaseQty(e.target.value)} id="qty"></input>
                   </label>
                   <form style={{margin: "0.5rem 0"}}>
                       <input type="radio" name="payplan"></input>
                       <label>One Time Purchase</label>
                      
                       <input type="radio" name="payplan"></input>
                        <label>Instalments</label>
                      
                      </form> 
                    <Button color="success" variant="outlined" onClick={
                        ()=>{ 
                        dispatch(addItem(productCartDetails));
                        dispatch(itemAdded(Number(qty)));
                        dispatch(priceTotal(Number(productCartDetails.price) * qty));
                        dispatch(addToSupa(productCartDetails))
                        }
                    }>
                        <AddShoppingCartSharp></AddShoppingCartSharp>
                        Add to Cart
                    </Button>
                    <Button style={{marginLeft:"0.75rem"}} color="secondary" variant="outlined" onClick={()=> {
                        dispatch(removeItem(productCartDetails));
                        dispatch(itemRemoved(Number(qty)));
                        dispatch(priceTotal(- (Number(productCartDetails.price) * qty)))
                        dispatch(deleteFromSupa(productCartDetails))
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
       </ThemeProvider>
       </>
)
}

 