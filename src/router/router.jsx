import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/LandingPage/Home";
import ProductDetails from "../pages/product-details/ProductDetails";
import AllProducts from "../pages/All products/AllProducts";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import Payment from "../pages/Payment/Payment.jsx";

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
        loader: async ({ params }) => {
          try {
            const response = await fetch(`/ProductData.json`);
            if (!response.ok) {
              throw new Error("Failed to fetch product data");
            }
            const products = await response.json();
            const product = products.find(
              (item) => item._id.toString() === params.id
            );
            if (!product) {
              throw new Error("Product not found");
            }
            return product;
          } catch (err) {
            console.error("Error fetching product details:", err);
            return null;
          }
        },
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);
export default router;
