import "../styles/BestManager.css";
import batman from "../assets/bestmanagerHD.png";
import batboss from "../assets/batbossHD.png";
import fee from "../assets/10000price.png";
import bat from "../assets/batHD.png";


const BestManager = () => {
  return (
    <section className="BestMan-hero">
      <div className="card">

        {/* LEFT CONTENT */}
        <div className="content">
          <img className="batboss" src={batboss} alt="batboss"/>

        <div className="about">
          <p className="date">
            📅 10 FEBRUARY 2025
          </p>

          <p className="desc">
            The Best Manager event assesses participants on their leadership abilities,
             decision-making skills, problem-solving approach, and strategic thinking
              through competitive rounds. Participants are challenged to think logically,
               manage situations effectively, and perform under pressure, with the most 
               confident and consistent performer earning the title of Best Manager.
          </p>

          <div className="register">
            <span className="register-text">REGISTER NOW</span>
          </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageBox">
          <img className="batman" src={batman} alt="Batman" />
          <img className="fee" src={fee} alt="Fee details" />

        </div>

      </div>
      <div className="rules">
        <h1 className="rules-heading">EVENTS RULES AND GUIDLINES</h1>
        <div className="bat-wrapper">
          <img className="bat" src={bat} alt="bat"/>
          </div>
        <div className="rules-card">
        <div className="rule1">Each participant/team must register with at least 2 members and can compete with a maximum of 3 members</div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        <div className="rule1"></div>
        
        </div>
      </div>

    </section>
  );
};

export default BestManager ;