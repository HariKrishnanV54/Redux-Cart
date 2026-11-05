import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-regular-svg-icons/faTruck';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import Badge from 'react-bootstrap/Badge';




function Header() {
  return (
    <Navbar expand="lg" className="bg-primary text-white bg-opacity-75">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={faTruck} />
            <span>E-Cart</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Item>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search your products..." 
              />
            </Nav.Item>
            <Link to="/wishlist" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faHeart} />
              <Badge bg="secondary">10</Badge>
              Wishlist
            </Link>
          <Link to="/cart" className="text-white text-decoration-none">
              <i class="fa-solid fa-cart-shopping"></i>
              <Badge bg="secondary">5</Badge>
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  

export default Header;