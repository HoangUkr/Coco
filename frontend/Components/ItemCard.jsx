import React from 'react';
import {Card, Button, Col } from 'react-bootstrap';
import { FaEye, FaShoppingCart, FaHeart } from 'react-icons/fa';

const ItemCard = ({image, name}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
        <Card className='text-center h-100 shadow-sm'>
            <Card.Img variant='top' src={image} alt={name} />
            <Card.Body>
                <Card.Title className='text-dark'>{name}</Card.Title>
                <div className='d-flex justify-content-around mt-3'>
                    <Button variant='light' className='p-2' title='View'>
                        <FaEye size={20}></FaEye>
                    </Button>
                    <Button variant='light' className='p-2' title='Add to Cart'>
                        <FaShoppingCart size={20}></FaShoppingCart>
                    </Button>
                    <Button variant='light' className='p-2' title='Like'>
                        <FaHeart size={20}></FaHeart>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ItemCard