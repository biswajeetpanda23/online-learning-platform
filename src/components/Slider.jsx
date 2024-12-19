
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides
    arrows: false, // Hide arrows
  };

  const images = [
    "/images/slider1.png", // Replace with your image paths
    "/images/slider2.jpg",
    "/images/slider3.webp",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-item">
           <img
  src={src}
  alt={`Slide ${index + 1}`}
  className="w-full h-[400px] sm:h-[300px] object-cover"
/>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
