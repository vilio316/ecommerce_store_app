import { useState, useEffect } from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Fab, Icon, IconButton, Rating, Typography} from '@mui/material';
import demoImg from './assets/react.svg'
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./index.css"
import { ShoppingCart } from '@mui/icons-material';
function App() {
  function Hero(){
    return(
      <div className="grid centered_items hero">
        <div className="grid centered_items" style={{width: "50%"}}>
            <p>The Company Name</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora sint inventore quae provident possimus minus, totam, dolorum blanditiis earum unde laudantium rem ratione magnam ipsum repellendus beatae aspernatur minima.</p>
            <Button variant='contained' color="error" style={{fontFamily:"Indie Flower"}} onClick={()=> console.log("Wryyyyyyyyyy")} size='small'>Discover our Collection</Button>
        </div>
      </div>
    )
  }

    function Products(){
      return(
        <div>
          <Typography className='center_text'><p>Products</p>
          <p>A selection of some of our finest products</p>
          </Typography>
        <div className='grid centered_items four_cols'>
            <Card className='styled_card'>
              <CardActionArea LinkComponent={"a"} href='/products'>
                <CardMedia component="img" alt="Placeholder Image: React Logo" src={demoImg} style={{padding: "0.5rem"}}></CardMedia>
                <CardHeader style={{fontSize: "1.75rem"}} title="Screams Internally"/>
                <CardContent>
                  <p>A destroyed piece of fictional bs with...</p>
                  <p>$ 6.99</p><IconButton aria-label='shopping_cart'>
                    <ShoppingCart/>
                  </IconButton>
                </CardContent>
              </CardActionArea>
            </Card>
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
