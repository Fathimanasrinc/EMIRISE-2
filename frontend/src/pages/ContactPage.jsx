import React from "react";
import "./ContactPage.css";
import mapImage from "../assets/map.jpeg"; // your map image
import batmanImage from "../assets/contact.png"; // your batman image
import PopIn from "../components/PopIn"; // import PopIn

const ContactPage = ({ coordinators }) => {
  return (
    <div className="contact-page">
      {/* Contact Title with PopIn */}
      <PopIn delay={100}>
        <h2 className="contact-title">CONTACT</h2>
      </PopIn>

      {/* Coordinators List with PopIn */}
    

      {/* Contact Images with PopIn */}
      <div className="contact-content">
        <PopIn delay={300}>
          <img src={mapImage} alt="Map" className="map-image" />
        </PopIn>
        <PopIn delay={400}>
          <img src={batmanImage} alt="Batman" className="batman-image" />
        </PopIn>
      </div>
        <PopIn delay={200}>
        <div className="coordinators">
          <h4>STUDENT COORDINATORS:</h4>
          {coordinators.map((coordinator, index) => (
            <p key={index}>
              {coordinator.name}: {coordinator.phone}
            </p>
          ))}
        </div>
      </PopIn>
    </div>
  );
};

export default ContactPage;
