import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import ProductInfo from './components/ProductInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductsHomepage from './components/ProductsHomepage.jsx'
import { fetchProductInfo, fetchProducts } from './loaders/loaders.js'
const availableRoutes = createBrowserRouter([{
  path: '/', element: <App/>,
},
{
  path:'/product', element: <ProductInfo/>,
},
{
  path:'/products/', element:<ProductsHomepage/>, loader: ()=>{
    return fetchProducts();
  },
},
{
  path: '/product/:productId', element : <ProductInfo/>, 
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header></Header>
<RouterProvider router={availableRoutes}/>
<Footer></Footer>
</>
)
