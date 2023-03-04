import React from "react";

function Header() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Medilab</a>
          </h1>
          <a href="index.html" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Medilab</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
