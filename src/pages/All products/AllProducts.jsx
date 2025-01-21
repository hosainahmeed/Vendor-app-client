import { useState, useEffect } from "react";
import { Slider, Checkbox, Radio, Button } from "antd";
import "antd/dist/reset.css";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import axios from "axios";
import Card from "../../components/Card";

const AllProductsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [priceRange, setPriceRange] = useState([50, 6000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/ProductData.json");
        setProductData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter logic
  const applyFilters = () => {
    let updatedData = [...productData];

    // Filter by price range
    updatedData = updatedData.filter(
      (item) =>
        item.product_price >= priceRange[0] &&
        item.product_price <= priceRange[1]
    );

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      updatedData = updatedData.filter((item) =>
        selectedCategories.includes(item.product_category)
      );
    }

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      updatedData = updatedData.filter((item) =>
        selectedBrands.includes(item.product_brand)
      );
    }

    // Sort data
    if (sortOption) {
      if (sortOption === "highToLow") {
        updatedData.sort((a, b) => b.product_price - a.product_price);
      } else if (sortOption === "lowToHigh") {
        updatedData.sort((a, b) => a.product_price - b.product_price);
      }
    }

    setFilteredData(updatedData);
  };

  // Reset filters
  const resetFilters = () => {
    setPriceRange([50, 6000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortOption("");
    setFilteredData(productData);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="area flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-4 border-b md:border-r md:border-b-0 border-gray-300">
        <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
        <Slider
          range
          value={priceRange}
          min={50}
          max={6000}
          className="mb-6"
          onChange={(value) => setPriceRange(value)}
        />

        <h3 className="mb-4 text-lg font-semibold">Sub Category</h3>
        <div className="space-y-2 mb-6">
          <h3 className="mb-4 text-lg font-semibold">Sub Category</h3>
          <Radio.Group
            className="flex flex-col"
            onChange={(e) => setSelectedCategories([e.target.value])} // Ensure single selection
            value={selectedCategories[0] || null} // Bind selected value
          >
            <Radio value="Original Organic Honey">Original Organic Honey</Radio>
            <Radio value="Natural Sundarban Liquid Gold Honey">
              Natural Sundarban Liquid Gold Honey
            </Radio>
          </Radio.Group>
        </div>

        <h3 className="mb-4 text-lg font-semibold">Brand</h3>
        <div className="flex flex-col mb-6">
          {["Pran", "Megi", "Nestle", "Cadbeery", "Ifad", "BD", "Squre"].map(
            (brand) => (
              <Checkbox
                key={brand}
                onChange={(e) =>
                  setSelectedBrands((prev) =>
                    e.target.checked
                      ? [...prev, brand]
                      : prev.filter((b) => b !== brand)
                  )
                }
              >
                {brand}
              </Checkbox>
            )
          )}
        </div>

        <h3 className="mb-4 text-lg font-semibold">Sorting</h3>
        <div className="space-y-2 mb-6">
          <Radio.Group
            className="flex flex-col"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <Radio value="highToLow">Price- High To Low</Radio>
            <Radio value="lowToHigh">Price- Low To High</Radio>
          </Radio.Group>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Button
            type="primary"
            className="bg-green-500"
            onClick={applyFilters}
          >
            Filter
          </Button>
          <Button
            type="default"
            className="bg-red-500 text-white"
            onClick={resetFilters}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-start gap-2 mb-6">
          <Button className="bg-green-500 text-white flex items-center">
            <IoGridOutline className="mr-2" /> Grid View
          </Button>
          <Button className="bg-orange-500 text-white flex items-center">
            <FaList className="mr-2" /> List View
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
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
    </div>
  );
};

export default AllProductsPage;
