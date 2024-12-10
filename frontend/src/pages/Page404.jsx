import React from "react";

const Page404 = () => {
  return (
    <div>
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            404
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Page not found.</p>
          </div>
        </div>
      </div>
      <div class="custom-bg text-dark">
    <div class="d-flex align-items-center justify-content-center min-vh-100 px-2">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-2 fw-medium mt-4">Oops! Page not found</p>
            <p class="mt-4 mb-5">The page you're looking for doesn't exist or has been moved.</p>
            <a href="/" class="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">
                Go Home
            </a>
        </div>
    </div>
</div>
    </div>
  );
};

export default Page404;
