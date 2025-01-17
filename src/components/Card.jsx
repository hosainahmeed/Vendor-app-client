import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";

function Card({ id, isHovered, onHover, onLeave, selectProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  console.log(selectProduct);

  const productDetails = {
    name: "Peora 18K Gold Plated American Diamond Jodha Akbar Bridal",
    price: 3513.15,
    regularPrice: 9495,
    image:
      "https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE=",
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = () => {
    const totalPrice = productDetails.price * quantity;
    const cartItem = {
      name: productDetails.name,
      price: productDetails.price,
      regularPrice: productDetails.regularPrice,
      image: productDetails.image,
      quantity,
      totalPrice,
    };
    console.log(cartItem);
    setIsModalOpen(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div
        className="rounded-md shadow-sm overflow-hidden bg-[#FFFFFF]"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          className="w-full h-56 object-cover"
          src={productDetails.image}
          alt="product"
        />
        <div className="px-2">
          <h1>{productDetails.name}</h1>
          <h2 className="text-green-600 font-semibold">
            ৳{productDetails.price}
          </h2>
          <div className="flex gap-2 mt-3 py-4 items-center justify-center">
            <motion.button
              className={`gap-2 p-2  rounded-full text-white w-full hidden md:flex items-center justify-center ${
                isHovered ? "bg-green-600" : "bg-gray-300"
              } shadow`}
              variants={iconVariants}
              animate={isHovered ? "visible" : "hidden"}
              whileTap={{ scale: 0.9 }}
              onClick={showModal}
            >
              <FiShoppingCart /> <h1>Add to cart</h1>
            </motion.button>
            <Link to={`/category/${id}`}>
              <motion.button
                className={`gap-2 p-2 rounded-full text-white w-full hidden md:flex items-center justify-center ${
                  isHovered ? "bg-green-600" : "bg-gray-300"
                } shadow`}
                variants={iconVariants}
                animate={isHovered ? "visible" : "hidden"}
                whileTap={{ scale: 0.9 }}
  
              >
                <FcViewDetails />
              </motion.button>
            </Link>
{/* TODO make the view details for mobile too */}
            <button
              className="p-2 rounded-full text-white w-full flex md:hidden items-center justify-center bg-green-600 shadow"
              onClick={showModal}
            >
              <FiShoppingCart /> <h1>Add to cart</h1>
              
            </button>
          </div>
        </div>
      </motion.div>

      <Modal
        title={<motion.div>{productDetails.name}</motion.div>}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <img
            src={productDetails.image}
            alt="product"
            className="w-full h-[300px] rounded-md object-cover mb-4"
          />
          <p>Regular Price: ৳{productDetails.regularPrice}</p>
          <p>Discount Price (per item): ৳{productDetails.price}</p>
          <p>Total Price: ৳{(productDetails.price * quantity).toFixed(2)}</p>
          <div
            style={{ marginTop: "16px", display: "flex", alignItems: "center" }}
          >
            <label style={{ marginRight: "8px" }}>Quantity:</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => handleQuantityChange(-1)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  background: "#f5f5f5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                -
              </button>
              <div
                style={{
                  width: "50px",
                  textAlign: "center",
                  borderRight: "1px solid #d9d9d9",
                  borderLeft: "1px solid #d9d9d9",
                  lineHeight: "32px",
                }}
              >
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  background: "#f5f5f5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={handleCancel}>Close</Button>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </motion.div>
      </Modal>
    </>
  );
}

export default Card;
