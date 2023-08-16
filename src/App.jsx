import { useState, useEffect } from 'react';
import { Button, Typography} from '@mui/material';
import demoImg from './assets/react.svg'
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./index.css"
function App() {
  function Hero(){
    return(
      <div className="grid centered_items hero">
        <div className="grid centered_items" style={{width: "50%"}}>
            <p>The Company Name</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempora sint inventore quae provident possimus minus, totam, dolorum blanditiis earum unde laudantium rem ratione magnam ipsum repellendus beatae aspernatur minima.</p>
            <Button variant='contained' color="success" style={{fontFamily:"Indie Flower", textTransform:"lowercase", borderRadius:"1.5rem", backgroundColor:"orange"}}>Discover our Collection</Button>
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
          <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        <div>
            <div>
            <img src={demoImg} alt="product-image"/>
            </div>
        <div>
          <p>Spiced PlumBerries</p>
          <p style={{textAlign:"end"}}>&copy; 6599</p>
        </div>
        </div>

        </div>
        </div>
      )
    }

    function NextSection(){
      return(
        <div className='grid two_cols'>
          <div>
            <Typography>Clean and fragrant soy wax</Typography>
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
    <Header/>
    <Hero/>
    <Products/>
    <NextSection/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
export default App
