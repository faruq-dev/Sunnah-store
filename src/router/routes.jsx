import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Contact from "../pages/Contact/Contact";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import NotFound from "../pages/Not Found/NotFound";
import Signup from "../pages/Auth/Sign up/Signup";
import ResetPassword from "../pages/Auth/Reset Pass/ResetPassword";

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "products",
            element: <Products/>
        },
        {
            path: "about",
            element: <About/>
        },
        {
            path: "contact",
            element: <Contact/>
        },
        {
            path: "cart",
            element: <Cart/>
        },
        {
            path: "wishlist",
            element: <Wishlist/>
        }
    ]
},

{
    path: "",
    element: <AuthLayout/>,
    children: [
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "signup",
            element: <Signup/>
        },
        {
            path: "reset",
            element: <ResetPassword/>
        }    
    ]
},

{
    path: "*",
    element: <NotFound/>
}


]);

export default router;