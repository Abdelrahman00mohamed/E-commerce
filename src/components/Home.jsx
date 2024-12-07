
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { contextProduct } from '../stor';


export default function Home() {

let {product,addProduct}=useContext(contextProduct)

  return (
    <>
<div className='FirstSection'>

</div>

<div className='min-content '>

  <div className='icons py-5'>
    <Container >
      <Row className='gx-0'>
<Col lg='3' ms='6'  className=' bg-gradient brdr'>
<div className='box-content d-flex  my-4 justify-content-center'>
  <div className='icon  align-self-center px-3'>
  <i class="fa-solid fa-truck-fast icon-color fw-bolder"></i>
  </div>
  <div className='text  mt-2'>
    <h6>Free Delivery</h6>
    <p>Worldwide</p>
  </div>
</div>
</Col>
<Col lg='3' ms='6'  className=' bg-gradient brdr'>
<div className='box-content d-flex  my-4 justify-content-center'>
  <div className='icon  align-self-center px-3'>
 
  <i class="fa-solid fa-hand-holding-dollar icon-color fw-bolder"></i>
  </div>
  <div className='text  mt-2'>
    <h6>Money Returns</h6>
    <p>30 Days money return</p>
  </div>
</div>
</Col>
<Col lg='3' ms='6'  className=' bg-gradient brdr'>
<div className='box-content d-flex  my-4 justify-content-center'>
  <div className='icon  align-self-center px-3'>
 
  <i class="fa-solid fa-headset icon-color fw-bolder"></i>
  </div>
  <div className='text  mt-2'>
    <h6>27/4 Online Support</h6>
    <p>Customer Support</p>
  </div>
</div>
</Col>
<Col lg='3' ms='6'  className=' bg-gradient brdr'>
<div className='box-content d-flex  my-4 justify-content-center'>
  <div className='icon  align-self-center px-3'>
  
  <i class="fa-regular fa-credit-card icon-color fw-bolder"></i>
  </div>
  <div className='text  mt-2'>
    <h6>Payment Security</h6>
    <p>Safe Payment</p>
  </div>
</div>
</Col>


      </Row>
    </Container>
  </div>
</div>
<div className='product vh-100'>
<Container >
  <Row className='mb-5 justify-content-center'>
    <Col md='6'>
      <div className='underline position-relative text-center'>
      <h2 >Exclusive Products</h2>
      </div>
    </Col>
  </Row>


   <Row className='gy-5'>
    {product.map((pro,i)=> <Col className='offset-md-1 card offset-sm-0 mb-2' key={i} md='3'>
   <div className='overlay '>
   <i class="fa-regular fa-heart  mx-3  rounded-circle"></i>
   <i class="bi bi-zoom-in mx-3 "></i>
   <i class="fa-solid fa-shuffle mx-3  rounded-circle"></i>
   <Link className='btn btn-hov btn-info text-white p-3 mx-1' to='productdetails'>Details Product</Link>
   <Link className='btn btn-hov btn-info text-white ' onClick={()=>addProduct(pro)} > <i class="bi bi-cart3"></i> Add to cart</Link>
   </div>
      <img className='w-100 sizhei' src={pro.image} alt='product'/>
      <h5 className='mb-2 fw-bolder'>{pro.title}</h5>
      <h4 className='fw-bold'>price: {pro.price} $</h4>
    </Col> )}
  </Row>

</Container>

</div>

    </>
  )
}
