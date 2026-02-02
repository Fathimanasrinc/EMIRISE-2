import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title, subtitle, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
  <div className="event-image-wrapper">
    <img src={image} alt={title} className="event-image" />
  </div>

  <div className="event-content">
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>

  <div className="arrow">➜</div>
</div>

  );
};

export default EventCard;
