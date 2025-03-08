import React from "react";
import Header from "../header/header";
import "./home.css"; // Assuming you have some CSS for styling
import BlurText from "../hooks/BlurText";
import AnimatedContent from "../hooks/AnimatedContent";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="background">
          <img src="/home/background.png" alt="Background" />
        </div>
        <div className="Block1">
          <div className="content">
            <div className="details">
              <BlurText
                text="Empowering Businesses with"
                delay={150}
                animateBy="words"
                direction="top"
                tag="h1"
              />
              <BlurText
                text="Cutting-Edge IT Solutions"
                delay={150}
                animateBy="words"
                direction="top"
                className="highlight"
                tag="h1"
              />

              <BlurText
                text="We build custom software, apps, and IT solutions tailored to your unique business needs."
                delay={150}
                animateBy="words"
                direction="top"
                className=""
                tag="p"
              />
              {/* <p>
              We build custom software, apps, and IT solutions tailored to your
              unique business needs.
            </p> */}
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                delay={1000}
              >
                <button className="cta-button">Get Started</button>
              </AnimatedContent>
            </div>
            <div className="image-container">
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                delay={1400}
              >
                <img
                  src="/home/dataPerson.png"
                  alt="Data Person"
                  className="data-image"
                />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
