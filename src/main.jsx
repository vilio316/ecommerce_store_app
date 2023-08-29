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
  path: '/', element: <App/>, loader: ()=> {
    return fetchProducts(4, 0)
  }
},
{
  path:'/products/1', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 0);
  },
},
{
  path:'/products/2', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 20);
  },
},
{
  path:'/products/3', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 40);
  },
},
{
  path:'/products/4', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 60);
  },
},
{
  path:'/products/5', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 80);
  },
},
{
  path: '/product/:productId', element : <ProductInfo/>, loader: ({params})=> {
    return fetchProductInfo(params.productId)
  }
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header/>
<RouterProvider router={availableRoutes}/>
<Footer/>
</>
)
