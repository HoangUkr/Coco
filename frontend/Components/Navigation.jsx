import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg"> 
        <Container> 
            <LinkContainer to="/"> 
                <Navbar.Brand>BrandLogo</Navbar.Brand> 
            </LinkContainer> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="me-auto"> 
                    <LinkContainer to="/"> 
                        <Nav.Link>Home</Nav.Link> 
                    </LinkContainer> 
                    <LinkContainer to="/products"> 
                        <Nav.Link>Products</Nav.Link> 
                    </LinkContainer> 
                    <LinkContainer to="/liked-products"> 
                        <Nav.Link>Liked Products</Nav.Link> 
                    </LinkContainer> 
                    <LinkContainer to="/cart"> 
                        <Nav.Link>Shop Basket</Nav.Link> 
                    </LinkContainer> 
                </Nav> 
                <Nav className="ms-auto"> 
                    <NavDropdown title="User" id="user-dropdown" align="end"> 
                        <LinkContainer to="/profile"> 
                            <NavDropdown.Item>Profile</NavDropdown.Item> 
                        </LinkContainer> 
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item> 
                    </NavDropdown> 
                </Nav> 
            </Navbar.Collapse> 
        </Container> 
    </Navbar> 
  )
}

export default Navigation