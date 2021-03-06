import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Card} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import fb from './fb.png';
import insta from './insta.png';
import twitter from './twitter.png';
import Men1 from './Men1.jpg';
import Men2 from './Men2.jpg';
import Men3 from './Men3.jpg';
import Men5 from './Men5.jpg';
import Men9 from './Men9.jpg';
import Men10 from './Men10.jpg';
import Men12 from './Men12.jpg';
import Men13 from './Men13.jpg';
import Men14 from './Men14.jpg';
import Men15 from './Men15.jpg';
import Men17 from './Men17.jpg';
import Men18 from './Men18.jpg';
import Men19 from './Men19.jpg';
import Men20 from './Men20.jpg';
import Men21 from './Men21.jpg';

function Men() {
    return(
        <div>
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="px-3 p-0">
             <div className="d-flex justify-content-between">
  <Navbar.Brand href="/"><img src={logo} alt="Logo" className="w-75"/></Navbar.Brand>
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
<h2 className="pt-3 btn-grad6 shadow col-10 mx-auto pb-3 text-center mt-5 col-xl-2 col-lg-4 col-sm-5 text-light">Men's Shoes</h2>

{/* Cards */}

<div>
  {/* Best seller part-1 */}
  <div className="d-sm-flex justify-content-around pt-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow bg-dark pt-3">
    <Card.Img variant="top" src={Men1} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-white'>Men Casual Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad8 pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={Men12} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Dress shoes Rs: 1330/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad6 pt-3">
    <Card.Img variant="top" src={Men18} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Winter shoes Rs: 1150/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
  {/* part-1 end */}

{/* Best Seller part-2 */}
<div className="d-sm-flex justify-content-around pt-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow btn-grad3 pt-3">
    <Card.Img variant="top" src={Men3} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Casual Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad5 pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={Men15} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Dress shoes Rs: 1330/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad6 text-light pt-3">
    <Card.Img variant="top" src={Men21} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Men's Winter Rs: 1150/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* part-2 end */}

{/* Best Seller part-3 */}

<div className="d-sm-flex justify-content-around pt-5 pb-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow btn-grad2 pt-3">
    <Card.Img variant="top" src={Men5} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Casual Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad6 text-light pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={Men13} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Men's Dress shoes Rs: 1330/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad4 pt-3">
    <Card.Img variant="top" src={Men17} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Winter Rs: 1150/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* Part-3 end */}

{/* Part 4 */}
<div className="d-sm-flex justify-content-around pt-5 pb-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow btn-grad8 pt-3">
    <Card.Img variant="top" src={Men2} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Casual Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad9 text-light pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={Men14} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Men's Dress Rs: 1330/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad pt-3">
    <Card.Img variant="top" src={Men19} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Winter Rs: 1500/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* part 4 end */}

{/* part 5 */}
<div className="d-sm-flex justify-content-around pt-5 pb-5 px-4 px-sm-0">

  {/* first card */}

<Card className="col-md-3 border-0 shadow btn-grad5 pt-3">
    <Card.Img variant="top" src={Men9} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Casual Rs: 1250/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

{/* 2nd card */}

<Card className="col-md-3 border-0 shadow btn-grad7 text-light pt-3 my-5 my-sm-0">
    <Card.Img variant="top" src={Men10} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center'>Men's Dress Rs: 1450/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

  {/* 3rd card */}

  <Card className="col-md-3 border-0 shadow btn-grad10 pt-3">
    <Card.Img variant="top" src={Men20} />
    <Card.Body>
      <Card.Text>
        <h5 className='text-center text-light'>Men's Winter Rs: 1350/-</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</div>
{/* part 5 end */}

</div>

{/* cards end */}

{/* Footer */}
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
{/* Footer end */}

</body>
{/* End of body */}

        </div>
    );
}
export default Men;