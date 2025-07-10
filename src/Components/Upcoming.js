import React from "react";
import { Link } from "react-router-dom";
import heartbeat from "../Components/asset/media/image/heartbeat.svg";
import Upcomingfslider from "./Upcomingfslider";

export default function Upcoming() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-discription">
            <h2>Upcoming Camp</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <span>❯❯</span>
              <Link>Upcoming Camp</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="camp-section">
        <div className="container">
          <div className="camp-wrapper">
            <div className="section-title mb-5">
              <h2>
                Eye Check Up Camp
                <div className="element">
                  <img src={heartbeat} className="img-fluid" alt="heart" />
                </div>
              </h2>
            </div>
            <div className="row gy-3">
              <div className="col-lg-6">
                <div className="date-time-wrapper">
                  <ul>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          calendar_month
                        </span>
                        24 April, 2024
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                        From 10:00 AM to 2:00 PM
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        At SRM Hospital
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="camp-image-slider-wrapper">
                  <Upcomingfslider />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 my-lg-auto">
                <div className="description">
                  <p>
                    <b>Dr. Gandhi</b> ( MBBS, MD) (General Medicine) (Consultant
                    Physician & Diabetologist) is a practicing general physician
                    and diabetologist know for offering excellent patient care
                    and also she is specializes in providing thyroid care and
                    treating other emergencies. She has an experience of 4
                    years.
                  </p>
                  <div className="services-camp">
                    <h5>Services In Camp</h5>
                    <ul>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Comprehensive Diabetic Control & Diet Management
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        kBlood Pressure (Hypertension)
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Thyroid Disorder
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Unexplained Fever
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        kJoint Pains
                      </li>
                      <li>
                        <span class="material-symbols-outlined">check</span>
                        Asthma
                      </li>
                      <li>
                        <span class="material-symbols-outlined">check</span>
                        Migraine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="camp-wrapper">
            <div className="section-title mb-5">
              <h2>
                Free Medical Camp
                <div className="element">
                  <img src={heartbeat} className="img-fluid" alt="heart" />
                </div>
              </h2>
            </div>
            <div className="row gy-3 gx-0 ">
              <div className="col-lg-5 my-lg-auto oder-2 oder-lg-1">
                <div className="description">
                  <p>
                    <b>Dr. Gandhi</b> ( MBBS, MD) (General Medicine) (Consultant
                    Physician & Diabetologist) is a practicing general physician
                    and diabetologist know for offering excellent patient care
                    and also she is specializes in providing thyroid care and
                    treating other emergencies. She has an experience of 4
                    years.
                  </p>
                  <div className="services-camp">
                    <h5>Services In Camp</h5>
                    <ul>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Comprehensive Diabetic Control & Diet Management
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Blood Pressure (Hypertension)
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Thyroid Disorder
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Unexplained Fever
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Joint Pains
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Asthma
                      </li>
                      <li>
                        <span className="material-symbols-outlined">check</span>
                        Migraine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  offset-lg-1 oder-1 oder-lg-2">
                <div className="date-time-wrapper">
                  <ul>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          calendar_month
                        </span>
                        24 April, 2024
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                        From 10:00 AM to 2:00 PM
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        At SRM Hospital
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="camp-image-slider-wrapper">
                  <Upcomingfslider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
