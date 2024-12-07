import React, { useContext } from 'react'
import { contextProduct } from '../stor';
import { Col, Container, Row } from 'react-bootstrap';

export default function Cart() {
  let {products}=useContext(contextProduct)
  return (
    <div className=' text-center fa-10x fw-bolder'>
      <Container> 
          <Row className='mt-5'>
        {products.length===0?<h1 className=" text-center m-auto">no products added</h1>:products.map((product,i) => <Col className='offset-md-1 card offset-sm-0 mb-2' key={i} md='3'>
      <img className='w-100 sizhei' src={product.image} alt='product'/>
      <h5 className='mb-2 fw-bolder'>{product.title}</h5>
      <h4 className='fw-bold'>price: {product.price} $</h4>
    </Col>)}
        </Row> 
      </Container> 
    </div>
  )
}
