import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { pickSlice } from "../features/cart/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function Cart(){
    let cart_price = useSelector((state)=> state.number.total);
let cart_items = useSelector(pickSlice);
let a = 0;
return(
    <>
    <Table aria-label="Cart Table">
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {cart_items.map((item)=>{
                <TableRow key={item.name}>
                    <TableCell><img src={item.thumbnail}></img></TableCell>
                    <TableCell><a href={`/product/${item.id}`}>{item.name}</a>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{Number(item.price) * Number(item.quantity)}
                    </TableCell>
                </TableRow>
            } )}
            <TableRow>
                <TableCell colSpan={4}
                ><Typography paragraph variant="h4">
                    Grand Total
                    </Typography>
                    </TableCell>
                    <TableCell>{cart_price}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <p>{cart_price}</p>
</>
)
}