import React from "react";
import "../styles/Home.css";

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

      {/* Hero Section */}
      <div className="hero">
        <h1 className="title">EMIRISE 2.0</h1>

        <div className="date-box">
          <div className="dates">
            <span>9</span>
            <span>10</span>
          </div>
          <p>FEBRUARY 2025 · SUNDAY, MONDAY</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
