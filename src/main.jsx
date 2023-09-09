import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import ProductInfo from './components/ProductInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cart from '../src/components/Cart.jsx'
import ProductsHomepage from './components/ProductsHomepage.jsx'
import { fetchProductInfo, fetchProducts } from './loaders/loaders.js'
import ErrorPage from './components/ErrorPage.jsx'
import { Provider } from 'react-redux'
import { cartStore } from './app/store.js'
const availableRoutes = createBrowserRouter([
  {
  path: '/', element: <App/>, loader: ()=> {
    return fetchProducts(4, 0);
  }, errorElement: <ErrorPage/>
},
{
  path:'/products/1', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 0);
  }, errorElement: <ErrorPage/>
},
{
  path:'/products/2', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 20);
  }, errorElement: <ErrorPage/>
},
{
  path:'/products/3', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 40);
  }, errorElement: <ErrorPage/>
},
{
  path:'/products/4', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 60);
  }, errorElement: <ErrorPage/>
},
{
  path:'/products/5', element:<ProductsHomepage/>, loader: ()=> {
    return fetchProducts(20, 80);
  },errorElement: <ErrorPage/>
},
{
  path: '/product/:productId', element : <ProductInfo/>, loader: ({params})=> {
    return fetchProductInfo(params.productId)
  }, errorElement: <ErrorPage/>
},
{
  path: 'products/cart', element : <Cart/>, errorElement: <ErrorPage/>
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={cartStore}>
    <Header/>
<RouterProvider router={availableRoutes}/>
</Provider>
<Footer/>

</>
)
