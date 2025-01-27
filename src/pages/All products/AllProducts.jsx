import { useState, useEffect, useMemo } from "react";
import { Slider, Checkbox, Radio, Button, Pagination } from "antd";
import "antd/dist/reset.css";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import axios from "axios";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const AllProductsPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [changeView, setChangeView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const [priceRange, setPriceRange] = useState([50, 6000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const uniqueBrands = useMemo(
    () => [...new Set(productData.map((item) => item?.product_brand))],
    [productData]
  );

  console.log(searchQuery);

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

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);
  

  const applyFilters = () => {
    let updatedData = [...productData];

    updatedData = updatedData.filter(
      (item) =>
        item?.product_price >= priceRange[0] &&
        item?.product_price <= priceRange[1]
    );

    if (selectedCategories.length > 0) {
      updatedData = updatedData.filter((item) =>
        selectedCategories.includes(item?.product_category)
      );
    }

    if (selectedBrands.length > 0) {
      updatedData = updatedData.filter((item) =>
        selectedBrands.includes(item?.product_brand)
      );
    }

    if (sortOption) {
      updatedData.sort((a, b) =>
        sortOption === "highToLow"
          ? b.product_price - a.product_price
          : a.product_price - b.product_price
      );
    }

    setFilteredData(updatedData);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setPriceRange([50, 6000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSortOption("");
    setFilteredData(productData);
    setCurrentPage(1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="w-full md:w-1/4 bg-white p-4 border-b md:border-r border-gray-300">
        <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
        <Slider
          range
          value={priceRange}
          min={50}
          max={6000}
          className="mb-6"
          onChange={(value) => setPriceRange(value)}
        />
        <p className="mb-6 text-sm text-gray-500">
          Selected Range: {priceRange[0]} - {priceRange[1]}
        </p>

        <h3 className="mb-4 text-lg font-semibold">Sub Category</h3>
        <Radio.Group
          className="flex flex-col mb-6"
          onChange={(e) => setSelectedCategories([e.target.value])}
          value={selectedCategories[0] || null}
        >
          <Radio value="Original Organic Honey">Original Organic Honey</Radio>
          <Radio value="Natural Sundarban Liquid Gold Honey">
            Natural Sundarban Liquid Gold Honey
          </Radio>
        </Radio.Group>

        <h3 className="mb-4 text-lg font-semibold">Brand</h3>
        <div className="flex flex-col mb-6">
          {uniqueBrands.map((brand) => (
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
          ))}
        </div>

        <h3 className="mb-4 text-lg font-semibold">Sorting</h3>
        <Radio.Group
          className="flex flex-col mb-6"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <Radio value="highToLow">Price - High To Low</Radio>
          <Radio value="lowToHigh">Price - Low To High</Radio>
        </Radio.Group>

        <div className="flex space-x-4">
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
      <div
        id="remove-scroll"
        className="w-full h-screen overflow-auto md:w-3/4 p-4"
      >
        <div className="flex justify-start gap-2 mb-6">
          <Button
            className={`${
              !changeView ? "bg-green-600" : "bg-gray-300"
            } text-white flex items-center`}
            onClick={() => setChangeView(false)}
          >
            <IoGridOutline className="mr-2" />
            Grid View
          </Button>
          <Button
            className={`${
              changeView ? "bg-orange-600" : "bg-gray-300"
            } text-white flex items-center`}
            onClick={() => setChangeView(true)}
          >
            <FaList className="mr-2" />
            List View
          </Button>
        </div>

        <div
          className={`${
            changeView
              ? "grid grid-cols-1 gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4"
          }`}
        >
          {currentPageData.length > 0 ? (
            currentPageData.map((item) => (
              <Card
                data={item}
                key={item?._id}
                id={item?._id}
                isHovered={hoveredCard === item?._id}
                onHover={() => setHoveredCard(item?._id)}
                onLeave={() => setHoveredCard(null)}
                listView={changeView}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products available.
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={filteredData.length}
            onChange={(page) => {
              setCurrentPage(page);
              handleScrollToTop();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
