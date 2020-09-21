import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './App.css';
import logo from './logo.png';

function Women() {
    return(
        <div>
          <header>
           <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fixed-top px-3 p-0">
             <div className="d-flex">
  <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="w-75"/></Navbar.Brand>
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

</body>
{/* End of body */}

        </div>
    );
}
export default Women;