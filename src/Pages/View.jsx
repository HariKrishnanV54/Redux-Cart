import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import Products from './Products';
import { addCart } from '../redux/slices/cartSlice';

function View() {
  const { id } = useParams();
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer);
  const [product, setProduct] = useState([]);
  const userWishlist = useSelector(state => state.wishlistReducer);
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch();
  console.log(userWishlist);

  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id));
  }, [allProducts, id]);
  console.log(allProducts);

  const hanldeWishlist = () => {
    const existingItem = userWishlist?.find(item => item?.id == product?.id);
    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: "Prodct is already wishlisted",
        icon: 'error',
        confirmButtonText: "ok"
      });
    } else {
      dispatch(addToWishlist(product));
    }
  }

   const hanldeCart = () => {
    //check the product already in the cart
    const existingItem = userCart?.find(item => item?.id == product?.id);
   dispatch(addCart(product))
   Swal.fire({
       title:"Success",
       text: existingItem? `$(existingItem.title) quantity incremented` : "Product added to your cart",
       icon:"Success",
       confirmButtonText:"Ok"

   })
  }

  return (
    <>
      <Header />
      <div className="container my-5 pt-5">
        <div className="row align-items-center" style={{ minHeight: '80vh' }}>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={product?.thumbnail}
              alt="Bella Vita"
              className="img-fluid rounded"
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
            <div className="d-flex justify-content-center gap-3 mt-3">
              <button onClick={hanldeWishlist} type="button" className="btn btn-outline-primary">Add to Wishlist</button>
              <button onClick={hanldeCart} type="button" className="btn btn-primary">Add to Cart</button>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold">{product?.title}</h1>
            <h2 className="text-primary fw-bold mb-3">$ {product?.price}</h2>
            <h5 className="fw-bold text-muted">Brand:  {product?.brand} </h5>
            <h5 className="fw-bold text-muted">Category:  {product?.category}</h5>
            <h5 className="fw-bold text-muted">Description: {product?.description}</h5>

            <h5 className="fw-bold mt-4">Client reviews:</h5>
            {
              product?.reviews?.map((item, index) => (
                <div key={index} className='border rounded p-2 shadow my-5'>
                  <p><span className='fw-bolder'>Name: {item?.reviewname}</span> {item?.comment}</p>
                  <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /> </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default View;