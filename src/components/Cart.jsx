import { Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { pickSlice } from "../features/cart/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ShoppingCartCheckout } from "@mui/icons-material";
import {Button} from "@mui/material";

export default function Cart(){
    let cart_price = useSelector((state)=> state.number.total);
let cart_items = useSelector(pickSlice);
let a = 0;
return(
    <>
    <Typography paragraph variant="h3">
        Checkout
    </Typography>
    <Table aria-label="Cart Table">
        <TableHead>
            <TableRow>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {cart_items.map((item)=>  <TableRow key={Math.random()* 2000}>
                    <TableCell>
                        <Grid container>
                            <Grid item xs={6}>
                                <div className="grid centered_items">
                            <img src={item.thumbnail} style={{width: "10rem"}} className="rounded_images"/>
                            </div>
                            </Grid>
                            <Grid item alignSelf={"center"}>
                            <p><a href={`/product/${item.id}`}>{item.name}</a></p>
                            </Grid>
                        </Grid>
                        </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{Number(item.price) * Number(item.quantity)}</TableCell>
                </TableRow>
)}
            <TableRow>
                <TableCell colSpan={2}
                ><Typography paragraph variant="h4">
                    Grand Total
                    </Typography>
                    </TableCell>
                    <TableCell colSpan={2}><p style={{fontWeight: "bold", textAlign: "right", fontSize:"1.75rem"}}>${cart_price.toFixed(2)}</p></TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <div className="grid centered_items">
    <Button color="success"  variant="contained" style={{width: "50%"}}>
        <ShoppingCartCheckout/>
    < span style={{color:'white', padding:"0.5rem 0 "}}>Proceed to Checkout</span>
    </Button>
    </div>
</>
)
}