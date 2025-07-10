import React from "react";
import { Link } from "react-router-dom";
import Hero1slider from "./Hero1slider";
import certificate1 from "../Components/asset/media/image/certificate1.png";
import certificate2 from "../Components/asset/media/image/certificate2.png";
import certificate3 from "../Components/asset/media/image/certificate3.png";
import certificate4 from "../Components/asset/media/image/certificate4.png";
import certificate5 from "../Components/asset/media/image/certificate5.png";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import blood from "../Components/asset/media/image/bloodtype.png";
import emergency from "../Components/asset/media/image/emergency-about.png";
import bed from "../Components/asset/media/image/hospital-bed.png";
import doctoricon from "../Components/asset/media/image/doctor-icon.png";
import local from "../Components/asset/media/image/local_hospital.png";
import local2 from "../Components/asset/media/image/medication.png";
import watbtn from "../Components/asset/media/image/WASocial.svg";
import icu1 from "../Components/asset/media/image/icu1.png";
import icu2 from "../Components/asset/media/image/Diagnostic.png";
import tsodoctor from "../Components/asset/media/image/tso-doctor-2.png";
import Hospitalslider from "./Hospitalslider";
import Hero3slider from "./Hero3slider";
import Expertslider from "./Expertslider";

export default function Home() {
  return (
    <>
      <section id="hero-section-slider">
        <div className="container-fluid px-0">
          <div className="carousel">
            <Hero1slider />
          </div>
        </div>
      </section>

      <section id="hospital-certificates-section">
        <div className="container">
          <div className="logo-wrapper d-flex justify-content-center align-items-center flex-wrap gap-3">
            <div className="image">
              <img src={certificate1} className="img-fluid" alt="Certificate" />
            </div>
            <div className="image">
              <img src={certificate2} className="img-fluid" alt="Certificate" />
            </div>
            <div className="image">
              <img src={certificate3} className="img-fluid" alt="Certificate" />
            </div>
            <div className="image">
              <img src={certificate4} className="img-fluid" alt="Certificate" />
            </div>
            <div className="image">
              <img src={certificate5} className="img-fluid" alt="Certificate" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-us-section">
        <div className="container">
          <div className="section-title">
            <h2>
              About Us
              <div className="element">
                <img src={heartbeat} alt="icon" className="img-fluid" />
              </div>
            </h2>
            <div className="heading-description">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis itaque, culpa deleniti corporis incidunt iure sed, odit
                libero reprehenderit vitae illum quam. Aut dolorem laborum
                laudantium atque architecto repellendus harum!
              </p>
            </div>
            <div className="row d-flex ">
              <div className="col-lg-6">
                <div className="hospitalimg">
                  <Hospitalslider />
                </div>
              </div>

              <div className="col-lg-6 mt-3">
                <div className="description">
                  <ul>
                    <li>
                      <p>
                        <img
                          src={blood}
                          alt="Lorem ipsum dolor adipisicing elit."
                        />
                        Lorem ipsum dolor adipisicing elit.
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          src={emergency}
                          alt="
                            Lorem ipsum dolor sit amet, consectetur"
                        />
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          src={local}
                          alt="
                            Recusandae iure sapiente eum nostrum."
                        />
                        Recusandae iure sapiente eum nostrum.
                      </p>
                    </li>
                    <li>
                      <p>
                        <img
                          src={local2}
                          alt="
                            Aut dolorem laborum laudantium atque architecto."
                        />
                        Aut dolorem laborum laudantium atque architecto.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row justify-content-center ">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 ">
                    <div className="statistic-wrapper">
                      <div className="icon">
                        <div className="icon-wrapper">
                          <img
                            src={bed}
                            alt="bed capacity"
                            className="img-fluid"
                          />
                        </div>
                        <div className="title">
                          <h5>Beds Capacity</h5>
                        </div>
                        <div className="number">
                          <p className="count">30</p>
                          <p>+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 ">
                    <div className="statistic-wrapper">
                      <div className="icon">
                        <div className="icon-wrapper">
                          <img
                            src={doctoricon}
                            alt="doctors"
                            className="img-fluid"
                          />
                        </div>
                        <div className="title">
                          <h5>Doctors</h5>
                        </div>
                        <div className="number">
                          <p className="count">35</p>
                          <p>+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center d-flex justify-content-center gap-3 flex-wrap mt-5">
                  <button>
                    <Link to="/">Contect Us</Link>
                  </button>
                  <div className="btn-wrapper text-center">
                    <button>
                      <Link
                        to="https://api.whatsapp.com/resolve/?deeplink=%2F%2B91%25209521651535&not_found=1"
                        className="web-btn"
                        target="_blank"
                      >
                        <img src={watbtn} width="28px" alt="" />
                        whatsapp
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services-section">
        <div className="section-title mb-5">
          <h2>
            Our Services
            <div className="element">
              <img src={heartbeat} className="img-fluid" alt="heart" />
            </div>
          </h2>
        </div>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img
                    src={icu1}
                    alt="General and Laparoscopic Surgery"
                    className="img-fluid"
                  />
                </div>
                <div className="service-name">
                  <h5>General and Laparoscopic Surgery</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              {" "}
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img
                    src={icu1}
                    alt="General and Laparoscopic Surgery"
                    className="img-fluid"
                  />
                </div>
                <div className="service-name">
                  <h5>Obs and Gyne</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              {" "}
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu2} alt="Ortho" className="img-fluid" />
                </div>
                <div className="service-name">
                  <h5>Ortho</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              {" "}
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu1} alt="Uro" className="img-fluid" />
                </div>
                <div className="service-name">
                  <h5>Uro</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              {" "}
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu2} alt="Ayurveda" className="img-fluid" />
                </div>
                <div className="service-name">
                  <h5>Ayurveda</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tso-section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-7 order-2 order-lg-1 my-lg-auto">
              <div className="section-title">
                <h2>Take A Second Opinion From The Leading Specialist</h2>
              </div>
              <div className="d-flex justify-content-center  align-items-center flex-wrapper gap-3">
                <div className="btn-wrapper text-center">
                  <Link to="" className="web_btn ">
                    <span className="material-symbols-outlined"> call </span>
                    Call Now
                  </Link>
                </div>

                <div className="btn-wrapper text-center">
                  <Link to="" className="web_btn">
                    <img src={watbtn} alt="watsapp" id="watbtn" />
                    whatsapp
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <div className="image-wrapper">
                <img
                  src={tsodoctor}
                  alt="Take A Second Opinion From The Leading Specialist"
                  className=" img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-team-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Meet Our Experts
              <div className="element">
                <img
                  src={heartbeat}
                  className="img-fluid"
                  alt="our meet experts"
                />
              </div>
            </h2>
          </div>
          <div id="doctor-slider">
            <Expertslider />
          </div>
        </div>
      </section>

      <section id="testimonials-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Testimonials
              <div className="element">
                <img src={heartbeat} className="img-fluid" alt="testimonials" />
              </div>
            </h2>
          </div>
          <div className="testimonial-slider">
            <Hero3slider />
          </div>
        </div>
      </section>
    </>
  );
}
