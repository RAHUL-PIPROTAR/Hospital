import React from "react";
import { Link } from "react-router-dom";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import Galleryslider from "./Galleryslider";

export default function Gallery() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-discription">
            <h2>Gallery</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <span>❯❯</span>
              <Link>Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="hospital-gallery-section">
        <div className="section-title mb-5">
          <h2>
            Hospital Gallery
            <div className="element">
              <img src={heartbeat} className="img-fluid" alt="" />
            </div>
          </h2>
        </div>
        <div className="container g-0">
          <div id="gallery-slider" className="gallery-slider">
            <Galleryslider />
          </div>
        </div>
      </section>
      <section id="hospital-gallery-section">
        <div className="section-title mb-5">
          <h2>
            Patient Gallery
            <div className="element">
              <img src={heartbeat} className="img-fluid" alt="" />
            </div>
          </h2>
        </div>
        <div className="container g-0">
          <div id="gallery-slider" className="gallery-slider">
            <Galleryslider />
          </div>
        </div>
      </section>
      <section id="hospital-gallery-section">
        <div className="section-title mb-5">
          <h2>
            doctor team Gallery
            <div className="element">
              <img src={heartbeat} className="img-fluid" alt="" />
            </div>
          </h2>
        </div>
        <div className="container g-0">
          <div id="gallery-slider" className="gallery-slider">
            <Galleryslider />
          </div>
        </div>
      </section>
    </>
  );
}
