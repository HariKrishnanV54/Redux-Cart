import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function View() {
  return (
    <div className='container my-5 pt-5'>
      <div className='row align-items-center' style={{height:'80vh'}}>
        <div className="col-6 text-center">
          <img style={{ height:'70%', width: '60%' }} src="https://i.pinimg.com/736x/b2/97/2a/b2972a0766a5c9550b0b3b6870b2ebb1.jpg" alt="" />
         <div className='d-flex justify-content-center gap-3 mt-3'>
            <button className="btn btn-primary">Add to Wishlist</button>
            <button className="btn btn-primary">Add to Cart</button>
  
         </div >
        </div>
        <div className="col-6 ">
          <h1 className='fw-bold'>Bella Vita</h1>
          <h2 className='text-primary fw-bold'>$ 200</h2>
          <h4 className='fw-bold'>Brand</h4>
          <h4 className='fw-bold'>Category</h4>
          <h4 className='fw-bold'>Description</h4>
          <h5 className='fw-bold'>Client reviews:</h5>
          <div className='border rounded  p-2 shadow my-5'>
            <p><span className='fw-bold'> name:</span>Message: </p>
            <p>Rating<FontAwesomeIcon icon={faStar} /></p>
            </div>


        </div>
      </div>
    </div>
  )
}

export default View
