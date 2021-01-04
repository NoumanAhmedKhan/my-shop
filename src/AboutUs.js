import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
import fb from './fb.png';
import insta from './insta.png';
import twitter from './twitter.png';
import shoes12 from './shoes12.jpg';

function AboutUs() {
    return(
        <div className="bg-light">
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="px-3 p-0">
             <div className="d-flex justify-content-between">
  <Navbar.Brand href="/"><img src={logo} alt="Logo" className="w-75"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#Men" className="text-light"><Link to='/Men' className="text-decoration-none text-light">Men</Link></Nav.Link>
      <Nav.Link href="#Women" className="px-sm-3 text-light text-decoration-none"><Link to="/Women" className="text-light text-decoration-none">Women</Link></Nav.Link>
      <Nav.Link href="#About" className="px-sm-3"><Link to="/AboutUs" className="text-light text-decoration-none">About Us</Link></Nav.Link>
      <Nav.Link href="#Contact" className="text-light"><Link to="/Contact" className="text-light text-decoration-none">Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

{/* end of header */}

{/* Start of body */}
<body className="bg-light">
<h2 className="text-center mt-5 mb-5">About Us</h2>

<div className="d-lg-flex">
  <img src={shoes12} alt='shoes' className="col col-lg-6 mb-auto"/>

<div>
<h5 className="col col-sm-7 text-center mx-auto py-5 font-weight-normal">We are small Footwear store trying to provide everyone Quality and a reliable products And to Ensure that our customers get what they paid for.
    We started along time ago about 18 years back. But as the Era of technology began and is taking over everything and making it everything easy for
    us. We can just sit in our couch and order what ever we want to buy online its just one click away. So we decide its time that we also do the same and
    Make it easy for everyone and for the people so that everyone can reach us and get good Quality and Upto date shoes they want.</h5>
  

<p className="col col-sm-7 text-center mx-auto text-muted">This is just the start We hope to keep providing great service and continue to get better and better. We will need all the support we can get so if
    you like our shoes and our page do recommend and tell others about us.<br/> and if your facing any problem on our behalf do contact us we will do our best
    to resolve any issue regarding our page or product and make our Website and page better for you. </p>
    </div>

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
export default AboutUs;