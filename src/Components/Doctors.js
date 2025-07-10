import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import image50 from "../Components/asset/media/image/image-50.png";
import image53 from "../Components/asset/media/image/image-53.png";
import image52 from "../Components/asset/media/image/image-52.png";
import noteContext from "../Context/noteContext";

export default function Doctors() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  });
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-discription">
            <h2>Our Doctors</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <span>❯❯</span>
              <Link>Our Doctors</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="our-doctors-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Meet Our Doctors
              <div className="element">
                <img src={heartbeat} className="img-fluid" alt="" />
              </div>
            </h2>
          </div>

          <div className="row justify-content-center gy-5 gx-lg-5">
            <div className="col-lg-6 col-md-6">
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
                          <strong>{a.state.title}</strong>
                        </p>
                        <span>{a.state.subtitle}</span>
                      </div>
                      <div className="description">
                        <p>Director, Joint Replacement Surgeries</p>
                      </div>
                      <div className="speciality-description text-center">
                        <h5>Specialization</h5>
                        <p>Book Appointment</p>
                      </div>
                      <div className="btn-wrapper text-center mt-4">
                        <Link
                          className="web-btn"
                          to="/doctors"
                          data-discover="true"
                        >
                          Total arterial bypass
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
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
                        <Link
                          className="web-btn"
                          to="/doctors"
                          data-discover="true"
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
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
                          MBBS RNT, MS(General Surgeon), FMAS, FIAGES,
                          FALS(Hernia)
                        </span>
                      </div>
                      <div className="description">
                        <p>General Surgeon</p>
                      </div>
                      <div className="speciality-description text-center">
                        <h5>Specialization</h5>
                      </div>
                      <div className="btn-wrapper text-center mt-4">
                        <Link
                          className="web-btn"
                          to="/doctors"
                          data-discover="true"
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
