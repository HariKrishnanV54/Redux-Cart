import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='m-5'>
            <div className='row pt-5'>
                {/* Duplicate column  according to products */}
                <div className="col-3">
                    {/* Cards */}
            <Card className = "shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Img style={{ height: '250px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgQVuEKEEDn2J_PWJcgLDTWztdW5wVA_kfQvW9NT-9A&s" />
                <Card.Body className='text-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Link className="btn btn-primary" to={`/products/1`}>
                        View More
                    </Link>
                </Card.Body>
            </Card>
                </div>
            </div>
        </div>
    )
}

export default Products
