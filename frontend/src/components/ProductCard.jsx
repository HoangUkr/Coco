import React from "react";
import img1 from "../assets/images/menu-1.jpg";

const ProductCard = () => {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-4 col-sm-3">
        <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img1} alt="" />
        <h5 className="menu-price">$5</h5>
      </div>
      <div className="col-8 col-sm-9">
        <h4>Black Coffee</h4>
        <p className="m-0">
          Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem
          dolor
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
