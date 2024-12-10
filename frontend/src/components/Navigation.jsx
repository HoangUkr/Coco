import React from "react";

const Navigation = () => {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <a href="/" className="navbar-brand px-lg-4 m-0">
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
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/service" className="nav-item nav-link">
              Service
            </a>
            <a href="/menu" className="nav-item nav-link">
              Menu
            </a>
            <a href="/cart" className="nav-item nav-link">
              Cart
            </a>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
            <a href="/login" className="nav-item nav-link">
              Login
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Admin
              </a>
              <div className="dropdown-menu text-capitalize">
                <a href="addproduct" className="dropdown-item">
                  Add Product
                </a>
                <a href="vieworder" className="dropdown-item">
                  View Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
