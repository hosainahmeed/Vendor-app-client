import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import StarRatings from "react-star-ratings";
import { Button, notification } from "antd";

function ProductDetails() {
  const data = useLoaderData();
  const productRating = parseFloat(data?.product_rating) || 0;

  // State for Quantity and Price
  const [quantity, setQuantity] = useState(1);

  // Handle Quantity Change
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    const cartData = {
      productName: data.product_name,
      productCode: data.product_code,
      price: data.product_price * quantity,
      quantity: quantity,
    };
    console.log("Added to Cart:", cartData);

    notification.success({
      message: "Added to Cart",
      description: `${data.product_name} has been added to your cart.`,
      placement: "topRight",
    });
  };

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-center text-red-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: data.product_name,
                  isFluidWidth: true,
                  src: data?.product_image,
                },
                largeImage: {
                  src: data?.product_image,
                  width: 1200,
                  height: 1500,
                },
                enlargedImageContainerStyle: {
                  background: "#fff",
                  zIndex: 1000,
                  border: "2px solid #ccc",
                },
              }}
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {data.product_name}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              {data.product_details}
            </p>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <StarRatings
                rating={productRating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
              <span className="ml-2 text-sm text-gray-600">
                ({productRating.toFixed(1)} Rating)
              </span>
            </div>

            {/* Product Info */}
            <p className="text-lg font-semibold mb-2">
              Product Code (SKU):{" "}
              <span className="text-gray-600">{data.product_code}</span>
            </p>
            <p className="text-gray-500 mb-2">
              Seller:{" "}
              <span className="text-gray-700">{data.product_seller}</span>
            </p>
            <p className="text-gray-500 mb-4">
              Brand: <span className="text-gray-700">{data.product_brand}</span>
            </p>

            {/* Price */}
            <p className="text-3xl font-bold text-green-600 mb-2">
              ৳{(data.product_price * quantity).toLocaleString()}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Whole Sell: ৳{data.product_wholesale_price}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <Button
                type="primary"
                shape="circle"
                onClick={handleDecrease}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="px-4 text-lg font-medium">{quantity}</span>
              <Button type="primary" shape="circle" onClick={handleIncrease}>
                +
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                type="primary"
                size="large"
                onClick={handleAddToCart}
                className="bg-yellow-500"
              >
                Add to Cart
              </Button>
              <Button
                type="default"
                size="large"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Buy Now
              </Button>
            </div>

            {/* Additional Options */}
            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <button className="hover:underline">Add to Wishlist</button>
              <button className="hover:underline">Share This Item</button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>7 Days Happy Return</p>
          <p>Cash on Delivery Available</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
