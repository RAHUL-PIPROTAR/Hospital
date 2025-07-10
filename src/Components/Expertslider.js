import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image50 from "../Components/asset/media/image/image-50.png";
import image53 from "../Components/asset/media/image/image-53.png";
import image52 from "../Components/asset/media/image/image-52.png";

export default function Expertslider() {
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
        <div className="team-member-wrapper">
          <div className="row justify-content-center gx-0 gy-4">
            <div className="col-lg-6">
              <div className="image-wrapper">
                <img
                  src={image50}
                  className="img-fluid"
                  alt="Dr. Ramanand Dadhich (Owner)"
                />
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="information-wrapper">
                <div className="name">
                  <p>
                    <strong>Dr. Ramanand Dadhich (Owner)</strong>
                  </p>
                  <span>BAMS, MD</span>
                </div>
                <div className="description">
                  <p>Director, Joint Replacement Surgeries</p>
                </div>
                <div className="speciality-description text-center">
                  <h5>Specialization</h5>
                  <p>Book Appointment</p>
                </div>
                <div className="btn-wrapper text-center mt-4">
                  <Link className="web-btn" to="/doctors" data-discover="true">
                    Total arterial bypass
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member-wrapper">
          <div className="row justify-content-center gx-0 gy-4">
            <div className="col-lg-6">
              <div className="image-wrapper">
                <img
                  src={image53}
                  className="img-fluid"
                  alt="Dr. Ramanand Dadhich (Owner)"
                />
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="information-wrapper">
                <div className="name">
                  <p>
                    <strong>Dr. Neha Sharma</strong>
                  </p>
                  <span>MBBS,DGO(gold Medalist),DMAS</span>
                </div>
                <div className="description">
                  <p>Obs & Gyne</p>
                </div>
                <div className="speciality-description text-center">
                  <h5>Specialization</h5>
                </div>
                <div className="btn-wrapper text-center mt-4">
                  <Link className="web-btn" to="/doctors" data-discover="true">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member-wrapper">
          <div className="row justify-content-center gx-0 gy-4">
            <div className="col-lg-6">
              <div className="image-wrapper">
                <img
                  src={image52}
                  className="img-fluid"
                  alt="Dr. Ramanand Dadhich (Owner)"
                />
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="information-wrapper">
                <div className="name">
                  <p>
                    <strong>Dr. Darpan Dadheech</strong>
                  </p>
                  <span>
                    MBBS RNT, MS(General Surgeon), FMAS, FIAGES, FALS(Hernia)
                  </span>
                </div>
                <div className="description">
                  <p>General Surgeon</p>
                </div>
                <div className="speciality-description text-center">
                  <h5>Specialization</h5>
                </div>
                <div className="btn-wrapper text-center mt-4">
                  <Link className="web-btn" to="/doctors" data-discover="true">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
