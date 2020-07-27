import React from 'react';
import { Navbar, Nav, Carousel, Card} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import shoes1 from './shoes1.jpg';
import shoes2 from './shoes2.jpg';
import shoes3 from './shoes3.jpg';
import shoes4 from './shoes4.jpg';
import shoes5 from './shoes5.jpg';
import shoes6 from './shoes6.jpg';

function Home() {
    return(
        <div>
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fixed-top px-3 p-0">
             <div className="d-flex">
  <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="col-md-9 col-8"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Men" className="text-light">Men</Nav.Link>
      <Nav.Link href="#Women" className="px-sm-3 text-light">Women</Nav.Link>
      <Nav.Link href="#Kids" className="text-light">Kids</Nav.Link>
      <Nav.Link href="#About" className="px-sm-3 text-light">About Us</Nav.Link>
      <Nav.Link href="#Contact" className="text-light">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

{/* end of header */}

{/* Start of body */}
<body>
<section className="mt-5 pt-3">
<Carousel className="">
  <Carousel.Item>
    <img
      className="d-block col-md-6 mx-auto"
      src={shoes1}
      // src="https://media.gq.com/photos/58d2ffe007aa190b6923421d/16:9/w_2560%2Cc_limit/m-gemeni-sneakers-lead.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <div>
      <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Kids Collection</h5></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto col-md-6"
      src={shoes2}
      // src="https://images.squarespace-cdn.com/content/v1/54f9c79ce4b0a50e0977e31e/1474308301536-34XJUW4R332J8LY6DGKN/ke17ZwdGBToddI8pDm48kB8cKi1pFMTcZQoluKoowS9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI773C_gNeGGW3c7_Cn8czDbNxZ7-i_pVpX7ZyKYajZuQ/image-asset.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <div>
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Women Collection</h5></button>

    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block col-md-6 mx-auto"
      src={shoes3}
      // src="https://www.netclipart.com/pp/m/209-2099851_leather-shoes-png-shoes-for-men-png.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <div>
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Men Collection</h5></button>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>

<h4 className="text-center mx-auto my-5 font-weight-normal col-sm-7 font-italic">It all began with a simple idea of Creating Quality and Well-Designed products that everyone can get and have a great experiance like we wanted for our self.</h4>

<div className="d-sm-flex justify-content-around pt-5">

  {/* first card */}

<Card className="col-md-3 border-0 shadow">
    <Card.Img variant="top" src={shoes4} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Shop Kid's Collection</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow">
    <Card.Img variant="top" src={shoes5} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Shop Women's Collection</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow">
    <Card.Img variant="top" src={shoes6} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Shop Mens's Collection</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>

</body>
{/* End of body */}

        </div>
    );
}
export default Home;