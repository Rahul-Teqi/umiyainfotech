import React from "react";
import "./header.css"; // Assuming you have some CSS for styling
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";


  const header = () => {
    const location = useLocation();

    return (
      <header>
        <Navbar bg="light" expand="lg" className="navbar shadow-sm p-1 rounded">
          <Container>
            <Navbar.Brand href="/">
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
                <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Nav.Link>
                <Nav.Link href="#services" className={location.hash === "#services" ? "active" : ""}>Services</Nav.Link>
                <Nav.Link href="#work" className={location.hash === "#work" ? "active" : ""}>Our Work</Nav.Link>
                <Nav.Link href="#contact" className={location.hash === "#contact" ? "active" : ""}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };


export default header;
