import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function View() {
  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  
  
  return (
    <>
      <Header />
      <div className="container my-5 pt-5">
        <div className="row align-items-center" style={{ minHeight: '80vh' }}>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://i.pinimg.com/736x/b2/97/2a/b2972a0766a5c9550b0b3b6870b2ebb1.jpg"
              alt="Bella Vita"
              className="img-fluid rounded"
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
            <div className="d-flex justify-content-center gap-3 mt-3">
              <button type="button" className="btn btn-outline-primary">Add to Wishlist</button>
              <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold">Bella Vita</h1>
            <h2 className="text-primary fw-bold mb-3">$ 200</h2>
            <h5 className="fw-bold text-muted">Brand: <span className="text-dark fw-normal">Bella Vita</span></h5>
            <h5 className="fw-bold text-muted">Category: <span className="text-dark fw-normal">Fragrance</span></h5>
            <h5 className="fw-bold text-muted">Description:</h5>
            <p className="text-secondary">Luxury organic perfume crafted for all-day freshness.</p>

            <h5 className="fw-bold mt-4">Client reviews:</h5>
            <div className="border rounded p-3 shadow-sm my-3">
              <p className="mb-1"><span className="fw-bold">Name: </span>Great fragrance, lasts long!</p>
              <p className="mb-0 text-warning d-flex align-items-center gap-1">
                <span className="text-dark me-1">Rating:</span>
                <FontAwesomeIcon icon={faStar} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;