
import { Container,Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import lang from '../images/eng.png'
import { Link } from 'react-router-dom';
import logoNav from  '../images/logo_dark.png'


export default function Navbar() {
  
  return (
    <>
      <Container fluid className='my-3'>
        <Row>
          <Col   md='6'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='lang px-1'>
             <img className=' rounded-circle px-2 ' src={lang} alt='lang logo'/>
             <span>English</span>
             <i className="fa-solid fa-angle-down px-2"></i>
            </div>
            <div className='usd px-1'>
              <span className='h6'>USD</span>
              <i className="fa-solid fa-angle-down px-2"></i>
              </div>
              <div className='phone '>
              <i className="fa-solid fa-mobile-screen px-2"></i>
              <span>123-456-7890</span>
              </div>
          </div>
          </Col>
          <Col  md='6'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='shuffle hovr px-3'>
            <i class="fa-solid fa-shuffle px-1"></i>
             <span>Compare</span>
            </div>

            <div className='harte  hovr px-3'>
            <i class="fa-regular fa-heart px-1"></i>
              <span>Wishlist</span>
              </div>

              <div className='user  hovr px-3'>
              <i class="fa-regular fa-user px-1"></i>
              <span>Login</span>
              </div>
          </div>
          </Col>
        </Row>
      </Container>
        <hr/>
        <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <img src={logoNav} alt=''/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item px-1">
          <Link className="nav-link color siz" aria-current="page" to='home'>Home</Link>
        </li>
        <li className="nav-item px-1">
          <Link className="nav-link color siz" to='men'>men's clothing</Link>
        </li>
        <li className="nav-item px-1">
          <Link className="nav-link color siz" to='women'>women's clothing</Link>
        </li>
        <li className="nav-item px-1">
          <Link className="nav-link color siz" to='jewelery'>jewelery</Link>
        </li>
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item hovr px-2 siz">
        <i class="fa-solid fa-magnifying-glass"></i>
        </li>
        <li className="nav-item  position-relative px-2 siz">
        <Link className='hovr' to='cart'><i class="bi bi-cart3"></i></Link>
        </li>
      </ul>
    </div>
  </div>
    </nav>



    </>
  )
}
