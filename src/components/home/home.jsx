import React from "react";
import Header from "../header/header";
import "./home.css"; // Assuming you have some CSS for styling
import BlurText from "../hooks/BlurText";
import AnimatedContent from "../hooks/AnimatedContent";
import TrueFocus from "../hooks/TrueFocus";
import BlobCursor from "../hooks/BlobCursor";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import CircularGallery from "../hooks/CircularGallery";

const GradientText = ({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "/home/money-bag 1.webp",
      title: "Experienced & Trusted Team",
      description:
        "With a team of skilled developers and IT professionals, we bring years of experience to deliver high-quality solutions that exceed expectations.",
    },
    {
      icon: "/home/money-bag 2.webp",
      title: "Tailored to Your Business Needs",
      description:
        "Every business is unique, and so are our solutions. We craft customized IT and software services that align perfectly with your business goals.",
    },
    {
      icon: "/home/money-bag 3.webp",
      title: "Affordable & High-Quality Services",
      description:
        "We believe in providing cost-effective solutions without compromising on quality. Get premium IT services at budget-friendly prices.",
    },
    {
      icon: "/home/money-bag 4.webp",
      title: "Innovative & Modern Solutions",
      description:
        "At Umiya InfoTech, we leverage the latest technologies to develop cutting-edge software and IT solutions that help businesses thrive in a competitive digital landscape.",
    },
    {
      icon: "/home/money-bag 5.webp",
      title: "Reliable & Scalable Technology",
      description:
        "From startups to enterprises, our solutions are built for reliability, security, and scalability, ensuring seamless growth as your business expands.",
    },
    {
      icon: "/home/money-bag 6.webp",
      title: "Ongoing Support & Maintenance",
      description:
        "Our job doesn’t end at deployment. We offer continuous support and maintenance to ensure your business operations run smoothly.",
    },
  ];

  const services = [
    {
      title: "AI & Machine Learning Integration",
      description:
        "Smart AI-driven solutions to automate processes and improve decision-making.",
      icon: "/home/artificial-intelligence.webp",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Advanced security measures to protect your data and digital assets.",
      icon: "/home/cyber-security (1).webp",
    },
    {
      title: "Digital Marketing",
      description:
        "Elevate your brand with data-driven online marketing strategies.",
      icon: "/home/social-media.webp",
    },
    {
      title: "Custom Software Solutions",
      description:
        "Tailor-made software to streamline and enhance business operations.",
      icon: "/home/system.webp",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Build high-performance, user-friendly applications for all platforms.",
      icon: "/home/web-design.webp",
    },
    {
      title: "IT Consulting & Cloud Services",
      description:
        "Expert guidance and scalable cloud solutions for business growth.",
      icon: "/home/cloud-server.webp",
    },
  ];

  return (
    <>
      <Header />
      <div className="home">
        <div className="background">
          <img src="/home/background.webp" alt="Background" />
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
                <button
                  className="cta-button"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Get Started
                </button>
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
                  src="/home/dataPerson.webp"
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
              src="/home/solution.webp"
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
      <div className="why-choose-us">
        <h2>Why Choose Umiya InfoTech?</h2>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <img className="icon" src={feature.icon} alt={feature.icon} />
              <div className="content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio">
        <h3>Our Portfolio</h3>
        <p>
          Check out some of the amazing websites & Application we’ve already
          built for businesses just like yours
        </p>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={10} textColor="#000000" borderRadius={0.05} />
        </div>
      </div>
      <div className="getStarted">
        <h2>Get Started Today</h2>
        <h4>Ready to build your dream Application? It’s easy!</h4>
        <div style={{width:"fit-content"}} onClick={() => {
            navigate("/contact");
          }}>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={true}
          className="custom-class"
          >
          Contact Us
        </GradientText>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
