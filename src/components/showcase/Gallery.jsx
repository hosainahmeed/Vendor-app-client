import img1 from "../../assets/product Banner Image/img1.webp";
import img2 from "../../assets/product Banner Image/img2.webp";
import img3 from "../../assets/product Banner Image/img3.webp";
import img4 from "../../assets/product Banner Image/img4.webp";
import img5 from "../../assets/product Banner Image/img5.webp";

function Gallery() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="area p-4">
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-4"
        style={{
          gridAutoRows: "minmax(100px, auto)",
        }}
      >
        {/* Image 1 - Large Banner */}
        <img
          src={images[0]}
          alt="Product 1"
          className="rounded-md shadow-md object-cover col-span-12 md:col-span-8 row-span-2"
        />

        {/* Image 2 - Small Banner */}
        <img
          src={images[1]}
          alt="Product 2"
          className="rounded-md shadow-md object-cover col-span-6 md:col-span-4"
        />

        {/* Image 3 - Small Banner */}
        <img
          src={images[2]}
          alt="Product 3"
          className="rounded-md shadow-md object-cover col-span-6 md:col-span-4"
        />

        {/* Image 4 - Medium Banner */}
        <img
          src={images[3]}
          alt="Product 4"
          className="rounded-md shadow-md object-cover col-span-12 md:col-span-6 row-span-1"
        />

        {/* Image 5 - Medium Banner */}
        <img
          src={images[4]}
          alt="Product 5"
          className="rounded-md shadow-md object-cover col-span-12 md:col-span-6 row-span-1"
        />
      </div>
    </div>
  );
}

export default Gallery;
