import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Jaimin's E-commerce Website</Navbar.Brand>
      <Nav className="mr-auto">
        <ul id = "A">
        <li className="B"><Nav.Link as={Link} to="/">Home</Nav.Link></li>
        <li className="B"><Nav.Link as={Link} to="/cart">Cart</Nav.Link></li>
        <li className="B"><Nav.Link as={Link} to="/checkout">Checkout</Nav.Link></li>
        </ul>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>

      </Nav>
    </Navbar>
  );
};

export default Header;
