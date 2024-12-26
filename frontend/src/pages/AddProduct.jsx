import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import api from "../api";

const AddProduct = () => {
  const mySwal = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-secondary",
    },
    buttonsStyling: false,
  });

  // Declare state
  const { register, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([]);

  // Fetch the category data
  useEffect(() => {
    const fetchCategoryData = async () => {
      const result = await api.get("/api/categories/");
      setCategories(result.data);
    };
    fetchCategoryData();
  }, []);

  const onSubmit = async (data) => {
    debugger;
    const formData = new FormData();
    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price);
    formData.append("category", data.category);
    formData.append("description", data.description);
    if (data.product_image[0]) {
      formData.append("product_image", data.product_image[0]);
    }
    try {
      const result = await api.post("/api/product/create/", formData);
      if (result.statusText.toLowerCase() != "created") {
        mySwal.fire({
          title: "Error",
          text: "Failed to create a new product. Try again!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        mySwal
          .fire({
            title: "Success",
            text: "Successful create a new product.",
            icon: "success",
            confirmButtonText: "Ok",
          })
          .then((result) => {
            reset();
          });
      }
    } catch (error) {
      mySwal.fire({
        title: "Error",
        text: "Failed to create a new product. Try again!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Add Product
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Add Product</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="container d-flex align-items-center justify-content-center pt-0 pt-lg-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="authForm p-5"
            method="post"
            encType="multipart/form-data"
          >
            <div className="input-group">
              <label htmlFor="productName">Product Name: </label>
              <br />
              <input
                type="text"
                id="productName"
                aria-describedby="productNameHelp"
                placeholder="Enter product name"
                style={{ width: "100%" }}
                {...register("product_name", { required: true })}
              ></input>
            </div>
            <div className="input-group mt-2">
              <label htmlFor="productPrice">Product Price: </label>
              <br />
              <input
                type="number"
                id="productPrice"
                aria-describedby="productPriceHelp"
                placeholder="Enter product price"
                style={{ width: "100%" }}
                {...register("product_price", { required: true })}
              ></input>
            </div>
            <div className="input-group mt-2">
              <label htmlFor="productDescription">Product Description: </label>
              <br />
              <textarea
                id="productDescription"
                placeholder="Enter product description"
                style={{ width: "100%" }}
                {...register("description")}
              ></textarea>
            </div>
            <div className="input-group mt-2">
              <label htmlFor="productCategory">Category: </label>
              <br />
              <select
                id="categories"
                name="categories"
                style={{ width: "100%" }}
                className="custom-select"
                {...register("category", { required: true })}
              >
                <option value="" disabled defaultValue>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group mt-2">
              <label htmlFor="fileUpload">Choose a file to upload: </label>
              <br />
              <input
                type="file"
                id="fileUpload"
                name="file"
                aria-describedby="fileUploadHelp"
                style={{ width: "100%" }}
                {...register("product_image")}
              ></input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mt-2">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
