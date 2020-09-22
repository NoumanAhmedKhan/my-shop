import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';
// import shoes12 from './shoes12.jpg';

function Contact() {
    return(
        <div className="bg-light">
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="px-3 p-0">
             <div className="d-flex">
  <Navbar.Brand href="/"><img src={logo} alt="Logo" className="w-75"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Men" className="text-light">Men</Nav.Link>
      <Nav.Link href="#Women" className="px-sm-3 text-light">Women</Nav.Link>
      <Nav.Link href="#Kids" className="text-light">Kids</Nav.Link>
      <Nav.Link href="#About" className="px-sm-3"><Link to="/AboutUs" className="text-light text-decoration-none">About Us</Link></Nav.Link>
      <Nav.Link href="#Contact" className="text-light"><Link to="/Contact" className="text-light text-decoration-none">Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>

{/* end of header */}

{/* Start of body */}
<body className="bg-light">
<h2 className="text-center mt-5 mb-5">Contact Us</h2>

<div className="col">
    <h5 className="font-weight-normal">
    <img className="my-width-2 align-bottom mr-2 ml-sm-4" src="https://www.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png" alt="location mark"/>
    Adress: New Katarian Market, F-block Opposite to Al-Rehman Plaza.
    </h5>
</div>

<div className="my-4 py-2 col">
    <h5 className="font-weight-normal">
    <img className="align-bottom mr-2 ml-sm-4" src="https://e7.pngegg.com/pngimages/476/378/png-clipart-black-telephone-computer-icons-mobile-phones-telephone-call-icon-design-phone-icon-miscellaneous-hand.png" alt="phone icon" style={{width: "26px"}}/>
    Phone: 03030158986 <strong>or</strong> 03473727277
    </h5>
</div>

<div className="mb-4 col">
    <h5 className="font-weight-normal">
    <img className="align-bottom mr-2 ml-sm-4" src="https://icon-library.com/images/paper-plane-icon/paper-plane-icon-13.jpg" alt="phone icon" style={{width: "26px"}}/>
    Email: raonouman12345@gmail.com
    </h5>
</div>

<div className="ml-4">
    <p>
    <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQakqkkJuSrRiV_MER6BGX14P-_giPvQ5NCQQ&usqp=CAU" alt="arrow" style={{width: "26px"}}/>
     *Click here to view full Map*
     </p>
</div>

<div className="text-center card mb-5 border-secondary">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.1869646155003!2d73.05754319436674!3d33.64431516191042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951a2c
928363%3A0x2a34e3d4b1d9d361!2sBobby%20Shoes!5e0!3m2!1sen!2s!4v1600781757075!5m2!1sen!2s"  ></iframe>
</div>

<footer  className="bg-secondary">
  <p className="text-white text-center pt-3">Also Follow and support us on Social Media</p>
  <div className="d-flex justify-content-around py-4">
    <a href="https://www.instagram.com/_softstep/">
      <img src="https://img.pngio.com/hq-instagram-png-transparent-instagrampng-images-pluspng-instagram-black-png-512_512.png" className="my-width" alt="fb-icon"/>
    </a>
    <a href="https://www.instagram.com/_softstep/">
      <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-285-893479.png" className="my-width" alt="fb-icon"/>
    </a>
    <a href="https://www.instagram.com/_softstep/">
      <img src="https://www.pngkey.com/png/full/0-5396_news-cls-lalsa-twitter-icon-white-vector.png" className="my-width" alt="fb-icon"/>
    </a>
  </div>
</footer>

</body>
{/* End of body */}

        </div>
    );
}
export default Contact;