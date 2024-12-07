import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Productdetails() {
  let [productdetails,setProudDetails]=useState({});
 async function getProductDetails (){
let {data}= await axios.get('https://fakestoreapi.com/products/1')
setProudDetails(data)
  }
  useEffect(()=>{
    getProductDetails()
  },[])
  return (
    <>
    <Container className='pt-5'>
      <Row>
        <Col md='4' >
    <img src={productdetails.image} className='w-100' alt='details'/>
        </Col>
        <Col md='8' className=' align-self-center fa-2x' >
          <ul className='bool fw-bold'>
            <li className='py-2'>title:{productdetails.title}</li>
            <li className='py-2'>price:{productdetails.price}$</li>
             <li className='py-2'>description: {productdetails.description}</li>
             <li >category: {productdetails.category}</li>
             
          </ul>
        </Col>
       
      </Row>
    </Container>
    
    </>
  )
}
