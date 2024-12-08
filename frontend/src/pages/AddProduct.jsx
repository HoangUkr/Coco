import React from 'react'

const AddProduct = () => {
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
          <form className="authForm p-5" method='post' encType='multipart/form-data'>
            <div className="input-group">
              <label for="productName">Product Name: </label>
              <br />
              <input
                type="text"
                id="productName"
                aria-describedby="productNameHelp"
                placeholder="Enter product name"
                style={{ width: "100%" }}
              ></input>
            </div>
            <div className="input-group mt-2">
              <label for="productPrice">Product Price: </label>
              <br />
              <input
                type="number"
                id="productPrice"
                aria-describedby="productPriceHelp"
                placeholder="Enter product price"
                style={{ width: "100%" }}
              ></input>
            </div>
            <div className="input-group mt-2">
              <label for="productCategory">Category: </label>
              <br />
              <select id='categories' name='categories' style={{ width: "100%" }} className='custom-select'>
                <option value="cake">Cake</option> 
                <option value="coffee">Coffee</option>
              </select>
            </div>
            <div className="input-group mt-2">
              <label for="fileUpload">Choose a file to upload: </label>
              <br />
              <input
                type="file"
                id="fileUpload"
                name='file'
                aria-describedby="fileUploadHelp"
                style={{ width: "100%" }}
              ></input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mt-2">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct