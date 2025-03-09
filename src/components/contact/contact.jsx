import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './contact.css';
import Squares from '../hooks/Squares';

const Contact = () => {
    return (
        <>
        <Header />
        <div className="contact">
        <div class="FirstDiv">
          <div class="content">
            <h2>Contact&nbsp;Us</h2>
            <h2>Contact&nbsp;Us</h2>
          </div>
          <p class="ContactMeDesc">
            Reach out and let's start a conversation—I'm here to connect
          </p>
          <div class="CallBtnCon block">
            <a href="tel:+91 6365022089">
              <button class="button-52">CALL</button>
            </a>
          </div>
        </div>

        <div class="SecoundDiv">    
            <div className='squares-container'>

        <Squares 
speed={0.5} 
squareSize={30}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#F3F5FF'
hoverFillColor='#222'
/>  </div>        <div class="GetInTouchCon">
    
            <div class="ColorBox"></div>
            <div class="GetInTouchElementCon">
              <h3>
                Get in <span>Touch</span>
              </h3>
              <p>
                We invite you to connect. Your messages are important, whether
                it's about collaborations, questions, or just sharing ideas
              </p>
            </div>
          </div>
          <div class="ContactElementCon">
            <h1>Contact</h1>
            <h4>Rpteqi@gmail.com</h4>
            <h4>+91 6365022089</h4>
            <div class="ContactIconCon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_rahul________patel_/"
              >
                <img src="/footer/instagram.png" width="30px" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Rahul-Teqi"
              >
                <img src="/footer/linkedin.png" width="30px" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="">
                <img src="/footer/gmail (1).png" width="30px" />
              </a>
              <a href="tel:+91 6365022089">
                <img src="/footer/call.png" width="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
        <Footer />
        </>
    );
};

export default Contact;