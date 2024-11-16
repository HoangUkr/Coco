import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUser, FaHeart, FaHome, FaBoxOpen } from "react-icons/fa";
import '../src/App.css';

const Navigation = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>BrandLogo</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link><FaHome className="nav-icon" />Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link><FaBoxOpen className="nav-icon"/>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/liked-products">
              <Nav.Link><FaHeart className="nav-icon" /> Liked Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link><FaShoppingCart className="nav-icon" />Shop Basket</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-products">
              <Nav.Link>Add Products</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <NavDropdown title={<FaUser />} id="user-dropdown" align="end">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/">
                    <NavDropdown.Item
                    href="/"
                    onClick={() => setIsLoggedIn(false)}
                    >
                    Logout
                    </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <LinkContainer to="/signin">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
