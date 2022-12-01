import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";


function NavigationBar() {
  
  return (
    <Navbar className="bgcolor navigation-space"  expand="lg">
    <Container fluid>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-between w-100 ">
          <div className="d-flex  justify-content-between w-70 ">

          <Nav.Link className="text-light" href="#home">Home</Nav.Link>

          <Nav.Link className="text-light" href="#home" >Product</Nav.Link>
          
          <NavDropdown title="Product"  id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  className="text-light" href="#home">Services</Nav.Link>
          <Nav.Link className="text-light" href="#home">Team</Nav.Link>
          <Nav.Link  className="text-light" href="#home">Portfolio</Nav.Link>
          <Nav.Link className="text-light" href="#home">Blog</Nav.Link>
          <Nav.Link className="text-light" href="#home navigation-space">Contact</Nav.Link>
          </div>
        
          <Nav.Link className="text-light" href="#home navigation-space">Go my Blog</Nav.Link>
             {/* <a href="#login">Go my Blog</a> */}
         
         
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
