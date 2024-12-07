
import { useContext } from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contextProduct } from '../stor';


export default function Jewelery() {
  let {productJewelery,addProduct}=useContext(contextProduct)

  return (
    <>
       <Container>
       <h2 className='text-center mt-5 fw-bolder'>Jewelery collection</h2>
<Row className='gy-5 my-4  align-items-center justify-content-center'>
  {productJewelery.map((pro,i)=> <Col className='card offset-md-1 offset-sm-0 ' key={i} md='3'>
  <div className='overlay '>
   <i class="fa-regular fa-heart  mx-3  rounded-circle"></i>
   <i class="bi bi-zoom-in mx-3 "></i>
   <i class="fa-solid fa-shuffle mx-3  rounded-circle"></i>
   <Link className='btn btn-hov btn-info text-white p-3 mx-1' to='productdetails'>Details Product</Link>
   <Link className='btn btn-hov btn-info text-white ' onClick={()=>addProduct(pro)}> <i class="bi bi-cart3"></i> Add to cart</Link>
   </div>
    <img className='w-100 mb-2 sizhei ' src={pro.image} alt='product'/>
    <h5 className='mb-2'>{pro.title}</h5>
    <h4 >{pro.price} $</h4>
   
  </Col> )}
</Row>
</Container>
    </>
  )
}
