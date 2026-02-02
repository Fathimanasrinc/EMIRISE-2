import React from "react";
import PopIn from "../components/PopIn"; // adjust path if needed
import "../styles/Home.css";
import EMIRISE from "../assets/EMIRISE.png";
import Footersection from "../components/Footersection";
import AnimatedDivider from "../components/AnimatedDivider";
import Countdown from "../components/Countdown";
import Events from "../components/Events";
import About from "../components/About";

const Home = () => {
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
      <Footersection/>
      <Countdown/>
      <AnimatedDivider/>
      <Events/>
      <About/>

    </div>
  );
};

export default Home;
