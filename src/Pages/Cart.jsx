import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'; // or faTrash from @fortawesome/free-solid-svg-icons
import Header from '../Components/Header';

function Cart() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="fw-bold pt-5 text-primary mb-4">User's Cart</h1>

        <div className="row g-4">
          {/* Cart Table Section */}
          <div className="col-lg-8">
            <div className="border shadow-sm rounded p-3 bg-white">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Image</th>
                      <th scope="col" style={{ minWidth: '130px' }}>Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col" className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="fw-semibold">Bella Vita</td>
                      <td>
                        <img
                          src="https://i.pinimg.com/736x/b2/55/b7/b255b798ab5b24b279ceb061859ea8af.jpg"
                          alt="Bella Vita"
                          className="rounded object-fit-cover"
                          style={{ height: '50px', width: '50px' }}
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-outline-secondary btn-sm px-2 py-0">-</button>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center mx-1"
                            style={{ width: '45px' }}
                            value={1}
                            readOnly
                          />
                          <button type="button" className="btn btn-outline-secondary btn-sm px-2 py-0">+</button>
                        </div>
                      </td>
                      <td>
                        <h6 className="text-primary mb-0 fw-bold">$ 200</h6>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-outline-danger btn-sm border-0" title="Remove item">
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-3 pt-3 border-top">
                <button type="button" className="btn btn-danger">Empty Cart</button>
                <button type="button" className="btn btn-success">Show More</button>
              </div>
            </div>
          </div>

          {/* Summary / Checkout Section */}
          <div className="col-lg-4">
            <div className="border shadow-sm rounded p-4 bg-white">
              <h4 className="d-flex justify-content-between align-items-center">
                Total Amount: <span className="text-danger fw-bold">$ 200</span>
              </h4>
              <hr />
              <button type="button" className="btn btn-success w-100 py-2 fw-semibold">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;