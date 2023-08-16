import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
const availableRoutes = createBrowserRouter([{
  path: '/', element: <App/>,
},
{
  path:'/products', element: <Footer/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={availableRoutes}/>
)
