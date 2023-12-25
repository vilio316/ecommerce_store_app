import { Card, CardMedia, ThemeProvider, Typography, CardContent, CardActionArea, IconButton, Grid, ButtonGroup, Button } from "@mui/material";
import { FavoriteRounded, ShoppingCart } from "@mui/icons-material";
import { useLoaderData } from "react-router-dom";
import { testTheme} from "../assets/mui_themes/themes";
import { useState } from "react";

export function ProductCard(props){
  let product = props.entry;
let [omega, useOmega] = useState(true);
return(
  <Grid item xs={6} md={3} key={product.title}>
    <div className="grid centered_items">
      <Card className="styled_card">
        <CardContent>        
        <CardActionArea LinkComponent={"a"} href={`/product/${product.id}`}>
        <CardMedia className="card_image" component={"img"} alt={product.title} src={product.images[0]} height={200}/>
          <Typography className='typ' variant="h5">{product.title}</Typography>
          <p className="desc_p">{product.description}</p>
          <p className='product_price'>${product.price.toFixed(2)}</p>
          </CardActionArea>
        
          <div className='grid'>
          <span style={{placeSelf:"end"}}>
          <IconButton aria-label='shopping_cart'>
            <ShoppingCart color="success"/>
          </IconButton>
          <IconButton onClick={()=> {useOmega(!omega)}}>
            <FavoriteRounded color={omega? "": "secondary" }/>
          </IconButton>

          </span>
          </div>
        </CardContent>
        </Card>
        </div>
        </Grid>
)
}

export default function ProductsHomepage() {
    let products= useLoaderData();
    let ostriches = products.products;
        return(
        <>
        <ThemeProvider theme={testTheme}>
        <Typography paragraph variant="h4">All Products</Typography>
        <Grid container spacing={1.5} marginBottom={1.5}>
        {ostriches.map((product) => <ProductCard entry={product} key={product.id}/> )}
        </Grid>
        <p style={{width: "100%", textAlign:"center"}}>Showing {ostriches[0].id} - {ostriches[19].id} of 100</p>
        <Grid container justifyContent={"center"} marginBottom={2}>
        <ButtonGroup>
          <Button><a href={'/products/1'} className="no_deco">1</a></Button>
          <Button><a href={'/products/2'} className="no_deco">2</a></Button>
          <Button><a href={'/products/3'} className="no_deco">3</a></Button>
          <Button><a href={'/products/4'} className="no_deco">4</a></Button>
          <Button><a href={'/products/5'} className="no_deco">5</a></Button>
        </ButtonGroup>
        </Grid>
        </ThemeProvider>
        </>
    )
    }
<ProductsHomepage/>