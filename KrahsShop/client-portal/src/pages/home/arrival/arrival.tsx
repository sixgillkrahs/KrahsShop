import React from "react";
import "./arrival.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../../assets/images/arrival1.webp";

const divStyle = {
  height: "600px",
};


const slideImages = [
  {
    url: image1,
  },
  {
    url: image1,
  },
  {
    url: image1,
  },
  {
    url: image1,
  },
];

const Arrival = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20">
        <h1 className="text-4xl">New Arrival</h1>
        <p>
          <a href="" className="underline text-red-600">
            The entire collection
          </a>
        </p>
      </div>
      <Slide slidesToShow={3} slidesToScroll={1} autoplay={true} indicators={true} cssClass="slide-spacing">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="w-full h-full px-2">
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              className="w-full h-full flex justify-center bg-cover"
            >
            </div>
            <div className="flex justify-between mt-2">
              <h3 className="product-name">Product Name {index + 1}</h3>
              <p className="product-price">$99.99</p>
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
};

export default Arrival;
