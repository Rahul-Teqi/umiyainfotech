import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./service.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="service">
        <div className="block1">
          <h3 className="companyName">Umiya InfoTech</h3>
          <h1>Our Services</h1>
        </div>
        <div className="block2">
          <div className="block-container">
            <div className="block-image-container">
            <video src="/service/AI.mp4" className="block-image" muted playsInline  autoPlay loop />

              <div className="block-border"></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">AI & Machine Learning</h2>
              <p className="block-description">
                We use AI & Machine Learning to make smart systems that help
                businesses work faster and make better decisions. From
                predictions to automation, we create solutions that simplify
                your work.
              </p>
              <button className="block-button" onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>

          <div
            className="block-container reverse"
            style={{ backgroundColor: "#F3F5FF" }}
          >
            <div className="block-image-container">
            <video src="/service/cybersecurity.mp4  " className="block-image" muted playsInline autoPlay loop />

              <div className="block-border"></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">Cybersecurity Solutions</h2>
              <p className="block-description">
              We provide Cybersecurity Solutions to protect your business from online threats and data breaches. Our services ensure your systems stay safe, secure, and always protected.
              </p>
              <button className="block-button"onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>
          <div className="block-container">
            <div className="block-image-container">
            <video src="/service/marketing.mp4 " className="block-image" muted playsInline  autoPlay loop />

              <div className="block-border"></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">Digital Marketing</h2>
              <p className="block-description">
              Our Digital Marketing services help businesses grow online with SEO, social media, and targeted advertising. We create strategies to increase your reach and attract more customers.
              </p>
              <button className="block-button"onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>

          <div
            className="block-container reverse"
            style={{ backgroundColor: "#F3F5FF" }}
          >
            <div className="block-image-container">
            <video src="/service/Software.mp4 " className="block-image" muted playsInline  autoPlay loop />

              <div className="block-border"></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">Custom Software Solutions</h2>
              <p className="block-description">
              Our Custom Software Solutions are designed to meet your unique business needs. We build reliable, scalable, and user-friendly software to streamline your operations.
              </p>
              <button className="block-button"onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>
          <div className="block-container">
            <div className="block-image-container">
            <video src="/service/application.mp4" className="block-image" muted playsInline  autoPlay loop  />

              <div className="block-border"></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">Web & Mobile App Development</h2>
              <p className="block-description">
              We create easy-to-use web and mobile apps that work smoothly on all devices. Our apps help businesses grow and make work easier.
              </p>
              <button className="block-button"onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>

          <div
            className="block-container reverse"
            style={{ backgroundColor: "#F3F5FF",padding:"50px" }}
          >
            <div className="block-image-container">
              {/* <img
                src="/service/card1-ai.png" // Replace with the correct image path
                alt="AI & Machine Learning"
                
              /> */}
              <video src="/service/cloud.mp4" className="block-image" muted playsInline  autoPlay loop />
              <div className="block-border" ></div>
            </div>
            <div className="block-content">
              <h2 className="block-title">IT Consulting & Cloud Services</h2>
              <p className="block-description">
              We provide IT Consulting & Cloud Services to help businesses improve their technology and move to the cloud. Our solutions make your work faster, safer, and more efficient.
              </p>
              <button className="block-button"onClick={()=>{
                navigate("/contact")
              }}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
