import { useEffect, useState } from "react";
import CategoriseTitleHeade from "../../../components/titleHeader/CategoriseTitleHeade";
import Card from "../../../components/Card";
import axios from "axios";

function LatestProducts() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/ProductData.json");
        setProductData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="area">
        <CategoriseTitleHeade title="Latest Products" />
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="area">
        <CategoriseTitleHeade title="Latest Products" />
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="area">
      <CategoriseTitleHeade title="Latest Products" />
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {productData.length > 0 ? (
          productData.map((item) => (
            // <img src={item.product_image} />
            // <Card key={item._id} data={item}></Card>
            <Card
              data={item}
              key={item._id}
              id={item._id}
              isHovered={hoveredCard === item._id}
              onHover={() => setHoveredCard(item._id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}

export default LatestProducts;
