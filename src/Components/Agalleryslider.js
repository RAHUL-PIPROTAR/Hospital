import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abg1 from "../Components/asset/media/image/ab-gallery-img-1.jpg";
import abg2 from "../Components/asset/media/image/ab-gallery-img-2.jpg";

export default function Agalleryslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
        <div className="galler-image-wrapper">
          <img src={abg1} className="img-fluid" alt="galleryimg" />
        </div>
        <div className="galler-image-wrapper">
          <img src={abg2} className="img-fluid" alt="galleryimg" />
        </div>
        <div className="galler-image-wrapper">
          <img src={abg1} className="img-fluid" alt="galleryimg" />
        </div>
        <div className="galler-image-wrapper">
          <img src={abg2} className="img-fluid" alt="galleryimg" />
        </div>
        <div className="galler-image-wrapper">
          <img src={abg1} className="img-fluid" alt="galleryimg" />
        </div>
      </Slider>
    </>
  );
}
