import React from "react";
import img1 from "../assets/images/menu-1.jpg";
import img2 from "../assets/images/menu-2.jpg";
import img3 from "../assets/images/menu-3.jpg";

const Cart = () => {
  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Cart
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Cart</p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Lorem 1</td>
                <td>
                  <img src={img1}></img>
                </td>
                <td>1</td>
                <td>5€</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Lorem 2</td>
                <td>
                  <img src={img2}></img>
                </td>
                <td>1</td>
                <td>5€</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Lorem 3</td>
                <td>
                  <img src={img3}></img>
                </td>
                <td>1</td>
                <td>5€</td>
              </tr>
            </tbody>
          </table>
          <div className="container mt-5">
            <h4
              className="text-primary text-uppercase mt-5 mr-5"
              style={{ letterSpacing: "5px", textAlign: "right" }}
            >
              Total Price: 15€
            </h4>
          </div>
          <div className="container mt-5 d-flex justify-content-between">
            <a
              href="/menu"
              className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
              Go Back
            </a>
            <a
              href=""
              className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
              Send Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
