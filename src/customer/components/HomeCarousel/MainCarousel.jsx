import React from "react";
import { MainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
      style={{ width: "100%", height: "500px", objectFit: "cover" }}
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={1000}
      infinite={true}
      disableButtonsControls
      responsive={{
        0: { items: 1 },
        1024: { items: 1 },
      }}
      animationDuration={800}
      disableDotsControls
    />
  );
};

export default MainCarousel;
