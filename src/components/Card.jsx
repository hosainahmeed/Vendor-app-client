/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Modal, Popover } from "antd";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import StarRatings from "react-star-ratings";

function Card({ listView, data, id, isHovered, onHover, onLeave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productRating = parseFloat(data?.product_rating) || 0;

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = () => {
    const totalPrice = data?.product_price * quantity;
    const cartItem = {
      name: data?.product_name,
      price: data?.product_price,
      quantity,
      totalPrice,
    };
    console.log("Cart Item:", cartItem);
    setIsModalOpen(false);
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div
        className={`${
          listView ? "flex flex-col lg:flex-row" : ""
        } rounded-md shadow-sm p-2 overflow-hidden bg-white relative`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {data?.product_discount && (
          <div className="bg-red-500 p-2 inline-flex px-3 text-white absolute rounded-md text-xs top-3 right-3 opacity-85">
            {data?.product_discount}% OFF
          </div>
        )}
        <img
          className={`${
            listView ? "w-full lg:w-96 object-cover h-56" : "h-48 w-full"
          } rounded-md object-cover `}
          src={data?.product_image}
          alt={data?.product_name}
        />
        <div className="px-2">
          {/* Product Name */}
          <h1 className="font-semibold text-lg">{data?.product_name}</h1>
          {/* Star Rating */}
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
          {/* Product Price */}
          <h2 className="text-green-600 font-bold">৳{data?.product_price}</h2>
          <div className="w-full flex gap-2 mt-3 py-4 items-center justify-center">
            {/* Add to Cart Button */}
            <Popover content="Add To Cart">
              <motion.button
                className={`${
                  listView ? "px-12" : ""
                } gap-2 p-2 rounded-full text-white w-full hidden md:flex items-center justify-center ${
                  isHovered ? "bg-green-600" : "bg-gray-300"
                } shadow`}
                variants={iconVariants}
                animate={isHovered ? "visible" : "hidden"}
                whileTap={{ scale: 0.9 }}
                onClick={showModal}
              >
                <FiShoppingCart /> <h1 className="mt-3">Add to cart</h1>
              </motion.button>
            </Popover>

            {/* View Details Button */}
            <Popover content="View Details">
              <Link to={`/category/${id}`}>
                <motion.button
                  className={`gap-2 p-2 rounded-full text-white w-full hidden md:flex items-center justify-center ${
                    isHovered ? "bg-green-600" : "bg-gray-300"
                  } shadow`}
                  variants={iconVariants}
                  animate={isHovered ? "visible" : "hidden"}
                  whileTap={{ scale: 0.9 }}
                >
                  <TbListDetails />
                </motion.button>
              </Link>
            </Popover>

            {/* Mobile Buttons */}
            <div className="flex gap-2 flex-col items-center w-full md:hidden justify-center">
              <button
                className="p-1 rounded-full  text-white w-full gap-2 flex items-center justify-center bg-green-600 shadow"
                onClick={showModal}
              >
                <FiShoppingCart /> <h1 className="mt-3">Add to cart</h1>
              </button>
              <Link
                className="w-full p-1 flex rounded-full bg-green-600"
                to={`/category/${data?._id}`}
              >
                <button className="w-full text-white flex gap-3 items-center justify-center">
                  <TbListDetails /> <h1 className="mt-3">View Details</h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for Product Details */}
      <Modal
        title={data?.product_name}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={data?.product_image}
            alt={data?.product_name}
            className="w-full h-[300px] rounded-md object-cover mb-4"
          />
          <p className="text-gray-700">Details: {data?.product_details}</p>
          <p className="text-lg font-semibold">
            Price (per item): ৳{data?.product_price}
          </p>
          <p className="text-lg font-semibold">
            Total: ৳{(data?.product_price * quantity).toFixed(2)}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button
              className="px-3 py-1 border rounded text-lg"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="px-3 py-1 border rounded text-lg"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button onClick={handleCancel}>Close</Button>
            <Button className="bg-green-600" onClick={handleSubmit}>
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </Modal>
    </>
  );
}

export default Card;
