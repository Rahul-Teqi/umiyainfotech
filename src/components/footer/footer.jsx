import React from "react";
import "./footer.css";

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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact & Address */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="social-icons">
            <a href="#"><img src="/footer/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/footer/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="/footer/gmail (1).png" alt="Gmail" /></a>
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
