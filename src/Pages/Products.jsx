import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/slices/productSlice';
import Header from '../Components/Header';
import { FaBackward, FaForward } from 'react-icons/fa';

function Products() {
  const { loading, allProducts = [], error } = useSelector((state) => state.productReducer || {});
  const dispatch = useDispatch();

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / productPerPage) || 1;
  const currentPageLastIndex = currentPage * productPerPage;
  const currentPageFirstIndex = currentPageLastIndex - productPerPage;
  const visibleProductArray = allProducts.slice(currentPageFirstIndex, currentPageLastIndex);

  const navigateNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const navigatePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Fetch products on initial mount
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Reset page to 1 whenever search query updates allProducts
  useEffect(() => {
    setCurrentPage(1);
  }, [allProducts]);

  return (
    <>
      <Header InsideProducts={true} />
      <div className="container my-5">
        {loading ? (
          <div className="text-center py-5 fw-bold">Loading...</div>
        ) : (
          <>
            <div className="row pt-4 g-4">
              {visibleProductArray.length > 0 ? (
                visibleProductArray.map((product) => (
                  <div key={product?.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card className="shadow-sm h-100 p-2">
                      <Card.Img
                        style={{ height: '220px', objectFit: 'contain' }}
                        variant="top"
                        src={product?.thumbnail}
                        alt={product?.title}
                      />
                      <Card.Body className="d-flex flex-column text-center">
                        <Card.Title className="fs-6 fw-bold mb-3 flex-grow-1">
                          {product?.title}
                        </Card.Title>
                        <Link to={`/products/${product?.id}`} className="btn btn-info text-white mt-auto">
                          View More
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 fw-bold text-muted">
                  {error || "No Products Found"}
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {allProducts.length > productPerPage && (
              <div className="d-flex justify-content-center align-items-center gap-4 mt-5">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={navigatePreviousPage}
                  disabled={currentPage === 1}
                >
                  <FaBackward />
                </button>
                <span className="fw-bold">
                  {currentPage} of {totalPages}
                </span>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={navigateNextPage}
                  disabled={currentPage === totalPages}
                >
                  <FaForward />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Products;