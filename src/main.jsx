import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import ProductInfo from './components/ProductInfo.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
const availableRoutes = createBrowserRouter([{
  path: '/', element: <App/>,
},
{
  path:'/products'
, element: <ProductInfo/>},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Header></Header>
<RouterProvider router={availableRoutes}/>
<Footer></Footer>
</>
)
