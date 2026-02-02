import React, { useState } from "react";
import EventCard from "./EventCard";
import PopIn from "./PopIn"; // 👈 add this
import "./event.css";

import ideathonImg from "../assets/ideathonhd1.png";
import workshopImg from "../assets/bestmanagerhd.png";
import panelImg from "../assets/escaperoobatmanhd.png";
import bizvanguard from "../assets/batbizHd.png";

const eventsData = [
  {
    id: 1,
    title: "BIZ VANGUARD",
    subtitle: "Ideathon",
    image: ideathonImg,
    route: "/ideathon",
  },
  {
    id: 2,
    title: "STARTUP STORM",
    subtitle: "Best Manager",
    image: workshopImg,
    route: "/best-manager",
  },
  {
    id: 3,
    title: "FOUNDERS TALK",
    subtitle: "Escape Room",
    image: panelImg,
    route: "/escape-room",
  },
  {
    id: 4,
    title: "FOUNDERS TALK",
    subtitle: "Escape Room",
    image: bizvanguard,
    route: "/escape-room",
  },
];

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
          {[...eventsData, ...eventsData].map((event, index) => (
            <div key={index} onClick={handleCardClick}>
              <EventCard
                image={event.image}
                title={event.title}
                subtitle={event.subtitle}
                route={event.route}
              />
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default Events;
