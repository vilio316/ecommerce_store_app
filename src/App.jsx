import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Fab, Icon, IconButton, Rating, ThemeProvider, Typography, createTheme} from '@mui/material';
import demoImg from './assets/react.svg'
import { testTheme } from './assets/mui_themes/themes';
import { FavoriteRounded, HeartBroken, ShoppingCart } from '@mui/icons-material';
function App() {
  function Hero(){
    return(
      <ThemeProvider theme={testTheme}>      
      <div className="grid centered_items hero">
        <div className="grid centered_items" style={{width: "50%"}}>
            <Typography paragraph variant="h4">The Company Name</Typography>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora sint inventore quae provident possimus minus, totam, dolorum blanditiis earum unde laudantium rem ratione magnam ipsum repellendus beatae aspernatur minima.</p>
            <Button variant='contained' color="error" onClick={()=> console.log("Wryyyyyyyyyy")} size='small'>Discover our Collection</Button>
        </div>
      </div>
      </ThemeProvider>
    )
  }

    function Products(){
      return(
        <div>
          <Typography variant='h4' className='center_text'>
            <p>Products</p>
            <Typography variant="h6">A selection of our finest products</Typography>
          </Typography>
        <div className='grid centered_items four_cols'>
          <ThemeProvider theme={testTheme}>
            <Card className='styled_card'>
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
            </ThemeProvider>
        </div>
        </div>
      )
    }

    function NextSection(){
      return(
        <div className='grid two_cols'>
          <div>
            <Typography paragraph>Clean and fragrant soy wax</Typography>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet sed amet excepturi tempore nam hic culpa pariatur aliquid atque, nobis voluptatem quidem ipsa, error perferendis quia provident sit iste.</p>
          </div>
          <div>
            <img src={demoImg} alt="skrooge_wryyyy" />
          </div>
        </div>
      )
    }

    function Testimonials(){
      return(
        <div className='grid centered_items'>
          <div className='grid three_cols'>
            <div>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
            </div>
            <div>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
            </div>
            <div>
              <img src={demoImg}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum consectetur sed ad, fugit placeat ratione. Magni repellat iusto consequuntur. Impedit laboriosam repellendus officiis at accusantium, cumque facilis id atque.</p>
            </div>
          </div>
        </div>
      )
    }
  return (
    <>
    <Hero/>
    <Products/>
    <NextSection/>
    <Testimonials/>
    </>
  )
}
export default App
