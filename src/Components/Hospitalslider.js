import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hospitalimg from "../Components/asset/media/image/hospital-img.png";

export default function Hospitalslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="hospital-slider">
          <img src={hospitalimg} alt="hospitalimg" className="img-fluid" />
        </div>
        <div className="hospital-slider">
          <img src={hospitalimg} alt="hospitalimg" className="img-fluid" />
        </div>
        <div className="hospital-slider">
          <img src={hospitalimg} alt="hospitalimg" className="img-fluid" />
        </div>
        <div className="hospital-slider">
          <img src={hospitalimg} alt="hospitalimg" className="img-fluid" />
        </div>
        <div className="hospital-slider">
          <img src={hospitalimg} alt="hospitalimg" className="img-fluid" />
        </div>
      </Slider>
    </>
  );
}
