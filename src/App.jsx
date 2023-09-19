import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Fab, Grid, Icon, IconButton, Rating, ThemeProvider, Typography, createTheme} from '@mui/material';
import demoImg from './assets/react.svg'
import { testTheme } from './assets/mui_themes/themes';
import { useLoaderData } from 'react-router-dom';
import { ProductCard } from './components/ProductsHomepage';
function App() {
  function Hero(){
    return(   
      <div className="grid centered_items hero">
        <div className="grid centered_items" style={{width: "50%"}}>
            <Typography paragraph variant="h4">The Dummy Store</Typography>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora sint inventore quae provident possimus minus, totam, dolorum blanditiis earum unde laudantium rem ratione magnam ipsum repellendus beatae aspernatur minima.</p>
            <a href={"/products/1"}><Button variant='contained' color="error" onClick={()=> console.log("Wryyyyyyyyyy")} size='small'>Discover our Collection</Button></a>
        </div>
      </div>
    )
  }

    function Products(){
      let cover_products = useLoaderData();
      let abraca = cover_products.products;
      return(
        <>
        <Typography variant='h4' className='center_text'>
            <p>Products</p>
            </Typography>
            <Typography variant='subtitle1' className='center_text'>
            <p>A selection of our finest products</p>
            </Typography>
        <Grid container spacing={1}>
        {abraca.map((prod) =>
          <ProductCard entry={prod} key={prod.title}/>
          )}
        </Grid>
        <a className='center_text' style={{fontStyle:"italic", width: "100%", display:"block", margin:"0.5rem 0", fontSize:"1.5rem"}} href={'/products/1'}>See More....</a>
        
        </>
      )

    }

    function NextSection(){
      return(
        <Grid container>
          <Grid item xs={12} sm={9}>
            <Typography paragraph variant="h3">Clean and fragrant soy wax</Typography>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet sed amet excepturi tempore nam hic culpa pariatur 
              aliquid atque, nobis voluptatem quidem ipsa, error perferendis quia provident sit iste.</p>
          </Grid>
          <Grid container item xs={12} sm={3} justifyContent={"center"} alignContent={"center"}>
          <div>
            <img src={demoImg} alt="skrooge_wryyyy" width={"100%"}/>
          </div>
          </Grid>
          </Grid>
      )
    }

    function Testimonials(){
      return(
    <Grid container spacing={1.5} mt={1} mb={1}>
          <Grid item xs={12} sm={4} md={4}>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
        </Grid>

    </Grid>
      )
    }
  return(
  <>
    <Hero/>
    <Products/>
    <NextSection/>
    <Testimonials/>
    </>
  )
  
}
export default App
