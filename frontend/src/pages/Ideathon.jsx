import "../styles/Ideathon.css";
import batman from "../assets/ideathon hd2.png";
import Arkham from "../assets/ArkhamtoAlphaHD.png";
import fee from "../assets/ideapriceHD.png";
import bat from "../assets/batHD.png";


const Ideathon = () => {
  return (
    <section className="Ideathon-hero">
      <div className="ideacard">

        {/* LEFT CONTENT */}
        <div className="content">
          <img className="Arkham" src={Arkham} alt="arkham"/>

        <div className="about">
          <p className="date">
            📅 10 FEBRUARY 2025
          </p>

          <p className="desc">
            The Ideathon event challenges participants to 
            present innovative ideas and practical solutions
            to real-world problems through structured evaluation
            rounds. Participants are assessed on creativity,
            feasibility, problem understanding, and presentation
            skills, with the most impactful and well-structured 
            idea earning the title of Ideathon Winner.
          </p>

          <div className="register">
            <span className="register-text">Register</span>
          </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageBox">
          <img className="ideabatman" src={batman} alt="Batman" />
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

export default Ideathon;