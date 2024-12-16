import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Contact from "../pages/Contact/Contact";

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
}]);

export default router;