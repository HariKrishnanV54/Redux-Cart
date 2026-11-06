import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from "../redux/slices/productSlice"

function Products() {
    const { loading, allProducts, error } = useSelector((state) => state.productReducer || {})

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div className='m-5'>
            {
                loading ?
                    <div className="text-center py-5 fw-bold">Loading...</div>
                    :
                    <div className='row pt-5'>
                        {/* Duplicate column according to the products */}
                        {
                            allProducts?.length > 0 ? 
                                allProducts.map(product => (
                                    <div key={product?.id} className="col-3">
                                        {/* Cards */}
                                        <Card className='shadow p-2 mb-4'>
                                            <Card.Img style={{ height: '250px'}} variant="top" src={product?.thumbnail} />
                                            <Card.Body className='text-center'>
                                                <Card.Title>{product?.title}</Card.Title>
                                                <Link to={`/products/${product?.id}`} className='btn btn-info'>View More</Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                             : (
                                <div className="text-center py-5 fw-bold">{error || "No Products Found"}</div>
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default Products