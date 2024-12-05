import React from "react";

const Navigation = () => {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <a href="#" className="navbar-brand px-lg-4 m-0">
          <h1 className="m-0 display-4 text-uppercase text-white">
            Sweet Coco Store
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto p-4">
            <a href="#" className="nav-item nav-link active">
              Home
            </a>
            <a href="#" className="nav-item nav-link">
              About
            </a>
            <a href="#" className="nav-item nav-link">
              Service
            </a>
            <a href="#" className="nav-item nav-link">
              Menu
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu text-capitalize">
                <a href="#" className="dropdown-item">
                  Reservation
                </a>
                <a href="#" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
