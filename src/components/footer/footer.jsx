import React from "react";
import "./footer.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Company Info */}
        <div className="footer-brand">
          <img src="/footer/Logo-white.png" height="100px" />
          <p className="tagline">Your Vision, Our Innovation</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="footer-links">
          <h3>Keep Exploring</h3>
          <ul>
            <li>
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>Home</Nav.Link>

            </li>
            <li>
            <Nav.Link as={Link} to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to="/service" className={location.pathname === "/service" ? "active" : ""}>Services</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""} >Contact Us</Nav.Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact & Address */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/umiya.info.tech/">
              <img src="/footer/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/footer/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="social-icons">
            {/* <a href="#">
              <img src="/footer/gmail (1).png" alt="Gmail" />
            </a> */}
            <a href="tel:+91 6353022089">
              <img src="/footer/call.png" alt="Call" />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="footer-address">
          <h3>Address</h3>
          <p>Ahmedabad</p>
          <p>Gujarat</p>
          <p>India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
