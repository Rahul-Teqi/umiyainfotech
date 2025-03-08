import React from "react";
import Header from "../header/header";
import "./home.css"; // Assuming you have some CSS for styling
import BlurText from "../hooks/BlurText";
import AnimatedContent from "../hooks/AnimatedContent";
import TrueFocus from "../hooks/TrueFocus";
import BlobCursor from "../hooks/BlobCursor";
import Footer from "../footer/footer";

const Home = () => {
  const services = [
    {
      title: "AI & Machine Learning Integration",
      description:
        "Smart AI-driven solutions to automate processes and improve decision-making.",
      icon: "/home/artificial-intelligence.png",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Advanced security measures to protect your data and digital assets.",
      icon: "/home/cyber-security (1).png",
    },
    {
      title: "Digital Marketing",
      description:
        "Elevate your brand with data-driven online marketing strategies.",
      icon: "/home/social-media.png",
    },
    {
      title: "Custom Software Solutions",
      description:
        "Tailor-made software to streamline and enhance business operations.",
      icon: "/home/system.png",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Build high-performance, user-friendly applications for all platforms.",
      icon: "/home/web-design.png",
    },
    {
      title: "IT Consulting & Cloud Services",
      description:
        "Expert guidance and scalable cloud solutions for business growth.",
      icon: "/home/cloud-server.png",
    },
  ];

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
        <div className="Block2">
          <div className="content">
            <h1
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-start",
              }}
            >
              <TrueFocus
                sentence="Innovative, Secure & Scalable&nbsp;Business&nbsp;Solutions"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={1}
                pauseBetweenAnimations={0.5}
              />
            </h1>
            <div
              style={{
                height: "4px",
                width: "100px",
                backgroundColor: "#90D3FE",
                borderRadius: "2px",
                marginBottom: "15px",
              }}
            ></div>
            <p>
              Our customized solutions cater to businesses of all sizes, built
              on secure and scalable technologies. Plus, our 24/7 customer
              support ensures you always have the assistance you need.
            </p>
          </div>
          <div>
            <img
              src="/home/solution.png"
              alt="Solutions"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </div>
        </div>
        <div className="Block3 services-container">
          <BlobCursor />
          <h2 className="services-title">Services We Offer</h2>
          <div className="temp"></div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">
                  {" "}
                  <img src={service.icon} height="50px" />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      <Footer />  
    </>
  );
};

export default Home;
