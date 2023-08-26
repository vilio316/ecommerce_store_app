import { Card, CardMedia, ThemeProvider, Typography, CardContent, CardActionArea, IconButton, Grid } from "@mui/material";
import { FavoriteRounded, ShoppingCart } from "@mui/icons-material";
import { useLoaderData } from "react-router-dom";
import { testTheme } from "../assets/mui_themes/themes";

export default function ProductsHomepage() {
    let products= useLoaderData();
    let ostriches = products.products;
    return(
        <>
        <ThemeProvider theme={testTheme}>
        <Typography paragraph variant="h4">All Products</Typography>
        <Grid container spacing={1.5}>
        {ostriches.map( (product) => <Grid item xs={12} md={3} key={product.id}><Card className="styled_card">
            <CardMedia className="card_image" component={"img"} alt={`${product.title}`} src={product.thumbnail}/>
        <CardContent>
        <CardActionArea LinkComponent={"a"} href={`/product/${product.id}`}>
          <Typography className='typ' variant="h5">{product.title}</Typography>
          <p>{`${product.description}`}</p>
          <span className='product_price'>${`${product.price}.99`}</span>
          </CardActionArea>
        
          <div className='grid'>
          <span style={{placeSelf:"end"}}>
          <IconButton aria-label='shopping_cart'>
            <ShoppingCart color="success"/>
          </IconButton>
          <IconButton>
          <FavoriteRounded/>
          </IconButton>
          </span>
          </div>
        </CardContent>
        </Card>
        </Grid>
        )}
        </Grid>
        </ThemeProvider>
        </>
    )
    }
<ProductsHomepage/>



/** <Card className='styled_card'>
<CardMedia className="card_image" component="img" alt="Placeholder Image: React Logo" src={demoImg}></CardMedia>
<CardContent>
<CardActionArea LinkComponent={"a"} href='/products'>
  <Typography className='typ' variant="h5">Product Name</Typography>
  <p>A destroyed piece of fictional bs with...</p>
  <span className='product_price'>$ 6.99</span>
  </CardActionArea>

  <div className='grid'>
  <span style={{placeSelf:"end"}}>
  <IconButton aria-label='shopping_cart'>
    <ShoppingCart color="success"/>
  </IconButton>
  <IconButton>
  <FavoriteRounded/>
  </IconButton>
  </span>
  </div>
</CardContent>
</Card>
</ThemeProvider>**/