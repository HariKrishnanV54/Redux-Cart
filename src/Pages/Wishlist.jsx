import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header'


function Wishlist() {
  return (
    <>
    <Header />
    <div className='container my-5 pt-5 '>
      <h1 className='fw-bold pt-5 text-primary align-item justify-content-center'>Users Wishlist</h1>
        <div className='m-5'>
            <div className='row pt-5'>
                {/* Duplicate column  according to products */}
                <div className="col-3">
                    {/* Cards */}
            <Card className = "shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Img style={{ height: '250px' }} variant="top" src="https://i.pinimg.com/736x/b2/55/b7/b255b798ab5b24b279ceb061859ea8af.jpg" />
                <Card.Body className='text-center'>
                    <Card.Title>Bella Vita </Card.Title>
                  <button className="btn btn-danger fs-2"><FontAwesomeIcon icon={faCircleXmark} /></button>
                  <button className="btn btn-success fs-2 ms-5"><i class="fa-solid fa-cart-plus"></i></button>

                </Card.Body>
            </Card>
                </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default Wishlist
