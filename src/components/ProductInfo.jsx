import { Button, Card, CardContent, CardMedia, Grid, Icon, Rating, ThemeProvider, Typography} from "@mui/material"
import demoPic from "/src/assets/react.svg"
import { AddShoppingCartSharp} from "@mui/icons-material"
import { testTheme } from "../assets/mui_themes/themes"
import { useLoaderData } from "react-router-dom"
export default function ProductInfo(){
    let product_data = useLoaderData();
    return(
        <>
        <ThemeProvider theme={testTheme}>
        <Grid container spacing={1} justifyContent={"center"} alignContent={"center"}>
            <Grid item xs={12} md={4} justifySelf={"center"} alignSelf={"center"}>
            <div className="grid" style={{padding: "0.25rem 0.5rem"}}>
                <img src={demoPic} alt="A demo picture of the react logo" style={{width:"90%"}}/>
            </div>
            </Grid>
            <Grid item xs={12} md={8}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Spiced Plumberries</Typography>
                    <Rating defaultValue={4.43} precision={0.1} readOnly/>
                    <p>Lorem ipsum dolor amet consectetur epsilon eobard</p>
                    <span className="product_price"><del>$9.99 </del>$6.55</span>

                    <div className="product_desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur voluptates aliquid numquam, aut asperiores dicta optio ad, sed odit cumque sunt ipsam soluta eligendi, porro assumenda. Hic, placeat aspernatur.</p>
                    </div>
                    <label htmlFor="qty">
                        Quantity: <input type="number" defaultValue={1} min={1} max={10} id="qty"></input>
                    </label>
                    <form style={{margin: "0.5rem 0"}}>
                        <input type="radio" name="payplan"></input>
                        <label>One Time Purchase</label>
                       
                        <input type="radio" name="payplan"></input>
                        <label>Instalments</label>
                       
                       </form> 
                    <Button color="success" variant="outlined">
                        <AddShoppingCartSharp></AddShoppingCartSharp>
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </Grid>
        </Grid>
        </ThemeProvider>
        </>
    )
}