import React, { useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import PopIn from "./PopIn"; // 👈 add this
import "./event.css";


import ideathonImg from "../assets/ideathonhd.png";
import workshopImg from "../assets/bestmanagerhd.png";
import panelImg from "../assets/escaperoobatmanhd.png";

const eventsData = [
  {
    id: 1,
    title: "BIZ VANGUARD",
    subtitle: "Ideathon",
    image: ideathonImg,
  },
  {
    id: 2,
    title: "BIZ VANGUARD",
    subtitle: "Best Manager",
    image: workshopImg,
  },
  {
    id: 3,
    title: "BIZ VANGUARD",
    subtitle: "Escape Room",
    image: panelImg,
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {/* Heading */}
      <PopIn delay={0}>
        <h2 className="events-heading">Our Events</h2>
      </PopIn>

      {/* Events */}
      <div className="events-container">
        {eventsData.map((event, index) => (
          <PopIn key={event.id} delay={index * 150}>
            <EventCard
              image={event.image}
              title={event.title}
              subtitle={event.subtitle}
              onClick={() => setSelectedEvent(event)}
            />
          </PopIn>
        ))}
      </div>

      
    </>
  );
};

export default Events;


