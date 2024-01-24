import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import {ProductInfo} from './components/ProductInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from '../src/components/Cart.jsx'
import ProductsHomepage from './components/ProductsHomepage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { Provider } from 'react-redux'
import { cartStore } from './app/store.js'
import { ThemeProvider } from '@mui/material'
import { testTheme } from './assets/mui_themes/themes.js'
import { SignInWmail, SignUp } from './supabase/authfiles.jsx'
import { fetchID, fetchProductInfo, fetchProducts} from './loaders/loaders.jsx'

const availableRoutes = createBrowserRouter([
  {
  path: '/', element: <SignInWmail/>, errorElement: <ErrorPage/>
},
{
  path: '/sign-up', element: <SignUp/>, errorElement: <ErrorPage/>
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
path: 'products/cart',
element : <Cart/>,
errorElement: <ErrorPage/>,
loader: ()=>{
  return fetchID()
}
},
{
  path: "/home" , 
  element: <App/>, 
  loader: ()=> {return fetchProducts(4,0)}, 
  errorElement: <ErrorPage/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={cartStore}>
    <ThemeProvider theme={testTheme}>
<RouterProvider router={availableRoutes}/>
</ThemeProvider>
</Provider>
</>
)
