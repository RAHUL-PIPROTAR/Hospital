import React from "react";
import { Link } from "react-router-dom";
import facebook from "../Components/asset/media/image/facebook.png";
import instagram from "../Components/asset/media/image/instagram.png";
import twitter from "../Components/asset/media/image/twitter.png";
import linkedin from "../Components/asset/media/image/linkedin.png";
import logo from "../Components/asset/media/image/logo.png";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row gy-3 justify-content-center ">
            <div className="col-lg-2 col-md-6">
              <div className="footer-col-wrapper">
                <h3>QUICK LINKS</h3>
                <ul>
                  <li>
                    <Link to="bookapp">Book An Appointment</Link>
                  </li>
                  <li>
                    <Link to="bookapp">OPD Centers</Link>
                  </li>
                  <li>
                    <Link to="bookapp">Feedback</Link>
                  </li>
                  <li>
                    <Link to="bookapp">Book a Video Consultation</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-col-wrapper">
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <Link to="sdghbn" target="_blank">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Kelwa - Amet Rd, Amet, Rajasthan{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:srcmh1008@gmail.com">
                      <span className="material-symbols-outlined"> mail </span>
                      srcmh1008@gmail.com{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+91 8209258285">
                      <span className="material-symbols-outlined"> call </span>
                      +91 8209258285{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 colmd-6">
              <div className="footer-col-wrapper">
                <h3>Important</h3>
                <ul>
                  <li>
                    <Link to="/">Doctors</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Patient Speaks</Link>
                  </li>
                  <li>
                    <Link to="/">Women & Child Care</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-col-wrapper">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <Link to="">
                      <img src={facebook} alt="facebook" />
                      facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src={instagram} alt="instagram" /> instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src={twitter} alt="twitter" />
                      twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <img src={linkedin} alt="linkdin" />
                      linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-col-wrapper d-flex flex-column justify-content-center align-items-center">
                <img
                  className="footer-logo"
                  src={logo}
                  class="img-fluid"
                  alt="footer-logo"
                />
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod.Lorem ipsum dolor sit amet, consec tetur adipiscing
                  elit, sed do eiusmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-rights-wrapper">
          <h6>
            Copyright © 2024 SRMH. All Right Reserved | Conceived By Digi-Maa
          </h6>
        </div>
      </footer>
    </>
  );
}
