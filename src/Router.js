import {createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Pages/LayoutPAge/Layout'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CartPage from './Pages/CartPage/CartPage'



export const router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"/productdetails/:id",
        element:<ProductDetails/>
    },{
        path:"/cartpage",
        element:<CartPage/>
    }]
}])