import { Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

function CarouselComponent() {
  const images = [
    "https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg",
    "https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg",
    "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg",
  ];
  return (
    <Content
      className="area"
      style={{
        backgroundColor: "#fff",
        borderRadius: "0px 0px 12px 12px",
        overflow: "hidden",
      }}
    >
      <Carousel autoplay draggable={true}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </Content>
  );
}

export default CarouselComponent;



