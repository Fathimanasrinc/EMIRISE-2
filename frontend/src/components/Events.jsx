import React, { useState } from "react";
import EventCard from "./EventCard";
import PopIn from "./PopIn"; // 👈 add this
import "./event.css";

import ideathonImg from "../assets/ideathonhdhd.png";
import workshopImg from "../assets/bestmanagerhd.png";
import panelImg from "../assets/escaperoobatmanhd.png";

const eventsData = [
  {
    id: 1,
    title: "BIZ VANGUARD",
    subtitle: "Ideathon",
    image: ideathonImg,
    route: "/biz-vanguard",
  },
  {
    id: 2,
    title: "STARTUP STORM",
    subtitle: "Workshop",
    image: workshopImg,
    route: "/best-manager",
  },
  {
    id: 3,
    title: "FOUNDERS TALK",
    subtitle: "Panel Discussion",
    image: panelImg,
    route: "/escape-room",
  },
];

const Events = () => {

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
              route={event.route}
            />
          </PopIn>
        ))}
      </div>
    </>
  );
};

export default Events;
