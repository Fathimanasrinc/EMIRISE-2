import React, { useState } from "react";
import EventCard from "./EventCard";
import PopIn from "./PopIn"; // 👈 add this
import "./event.css";
import EventsData from "./EventsData";



const Events = () => {
  const [paused, setPaused] = useState(false);

  const handleCardClick = () => {
    setPaused(true); // stop animation
  };


  return (
    <>
      {/* Heading */}
      <PopIn delay={0}>
        <h2 className="events-heading">Our Events</h2>
      </PopIn>

      {/* Events */}
      <div className="events-slider">
        <div className={`events-track ${paused ? "paused" : ""}`}>
          {[...EventsData, ...EventsData].map((event, index) => (
            <div key={index} onClick={handleCardClick}>
              <EventCard
               event={event} 
              />
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Events;
