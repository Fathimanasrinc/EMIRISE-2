import "../styles/EscapeRoom.css";
import batman from "../assets/escapebatmanHD.png";
import gotham from "../assets/EscapeGothamHD.png";
import fee from "../assets/10000price.png";
import bat from "../assets/batHD.png";
import leftWing from "../assets/image 18.png";
import batbody from "../assets/image 20.png";
import rightWing from "../assets/image 21.png";

const EscapeRoom = () => {
  return (
    <section className="EscapeRoom-hero">
      <div className="escapecard">

        {/* LEFT CONTENT */}
        <div className="content">
          <img className="gotham" src={gotham} alt="gotham" />

          <div className="about">
            <p className="date">
              📅 10 FEBRUARY 2025
            </p>

            <p className="desc">
              The Escape Room event challenges participants to solve puzzles,
              crack clues, and think critically under time pressure to escape
              the room successfully. Participants are tested on logical reasoning,
              teamwork, observation skills, and quick decision-making, with the
              fastest and most efficient team emerging as the Escape Room Champions.
            </p>

            <div className="register">
              <span className="register-tnext">Register</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="imageBox">
          <img className="escapebatman" src={batman} alt="Batman" />
          <img className="fee" src={fee} alt="Fee details" />

        </div>

      </div>
      <div className="rules">
        <h1 className="rules-heading">EVENTS RULES AND GUIDLINES</h1>
       

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

export default EscapeRoom;