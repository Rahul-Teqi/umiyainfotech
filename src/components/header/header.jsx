import React from "react";
import "./header.css"; // Assuming you have some CSS for styling
import { Navbar, Nav, Container } from "react-bootstrap";

const header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="navbar shadow-sm p-1 rounded">
        <Container>
          <Navbar.Brand href="#home">
            <div className="Logo">
              <img
                src="/header/Logo.png" // Replace with your actual logo path
                alt="UIT Logo"
                height="35"
              />
              <span className="temp"></span>
              <img
                src="/header/umiyMaa.png" // Replace with your actual logo path
                alt="Umiya"
                height="45"
                style={{ marginTop: "-10px" }}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#work">Our Work</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
