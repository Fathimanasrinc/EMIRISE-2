import React from "react";
import PopIn from "../components/PopIn"; 
import "../styles/Home.css";
import EMIRISE from "../assets/EMIRISE 1.png";
import Footersection from "../components/Footersection";
import AnimatedDivider from "../components/AnimatedDivider";
import Countdown from "../components/Countdown";
import Events from "../components/Events";
import About from "../components/About";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const Home = () => {
  const coordinators = [
    { name: "Fida Shirin", phone: "8304912635" },
    { name: "Mehrin", phone: "9880021044" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => scrollToSection("home")}>HOME</li>
          <li onClick={() => scrollToSection("contact")}>CONTACT</li>
          <li onClick={() => scrollToSection("events")}>EVENTS</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="home">
        <PopIn delay={200}>
          <img src={EMIRISE} alt="Home" className="home-image" />
        </PopIn>
      </div>

      {/* Other Sections */}
      <Countdown/>
      <AnimatedDivider/>
      <div id="about">
        <About/>
      </div>
      <div id="events">
        <Events/>
      </div>
      <div id="contact">
        <ContactPage coordinators={coordinators} />
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
