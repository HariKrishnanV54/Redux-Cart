import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (
    <footer className="bg-primary bg-opacity-75 text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1: Brand Info */}
          <div className="col-12 col-md-4">
            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="fa-solid fa-truck-fast"></i> DailyCart
            </h4>
            <p className="mb-3">
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>
            <p className="mb-3">Code licensed Luminar, docs CC BY 3.0.</p>
            <p className="mb-0">Currently v5.3.2.</p>
          </div>

          {/* Column 2: Links */}
          <div className="col-6 col-md-2 offset-md-1">
            <h5 className="fw-bold mb-3">Links</h5>
            <div className="d-flex flex-column gap-2">
              <a href="#home" className="text-white text-decoration-none">
                Home
              </a>
              <a href="#wishlist" className="text-white text-decoration-none">
                Wishlist
              </a>
              <a href="#cart" className="text-white text-decoration-none">
                Cart
              </a>
            </div>
          </div>

          {/* Column 3: Guides */}
          <div className="col-6 col-md-2">
            <h5 className="fw-bold mb-3">Guides</h5>
            <div className="d-flex flex-column gap-2">
              <a href=" " target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                React
              </a>
              <a href="" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                React Bootstrap
              </a>
              <a href="" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                React Router
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <div className="input-group mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email Here"
                aria-label="Email Here"
              />
              <button className="btn btn-outline-light" type="button">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-3 fs-5 text-white">
              <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#email"><i className="fa-solid fa-envelope"></i></a>
              <a href="#phone"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-3">
          <small className="fw-semibold">
            Copyright &copy; August 2025 Batch, Daily Cart. Built with React Redux.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer