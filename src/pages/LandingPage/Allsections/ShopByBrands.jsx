import React from "react";
import CategoriseTitleHeade from "../../../components/titleHeader/CategoriseTitleHeade";
import Marquee from "react-fast-marquee";
import i1 from "../../../assets/brandImage/i1.png";
import i2 from "../../../assets/brandImage/i2.png";
import i3 from "../../../assets/brandImage/i3.png";
import i4 from "../../../assets/brandImage/i4.png";
import i5 from "../../../assets/brandImage/i5.png";
import i6 from "../../../assets/brandImage/i6.png";
import i7 from "../../../assets/brandImage/i7.png";
const brandImages = [
  { src: i1, alt: "Brand 1" },
  { src: i2, alt: "Brand 2" },
  { src: i3, alt: "Brand 3" },
  { src: i4, alt: "Brand 4" },
  { src: i5, alt: "Brand 5" },
  { src: i6, alt: "Brand 6" },
  { src: i7, alt: "Brand 7" },
];

function ShopByBrands() {
  return (
    <div className="area p-4">
      <CategoriseTitleHeade title={"Shop By Brands"} />
      <div className="mt-6">
        <Marquee speed={50} gradientColor="#F3F3F3" gradient={true}>
          <div className="flex items-center gap-8">
            {brandImages.map((image, index) => (
              <img
                key={index}
                className="w-24 md:w-32 lg:w-40 h-auto object-contain"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default ShopByBrands;
