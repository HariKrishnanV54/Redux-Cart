import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Wishlist() { 
  const userWishlist = useSelector(state => state.wishlistReducer);

  return ( 
    <>
      <Header />
      <div className="container my-5 pt-5">
        { 
          userWishlist?.length > 0 ? (
            <>
              <h1 className="fw-bold pt-5 text-primary d-flex align-items-center justify-content-center">
                Users Wishlist
              </h1>
              <div className="m-5">
                <div className="row pt-5">
                  {
                    userWishlist?.map(item => (
                      <div key={item?.id} className="col-3">
                        <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                          <Card.Img
                            style={{ height: '250px' }} 
                            variant="top"
                            src={item?.thumbnail}
                          />
                          <Card.Body className="text-center">
                            <Card.Title>{item?.title}</Card.Title>
                            <button className="btn btn-danger fs-2">
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <button className="btn btn-success fs-2 ms-5">
                              <i className="fa-solid fa-cart-plus"></i>
                            </button>
                          </Card.Body>
                        </Card>
                      </div>
                    ))
                  } 
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img
                className="img-fluid"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png"
                alt=""
              />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className="btn btn-primary">
                Add more
              </Link>
            </div>
          )
        } 
      </div>
    </>
  ); 
} 

export default Wishlist;