import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productPhotos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      productPhotos: [...e.target.files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Product added successfully");
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 className="text-center">Add Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName" className="mt-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription" className="mt-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                name="productDescription"
                placeholder="Enter product description"
                value={formData.productDescription}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice" className="mt-3">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                placeholder="Enter product price"
                value={formData.productPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductPhotos" className="mt-3">
              <Form.Label>Upload Product Photos</Form.Label>
              <Form.Control
                type="file"
                name="productPhotos"
                onChange={handleFileChange}
                multiple
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Add Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
