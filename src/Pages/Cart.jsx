import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeCartItem, incrementCart, decrementCart, emptyCart } from '../redux/slices/cartSlice';
import Swal from 'sweetalert2';

function Cart() {
  const userCart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    setCartTotal(userCart?.reduce((acc, curr) => acc + curr.totalPrice, 0));
  }, [userCart]);

  const handleDecrementCart = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCart(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const handleCheckout =() =>{
    dispatch(emptyCart())
    Swal.fire({
      title:"Order placed Successfully",
      text:"Thank Your for Purchasing with US",
      icon:"success",
      confirmButtontext:"ok"
  })
  Navigate
  }

  return (
    <>
      <Header />
      {userCart?.length > 0 ? (
        <div className="container my-5">
          <h1 className="pt-5 text-primary fw-bold">User's Cart</h1>

          <div className="row g-4 mt-2">
            {/* Cart Table Section */}
            <div className="col-lg-8 border shadow rounded p-3 bg-white">
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Image</th>
                      <th scope="col" style={{ minWidth: '130px' }}>Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col" className="text-center">...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart.map((item, index) => (
                      <tr key={item?.id}>
                        <td>{index + 1}</td>
                        <td className="fw-semibold">{item?.title}</td>
                        <td>
                          <img
                            src={item?.thumbnail}
                            alt={item?.title}
                            className="rounded object-fit-cover"
                            style={{ height: '50px', width: '50px' }}
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              type="button"
                              onClick={() => handleDecrementCart(item)}
                              className="btn btn-outline-secondary btn-sm px-2 py-0"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control form-control-sm text-center mx-1"
                              style={{ width: '45px' }}
                              value={item?.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              onClick={() => dispatch(incrementCart(item?.id))}
                              className="btn btn-outline-secondary btn-sm px-2 py-0"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="fw-semibold">
                          $ {item?.totalPrice?.toFixed(2)}
                        </td>
                        <td className="text-center">
                          <button
                            onClick={() => dispatch(removeCartItem(item?.id))}
                            type="button"
                            className="btn btn-outline-danger btn-sm border-0"
                            title="Remove item"
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-3 pt-3 border-top">
                <button
                  onClick={() => dispatch(emptyCart())}
                  type="button"
                  className="btn btn-danger"
                >
                  Empty Cart
                </button>
                <Link to={'/'} className="btn btn-success">Show More</Link>
              </div>
            </div>

            {/* Summary / Checkout Section */}
            <div className="col-lg-4">
              <div className="border shadow rounded p-4 bg-white">
                <h4 className="d-flex justify-content-between align-items-center">
                  Total Amount: <span className="text-danger fw-bold">$ {cartTotal?.toFixed(2)}</span>
                </h4>
                <hr />
                <button onClick={handleCheckout} type="button" className="btn btn-success w-100 py-2 fw-semibold">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart View */
        <div className="d-flex justify-content-center align-items-center flex-column my-5 pt-5">
          <img
            className="img-fluid"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png"
            alt="Empty Cart"
          />
          <h1>Your cart is empty</h1>
          <Link to={'/'} className="btn btn-primary">
            Add more
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;