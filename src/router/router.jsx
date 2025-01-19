import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/LandingPage/Home";
import ProductDetails from "../pages/product-details/ProductDetails";

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
    ],
  },
]);
export default router;
