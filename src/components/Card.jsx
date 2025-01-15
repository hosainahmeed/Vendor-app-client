import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

function Card({ id, isHovered, onHover, onLeave }) {
  const iconVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="rounded-md shadow-sm overflow-hidden bg-[#FFFFFF]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <img
        className="w-full h-56 object-cover"
        src="https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE="
        alt="product"
      />
      <div className="px-2">
        <h1>******</h1>
        <h2 className="text-green-600 font-semibold">৳3513.15</h2>
        <p>Peora 18K Gold Plated American Diamond Jodha Akbar Bridal</p>
        <div className="flex gap-2 mt-3 py-4 items-center justify-center">
          <motion.button
            className={`p-2 rounded-full text-white w-full hidden md:flex items-center justify-center ${
              isHovered ? "bg-green-600" : "bg-gray-300"
            } shadow`}
            variants={iconVariants}
            animate={isHovered ? "visible" : "hidden"}
            whileTap={{ scale: 0.9 }}
          >
            <FiShoppingCart />
          </motion.button>
          <button
            className="p-2 rounded-full text-white w-full flex md:hidden items-center justify-center bg-green-600
             shadow"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
