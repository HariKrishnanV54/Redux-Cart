import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Cart() {
  return (
    <div className='container my-5 '>
      <h1 className='fw-bold pt-5 text-primary '>User's Cart</h1>
      <div className='row'>
        <div className="col-lg-8 border shadow ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                 <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                 <th scope="col">Price</th>
                 <th scope="col">...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bella Vita</td>
                <td><img style={{ height: '50px', width: '50px' }} src="https://i.pinimg.com/736x/b2/55/b7/b255b798ab5b24b279ceb061859ea8af.jpg" alt="" /></td>
                <td>
                  <div className='d-flex align-items-center'>
                    <button className="btn fs-1">+</button>
                    <input style={{ width: '40px' }} type="text" className='form-control w-25 text-center' value={1} readOnly />
                    <button className="btn fs-1">-</button>
                  </div >
                </td>
                <td>
                  <div>
                    <h6 className='text-primary '>$ 200</h6>

                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center gap-3'>
                <FontAwesomeIcon icon={faTrashAlt} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='float-end p-5'>
            <button className="btn btn-Danger">Empty Cart</button>
            <button className="btn btn-success ms-5">Show More</button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='border shadow rounded p-5'>
            <h4>Total Amount: <span className="text-danger">$ 200</span></h4>
            <hr/>
            <button className="btn btn-success w-100">Checkout</button>

          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Cart
