import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import ProductInfo from './components/ProductInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Cart from '../src/components/Cart.jsx'
import ProductsHomepage from './components/ProductsHomepage.jsx'
import { fetchFromSupaBase, fetchProductInfo, fetchProducts } from './loaders/loaders.js'
import ErrorPage from './components/ErrorPage.jsx'
import { Provider } from 'react-redux'
import { cartStore } from './app/store.js'
import { ThemeProvider } from '@mui/material'
import { testTheme } from './assets/mui_themes/themes.js'
import { SignInWmail, SignUp } from './supabase/authfiles.jsx'
const availableRoutes = createBrowserRouter([
  {
  path: '/sign-in', element: <SignInWmail/>, errorElement: <ErrorPage/>
},
{
  path: '/', element: <SignUp/>, errorElement: <ErrorPage/>
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
path: 'products/cart', loader: ()=> {
  return fetchFromSupaBase();
},element : <Cart/>, errorElement: <ErrorPage/>
},
{
  path: "/home" , element: <App/>, loader: ()=> {return fetchProducts(4,0)}, 
  errorElement: <ErrorPage/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={cartStore}>
  <Header/>
    <ThemeProvider theme={testTheme}>
<RouterProvider router={availableRoutes}/>
</ThemeProvider>
</Provider>
<Footer/>

</>
)
