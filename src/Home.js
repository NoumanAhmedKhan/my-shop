import React from 'react';
import { Navbar, Nav, Carousel, Card} from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import fb from './fb.png';
import insta from './insta.png';
import twitter from './twitter.png';
import shoes1 from './shoes1.jpg';
import shoes2 from './shoes2.jpg';
import shoes3 from './shoes3.jpg';
import shoes4 from './shoes4.jpg';
import shoes5 from './shoes5.jpg';
import shoes7 from './shoes7.jpg';
import shoes8 from './shoes8.jpg';
import shoes9 from './shoes9.jpg';
import shoes10 from './shoes10.jpg';
import shoes11 from './shoes11.jpg';

function Home() {
    return(
        <div>
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fixed-top px-3 p-0">
             <div className="d-flex pb-1 justify-content-between">
  <img src={logo} alt="Logo" className="col-md-9 col-8"/>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#Men" className="text-light"><Link to='/Men' className="text-decoration-none text-light">Men</Link></Nav.Link>
      <Nav.Link href="#Women" className="px-sm-3"><Link to="/Women" className="text-light text-decoration-none">Women</Link></Nav.Link>
      <Nav.Link href="#About" className="px-sm-3"><Link to="/AboutUs" className="text-light text-decoration-none">About Us</Link></Nav.Link>
      <Nav.Link href="#Contact" className="text-light"><Link to="/Contact" className="text-light text-decoration-none">Contact</Link></Nav.Link>
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
      alt="First slide"
    />
    <Carousel.Caption>
      <div>
      <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Seasonal</h5></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto col-md-6"
      src={shoes2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <div>
      <Link to="/Women">
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Women Collection</h5></button>
      </Link>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block col-md-6 mx-auto"
      src={shoes7} alt="Third slide"
    />

    <Carousel.Caption>
      <div>
      <Link to="/Men">
    <button className="btn rounded-pill btn-grad"><h5 className="font-weight-normal text-white pt-1">Men Collection</h5></button>
    </Link>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>

<h4 className="text-center mx-auto my-5 font-weight-normal col-sm-7 font-italic">It all began with a simple idea of Creating Quality and Well-Designed products that everyone can get and have a great experiance like we wanted for our self.</h4>

<div className="d-sm-flex justify-content-around pt-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow btn-grad7 pt-3">
<Link to="/">
    <Card.Img variant="top" src={shoes4} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-dark'>Shop Seasonal</h5>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad7 pt-3 my-5 my-sm-0">
    <Link to="/Women">
    <Card.Img variant="top" src={shoes2} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-dark'>Shop Women's Collection</h5>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  
  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad7 pt-3">
    <Link to="Men">
    <Card.Img variant="top" src={shoes7} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-dark'>Shop Men's Collection</h5>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

</div>

<h4 className="my-5 text-center h3 pt-3">Best Seller's</h4>

<div>
  {/* Best seller part-1 */}
  <div className="d-sm-flex justify-content-around pt-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow bg-dark pt-3">
    <Card.Img variant="top" src={shoes4} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-white'>Women summer shoes Rs: 850/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow bg-warning pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={shoes5} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Women summer shoes Rs: 1150/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow bg-danger pt-3">
    <Card.Img variant="top" src={shoes8} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-white'>Men's shoes Rs: 1350/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
  {/* part-1 end */}

{/* Best Seller part-2 */}
<div className="d-sm-flex justify-content-around pt-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow bg-info pt-3">
    <Card.Img variant="top" src={shoes11} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Women Khusa Rs: 650/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow bg-secondary pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={shoes7} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's winter shoes Rs: 1500/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow bg-success pt-3">
    <Card.Img variant="top" src={shoes3} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Women Sandals Rs: 750/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* part-2 end */}

{/* Best Seller part-3 */}

<div className="d-sm-flex justify-content-around pt-5 pb-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow bg-danger pt-3">
    <Card.Img variant="top" src={shoes9} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Women Khusa Rs: 750/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow bg-warning pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={shoes1} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Women Heals Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow bg-dark pt-3">
    <Card.Img variant="top" src={shoes10} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Women Khusa Rs: 750/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* Part-3 end */}

</div>

<footer  className="btn-grad">
  <p className="text-white text-center pt-3">Also Follow and support us on Social Media</p>
  <div className="d-flex justify-content-around pb-3">
    <a href="https://www.instagram.com/_softstep/">
      <img src={fb} className="fb-width" alt="fb-icon"/>
    </a>
    <a href="https://www.instagram.com/_softstep/">
      <img src={insta} className="insta-width" alt="insta-icon"/>
    </a>
    <a href="https://www.instagram.com/_softstep/">
      <img src={twitter} className="twitter-width" alt="twitter-icon"/>
    </a>
  </div>
</footer>

</body>
{/* End of body */}

        </div>
    );
}
export default Home;