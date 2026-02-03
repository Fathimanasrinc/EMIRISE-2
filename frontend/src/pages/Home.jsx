import React from "react";
import PopIn from "../components/PopIn"; // adjust path if needed
import "../styles/Home.css";
import EMIRISE from "../assets/EMIRISE 1.png";
import Footersection from "../components/Footersection";
import AnimatedDivider from "../components/AnimatedDivider";
import Countdown from "../components/Countdown";
import Events from "../components/Events";
import About from "../components/About";
import ContactPage from "./ContactPage";

const Home = () => {
   const coordinators = [
    { name: "Fida Shirin", phone: "6075304210" },
    { name: "Mehrin", phone: "3067453012" },
  ];
  return (
    <div className="home-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>CONTACT</li>
          <li>EVENTS</li>
        </ul>
      </nav>

      {/* Image with pop-in animation */}
      <PopIn delay={200}>
        <img
          src={EMIRISE}   // your image path
          alt="Home"
          className="home-image"
        />
      </PopIn>
      <Countdown/>
      <AnimatedDivider/>
      <About/>
      <Events/>
      <ContactPage coordinators={coordinators} />

    </div>
  );
};

export default Home;
