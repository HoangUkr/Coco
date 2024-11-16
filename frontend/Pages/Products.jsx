import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ItemCard from '../Components/ItemCard';

const Products = () => {
  const items = [
    { id: 1, image: 'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Item 1', price: 50 },
    { id: 2, image: 'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Item 2', price: 100 },
    { id: 3, image: 'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Item 3', price: 150 },
    { id: 4, image: 'https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', name: 'Item 4', price: 200 }
  ];
  return (
    <Container className='my-5'>
      <Row>
        {items.map((item) => (
          <ItemCard key={item.id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </Row>
    </Container>
  )
}

export default Products