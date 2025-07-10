import React from "react";
import { Link } from "react-router-dom";
import chairman from "../Components/asset/media/image/chairman.png";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import vision from "../Components/asset/media/image/vision.png";
import mission from "../Components/asset/media/image/mission.png";
import Agalleryslider from "./Agalleryslider";

export default function AboutUs() {
  return (
    <>
      <div id="banner-section">
        <div className="container">
          <div className="heading-discription">
            <h2>About- us</h2>
            <div className="banner-breadcrum">
              <Link to="/">Home</Link>
              <span>❯❯</span>
              <Link>About- us</Link>
            </div>
          </div>
        </div>
      </div>

      <section id="about-director-section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 ">
              <div className="image-wrapper">
                <img src={chairman} alt="chairman" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 my-lg-auto">
              <div className="discription">
                <div className="section-title mb-5">
                  <h2>
                    Dr.Gopichand Mannam
                    <div className="element">
                      <img src={heartbeat} className="img-fluid" alt="" />
                    </div>
                  </h2>
                  <div className="heading-description text-center">
                    <p>Managing Director, SRM Hospitals</p>
                  </div>
                </div>
                <p>
                  At STAR Hospitals, we are dedicated to upholding our tradition
                  of high standards of team excellence in patient-centered care,
                  teaching, and research. Our expert team of physicians, nurses,
                  and healthcare professionals work tirelessly to provide the
                  highest standards of medical treatment to our patients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="vision-mission-section">
          <div className="container">
            <div className="row gy-3 justify-content-center">
              <div className="col-lg-4">
                <div className="vision-mission-wrapper vision-bg">
                  <div className="icon-wrapper text-center">
                    <img src={vision} alt="Vision" className="img-fluid" />
                  </div>
                  <div className="description">
                    <h4>Vision</h4>
                    <p>
                      To achieve excellence in Health Care delivery system
                      through our hard work and human touches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vision-mission-wrapper mission-bg">
                  <div className="icon-wrapper text-center">
                    <img src={mission} alt="Mission" className="img-fluid" />
                  </div>
                  <div className="description">
                    <h4>Mission</h4>
                    <p>
                      Our mission is to become health care delivery Organization
                      guide by quality, excellence,technology & complete patient
                      care. SRM hospital is committed to providing world class
                      health care services at the most affordable cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="gallery-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Photo Gallery
              <div className="element">
                <img src={heartbeat} className="img-fluid" alt="" />
              </div>
            </h2>
          </div>
          <div id="gallery-slider" className="gallery-slider">
            <Agalleryslider />
          </div>
        </div>
      </section>
    </>
  );
}
