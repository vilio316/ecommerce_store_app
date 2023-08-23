import { Button, Card, CardContent, CardMedia, Icon, Typography } from "@mui/material"
import demoPic from "/src/assets/react.svg"
import { AddShoppingCartSharp } from "@mui/icons-material"
export default function ProductInfo(){

    return(
        <>
        <div className="grid two_cols centered_items" style={{gridTemplateColumns:"50% auto"}}>
            <div className="grid" style={{width: "100%", padding: "0.25rem 0.5rem"}}>
                <img src={demoPic} alt="A demo picture of the react logo" style={{justifySelf: "end", alignSelf:"center" }} width="60%"/>
            </div>
            <Card>
                <CardContent>
                    <Typography>Spiced Plumberries</Typography>
                    <p>Lorem ipsum dolor amet consectetur epsilon eobard</p>
                    <p>$9.99</p>

                    <label htmlFor="">
                        Quantity: <input type="number" defaultValue={1}></input>
                    </label>
                    <div className="product_desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur voluptates aliquid numquam, aut asperiores dicta optio ad, sed odit cumque sunt ipsam soluta eligendi, porro assumenda. Hic, placeat aspernatur.</p>
                    </div>
                    <form>
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
        </div>
        </>
    )
}