import React from 'react';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../redux/slices/productSlice';

function Header({ InsideProducts }) {
  const dispatch = useDispatch();

  // Retrieve wishlist from Redux store (adjust the state property name to match your store configuration)
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <Navbar expand="lg" className="bg-primary text-white bg-opacity-75">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-white text-decoration-none d-flex align-items-center gap-2">
            <i className="fa-solid fa-truck-fast"></i> E-Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {InsideProducts && (
              <Nav.Item className="w-100 w-lg-auto">
                <input
                  onChange={(e) => dispatch(searchProducts(e.target.value.toLowerCase()))}
                  type="text"
                  className="form-control"
                  placeholder="Search your products..."
                  style={{ minWidth: '260px' }}
                />
              </Nav.Item>
            )}
            <Link to="/wishlist" className="text-white text-decoration-none">
              <FontAwesomeIcon icon={faHeart} /> <Badge bg="secondary">{userWishlist?.length || 0}</Badge> Wishlist
            </Link>
            <Link to="/cart" className="text-white text-decoration-none">
              <i className="fa-solid fa-cart-shopping"></i> <Badge bg="secondary">5</Badge> Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;