import React from "react";
import { Link } from "react-router-dom";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import enjection from "../Components/asset/media/image/injection.png";
import dental from "../Components/asset/media/image/dental.png";
import heart from "../Components/asset/media/image/heart.png";
import cancer from "../Components/asset/media/image/cancer.png";
import surgery from "../Components/asset/media/image/bariatric-surgery.png";

export default function Specialist() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-discription">
            <h2>Specialities</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <span>❯❯</span>
              <Link>Specialities</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="specialities-section">
        <div className="section-title mb-5">
          <h2>
            Specialities
            <div className="element">
              <img src={heartbeat} className="img-fluid" alt="" />
            </div>
          </h2>
        </div>

        <div className="container-fluid">
          <div className="cta-wrapper">
            <h5>Call Us Now</h5>
            <Link to="tel:+91 12365 54789" alt="contect">
              <span class="material-symbols-outlined"> call </span>
              +91 12365 54789
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="specialties-cta-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <Link to="/doctors">
                  <div className="specialities-wrapper">
                    <div className="icon-wrapper">
                      <img
                        src={enjection}
                        className="img-fluid"
                        alt="Anaesthesiology"
                      />
                    </div>
                    <h4>Anaesthesiology</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/doctors">
                  <div className="specialities-wrapper">
                    <div className="icon-wrapper">
                      <img src={dental} className="img-fluid" alt="Dental" />
                    </div>
                    <h4>Dental</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/doctors">
                  <div className="specialities-wrapper">
                    <div className="icon-wrapper">
                      <img src={heart} className="img-fluid" alt="Cardiology" />
                    </div>
                    <h4>Cardiology</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/doctors">
                  <div className="specialities-wrapper">
                    <div className="icon-wrapper">
                      <img src={cancer} className="img-fluid" alt="Oncology" />
                    </div>
                    <h4>Oncology</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link to="/doctors">
                  <div className="specialities-wrapper">
                    <div className="icon-wrapper">
                      <img src={surgery} className="img-fluid" alt="Surgery" />
                    </div>
                    <h4>Surgery</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
