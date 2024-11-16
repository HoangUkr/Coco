import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">
          <h1 className="text-center">Product Name</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="border p-3">
            <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="border p-2">
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="img-fluid" />
            </div>
            <div className="border p-2">
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="img-fluid" />
            </div>
            <div className="border p-2">
              <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="border p-3">
            <h2>Product Description</h2>
            <p>This is a detailed description of the product.</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="border p-2">
              <label htmlFor="quantity">Counter</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                className="form-control"
              />
            </div>
            <div className="border p-2">
              <h3>Price</h3> <p>$99.99</p>
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
