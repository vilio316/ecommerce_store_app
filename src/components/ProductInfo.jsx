import { Button, Card, CardContent, CardMedia, Grid, Icon, Rating, ThemeProvider, Typography} from "@mui/material"
import { AddShoppingCartSharp} from "@mui/icons-material"
import { testTheme } from "../assets/mui_themes/themes"
import { useLoaderData } from "react-router-dom"
import Cart from "./Cart"
export default function ProductInfo(){
    let product_data = useLoaderData();

    const productCartDetails = {
        name: `${product_data.title}`,
        price: `${product_data.price}`,
        quantity: 1,
    }
    function addToStorage(){
        localStorage.setItem(`${product_data.title}`, JSON.stringify(productCartDetails));
        console.log(localStorage)
        console.log(localStorage.getItem(`${product_data.title}`))
    }
    return(
        <>
        <ThemeProvider theme={testTheme}>
        <Grid container spacing={1} justifyContent={"center"} alignContent={"center"} mb={3}>
            <Grid item xs={12} md={4} justifySelf={"center"} alignSelf={"center"}>
            <div className="grid" style={{padding: "0.25rem 0.5rem"}}>
            <img 
                className="rounded_images" 
                src={product_data.thumbnail} 
                alt="A demo picture of the react logo" 
                style={{width:"90%"}}/>
            </div>
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
                    <label htmlFor="qty">Quantity: <input type="number" defaultValue={1} min={1} max={10} id="qty"></input>
                   </label>
                   <form style={{margin: "0.5rem 0"}}>
                       <input type="radio" name="payplan"></input>
                       <label>One Time Purchase</label>
                      
                       <input type="radio" name="payplan"></input>
                        <label>Instalments</label>
                      
                      </form> 
                    <Button color="success" variant="outlined" onClick={addToStorage}>
                        <AddShoppingCartSharp></AddShoppingCartSharp>
                        Add to Cart
                    </Button>
               </CardContent>
           </Card>
       </Grid>
       </Grid>
       </ThemeProvider>
       <Cart/>
       </>
)
}

 