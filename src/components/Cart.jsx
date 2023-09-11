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
            {cart_items.map((item)=>  <TableRow key={Math.random()* 2000}>
                    <TableCell>
                        <div className="grid centered_items" style={{width: "70%", placeSelf:"center"}}>
                        <img src={item.thumbnail} style={{width: "15%"}} className="rounded_images"></img>
                        </div>
                        </TableCell>
                    <TableCell><a href={`/product/${item.id}`}>{item.name}</a>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{Number(item.price) * Number(item.quantity)}
                    </TableCell>
                </TableRow>
)}
            <TableRow>
                <TableCell colSpan={3}
                ><Typography paragraph variant="h4">
                    Grand Total
                    </Typography>
                    </TableCell>
                    <TableCell colSpan={2}><p style={{fontWeight: "bold", textAlign: "right"}}>{cart_price}</p></TableCell>
            </TableRow>
        </TableBody>
    </Table>
</>
)
}