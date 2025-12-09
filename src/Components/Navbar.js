import React, { useEffect } from "react";
import logo from "../Components/asset/media/image/logo.png";
import { Link, useLocation } from "react-router-dom";
export default function Navbar(props) {
  let location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/" id="logo">
              <img src={logo} alt="compny-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li
                  className={`nav-item  ${
                    location.pathname === "/" ? "active" : ""
                  }`}>
                  <Link className="nav-link active" aria-current="page" to="/">
                    {props.firstmenu}
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/about" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/upcoming" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/upcoming">
                    upcoming Camps
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/specialities" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/specialities">
                    Specialisties
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/gallery" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/doctors" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/doctors">
                    our Doctors
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    location.pathname === "/contectus" ? "active" : ""
                  }`}>
                  <Link className="nav-link" to="/contectus">
                    Contect us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
