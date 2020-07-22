import React from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import './App.css';
import logo from './logo.png';

function Home() {
    return(
        <div>
          <header>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
  <Navbar.Brand href="#home"><img src={logo} alt="Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Men" className="text-light">Men</Nav.Link>
      <Nav.Link href="#Women" className="px-3 text-light">Women</Nav.Link>
      <Nav.Link href="#Kids" className="text-light">Kids</Nav.Link>
      <Nav.Link href="#About" className="px-3 text-light">About Us</Nav.Link>
      <Nav.Link href="#Contact" className="text-light">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

{/* end of header */}

{/* Start of body */}
<body>
<section>
<Carousel className="">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.gq.com/photos/58d2ffe007aa190b6923421d/16:9/w_2560%2Cc_limit/m-gemeni-sneakers-lead.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Kids Collection</h5></button>
      <p className="text-dark my-3">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/54f9c79ce4b0a50e0977e31e/1474308301536-34XJUW4R332J8LY6DGKN/ke17ZwdGBToddI8pDm48kB8cKi1pFMTcZQoluKoowS9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI773C_gNeGGW3c7_Cn8czDbNxZ7-i_pVpX7ZyKYajZuQ/image-asset.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <div>
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Women Collection</h5></button>
    </div>
      <p className="text-dark my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.netclipart.com/pp/m/209-2099851_leather-shoes-png-shoes-for-men-png.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Men Collection</h5></button>
      <p className="text-dark my-3">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>

<h2 className="text-center col-7 mx-auto my-5 font-weight-normal font-italic">It all began with a simple idea of Creating Quality and Well-Designed products that everyone can get and have a great experiance like we wanted for our self.</h2>

</body>
{/* End of body */}

        </div>
    );
}
export default Home;