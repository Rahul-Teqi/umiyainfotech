import React from "react";
import "./about.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import RotatingText from "../hooks/RotatingText";
import DecryptedText from "../hooks/DecryptedText";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="block1">
          <div class="responsive-container-block bigContainer">
            <div class="responsive-container-block Container bottomContainer">
              <div class="ultimateImg">
                <img
                  class="mainImg"
                  src="/about/background.jpg"
                />
                <div class="purpleBox">
                  <p class="purpleText">
                  <DecryptedText

text="We provide both cutting-edge IT solutions and result-driven digital marketing to help businesses grow online."
speed={300}
animateOn="view"
maxIterations={15}
revealDirection="start"
/> 
                                    </p>
                 
                </div>
              </div>
              <div class="allText bottomText">
                <p class="text-blk headingText">About Us</p>
                <p class="text-blk subHeadingText">
                <RotatingText
  texts={['Innovate', 'Build', 'Succeed']}
  mainClassName=" bg-cyan-300 text-black overflow-hidden py-0 sm:py-1 md:py-2 justify-start rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
<DecryptedText

  text="with Umiya InfoTech"
  speed={300}
  animateOn="view"
  maxIterations={15}
  revealDirection="start"
/>   </p>
                <p class="text-blk description">
                <DecryptedText

text="Our mission is to develop high-quality, innovative software solutions that make a difference. Whether it's web development, mobile apps, or enterprise systems, we ensure seamless digital transformation for your business."
speed={300}
animateOn="view"
maxIterations={15}
revealDirection="start"
/> 
                </p>
                <a class="explore">View Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
