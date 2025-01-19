import img1 from "../../assets/product Banner Image/img1.webp";
import img2 from "../../assets/product Banner Image/img2.webp";
import img3 from "../../assets/product Banner Image/img3.webp";
import img4 from "../../assets/product Banner Image/img4.webp";
import img5 from "../../assets/product Banner Image/img5.webp";

function Gallery() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="area w-full my-12 px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 grid-rows-6 md:grid-rows-2">
        <div className="row-span-1 md:row-span-1">
          <img src={images[0]} alt="Product 1" />
        </div>
        <div className="row-span-1 md:row-span-1 md:order-3">
          <img src={images[1]} alt="Product 2" />
        </div>
        <div className=" row-span-2 md:row-span-2">
          <img className="h-full object-fill" src={images[2]} alt="Product 3" />
        </div>
        <div className="row-span-1  md:row-cols-1">
          <img src={images[3]} alt="Product 4" />
        </div>
        <div className=" row-span-1 md:row-cols-1">
          <img src={images[4]} alt="Product 5" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
