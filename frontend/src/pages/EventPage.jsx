import React from "react";
import "./EventPage.css";

const EventPage = ({
  titleImage,
  heroBg,
  characterImg,
  priceTag,
  link,
  id,
  date,
  description,
  rules,
  ctaText = "Register Now",
}) => {
  return (
    <div className="event-page">

      {/* HERO SECTION */}
      <section
  className="hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* PRICE TAG – TOP RIGHT */}
  {priceTag && (
    <img
      src={priceTag}
      alt="Prize Amount"
      className="price-tag"
    />
  )}

  <div className="hero-content">
    <div className="hero-left">
      <img src={titleImage} alt="Event Title" className="title-img" />
      <div className="date">📅 {date}</div>
      <p className="description">{description}</p>
      <button  className="cta-btn" onClick={() => window.location.href = link}>{ctaText}</button>
    </div>

    {characterImg && (
      <div className={ `${id} hero-right` }
    >
        <img src={characterImg} alt="Character" />
      </div>
    )}
  </div>
</section>


      {/* PRICE TAG BETWEEN SECTIONS */}
    
       
      <section className="rules-section">
        <h2 className="rules-heading">Event Rules & Guidelines</h2>
        <ul className="rules-list">
          {rules.map((rule, index) => (
            
            <li key={index} className="rule-item">
              {rule}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default EventPage;
