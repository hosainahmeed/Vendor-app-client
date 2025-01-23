import { useLoaderData } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import StarRatings from "react-star-ratings";

function ProductDetails() {
  const data = useLoaderData();
  const productRating = parseFloat(data?.product_rating) || 0;

  if (!data) {
    return (
      <div className="area">
        <p className="text-center text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="area">
      <div className="product-details">
        <div className="flex my-12 items-start gap-2">
          <div className="image-container border-2 p-4  mb-4">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: data.product_name,
                  isFluidWidth: true,
                  src: data.product_image,
                },
                largeImage: {
                  src: data.product_image,
                  width: 1200,
                  height: 800,
                },
                enlargedImagePosition: "beside",
                lensStyle: {
                  backgroundColor: "rgba(0,0,0,.6)",
                  backgroundOrigin: "center",
                  backgroundPosition: "center",
                  backgroundPositionX: "50%",
                  backgroundPositionY: "50%",
                },
              }}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">{data.product_name}</h1>
            <p className="text-gray-600 mb-2">{data.product_details}</p>

            <div className="flex items-center">
              <StarRatings
                rating={productRating}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="3px"
              />
              <span className="ml-2 text-sm text-gray-600">
                ({productRating.toFixed(1)})
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-4">
              Product Code (SKU):{data.product_code}
            </h1>

            <p className="text-lg mb-2">Price: ৳{data.product_price}</p>

            <p className="text-sm text-gray-500">
              Seller: {data.product_seller}
            </p>
            <p className="text-sm text-gray-500">Brand: {data.product_brand}</p>
            <p className="text-sm text-gray-500">
              Available Stock: {data.product_available_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
