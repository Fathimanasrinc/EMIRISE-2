import "../styles/BizVanguard.css";
import batman from "../assets/batbizHd.png";
import bizvanguard from "../assets/bizvanguardHd.png";
import fee from "../assets/priceHd.png";
import bat from "../assets/batHD.png";
import Bat from "../components/Bat";


const BizVanguard = () => {
  return (
    <section className="BizVanguard-hero">
      <div className="cardbiz">

        {/* LEFT CONTENT */}
        <div className="content">
          <img className="bizvanguard" src={bizvanguard} alt="bizvanguard"/>

        <div className="about">
          <p className="date">
            📅 10 FEBRUARY 2025
          </p>

          <p className="desc">
            The Biz Quiz event evaluates participants on their
            knowledge of business concepts, current affairs,
            entrepreneurship, and analytical thinking through
            multiple challenging quiz rounds. The individual or
            team that demonstrates accuracy, speed, strategic
            thinking, and consistency across all rounds earns
            the title of Biz Quiz Champion.
          </p>

          <div className="register">
            <span className="register-text">Register</span>
          </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageBox">
          <img className="bizbatman" src={batman} alt="Batman" />
          <img className="fee" src={fee} alt="Fee details" />

        </div>

      </div>
      <div className="rules">
        <h1 className="rules-heading">EVENTS RULES AND GUIDLINES</h1>
         <div className="bat-wrapper">
           <Bat/>
         </div>
        <div className="rules-card">
        <div className="rule1">open to all undergraduate and postgraduate students with a valid college ID</div>
        <div className="rule1">Teams with members from different colleges are permitted </div>
        <div className="rule1">Each team shall consist of a maximum of two members </div>
        <div className="rule1">multiple teams from the same college are allowed </div>
        <div className="rule1">participants must arrive 15 minutes before the event start time</div>
        <div className="rule1">electronic gadgets are strictly prohibited during the quiz</div>
        <div className="rule1">The quiz masters decision will be final and binding</div>
        <div className="rule1">A time limit will be imposed for each question in specific rounds</div>
        <div className="rule1">Teams found violating any rules will be disqualified immediately</div>
       
        </div>
      </div>

    </section>
  );
};

export default BizVanguard;