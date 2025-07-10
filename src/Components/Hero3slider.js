import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tsodoctor from "../Components/asset/media/image/tso-doctor-2.png";

export default function Hero3slider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    centerMode: true,
    centerPadding: "12px",
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
        <div className="testimonial-wrapper">
          <div className="image-wrapper">
            <img src={tsodoctor} alt="Rajesh Sharma" className="img-fluid" />
          </div>
          <div className="title">
            <h4>Rajesh Sharma</h4>
            <p>Retired </p>
          </div>
          <div className="review-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="image-wrapper">
            <img src={tsodoctor} alt="Rajesh Sharma" className="img-fluid" />
          </div>
          <div className="title">
            <h4>Rajesh Sharma</h4>
            <p>Retired </p>
          </div>
          <div className="review-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="image-wrapper">
            <img src={tsodoctor} alt="Rajesh Sharma" className="img-fluid" />
          </div>
          <div className="title">
            <h4>Rajesh Sharma</h4>
            <p>Retired </p>
          </div>
          <div className="review-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="image-wrapper">
            <img src={tsodoctor} alt="Rajesh Sharma" className="img-fluid" />
          </div>
          <div className="title">
            <h4>Rajesh Sharma</h4>
            <p>Retired </p>
          </div>
          <div className="review-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="testimonial-wrapper">
          <div className="image-wrapper">
            <img src={tsodoctor} alt="Rajesh Sharma" className="img-fluid" />
          </div>
          <div className="title">
            <h4>Rajesh Sharma</h4>
            <p>Retired </p>
          </div>
          <div className="review-description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
}
