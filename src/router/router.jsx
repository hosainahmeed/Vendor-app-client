import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/LandingPage/Home";
import ProductDetails from "../pages/product-details/ProductDetails";
import AllProducts from "../pages/All products/AllProducts";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);
export default router;
