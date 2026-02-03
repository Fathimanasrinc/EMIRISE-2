import React from "react";
import { useLocation } from "react-router-dom";
import EventPage from "./EventPage";

const BatBoss = () => {
  const location = useLocation();
  const { event } = location.state || {};
  console.log("hiehe",event)

  if (!event) {
    return <p>Event data not found</p>;
  }

  return (
    <EventPage
      titleImage={event.titleImage}
      heroBg={event.heroBg}
      characterImg={event.characterImg}
      priceTag={event.priceTag}
      link={event.link}
      id={event.id}
      date={event.date}
      description={event.description}
      rules={event.rules}
    />
  );
};

export default BatBoss;
