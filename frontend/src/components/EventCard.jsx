import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ image, title, subtitle, route }) => {
  const navigate = useNavigate();

  return (
    <div className="event-card">

      <div className="event-image-wrapper">
        <img src={image} alt={title} className="event-image" />
      </div>

      <div className="event-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      {/* Arrow click only */}
      <div
        className="arrow"
        onClick={(e) => {
          e.stopPropagation();
          navigate(route);
        }}
      >
        ➜
      </div>


    </div>
  );
};

export default EventCard;
