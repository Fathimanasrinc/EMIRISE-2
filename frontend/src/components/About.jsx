import "../styles/About.css";
import batman from "../assets/batmanabout.png";
import PopIn from "./PopIn";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Image */}
        <PopIn delay={0}>
          <div className="about-image">
            <img src={batman} alt="Batman Theme" />
          </div>
        </PopIn>

        {/* Right Content */}
        <div className="about-content">
          <PopIn delay={100}>
            <h2>
              ABOUT THE <span>EMIRISE</span>
            </h2>
          </PopIn>

          <PopIn delay={200}>
            <p className="tagline">innovating the future.</p>
          </PopIn>

          <PopIn delay={300}>
            <div className="divider"></div>
          </PopIn>

          <PopIn delay={400}>
            <h4>EXPLORING THE POWER OF KNOWLEDGE AND ENTREPRENEURSHIP</h4>
          </PopIn>

          <PopIn delay={500}>
            <p className="description">
              The Entrepreneurs' Summit & Idea Presentation Competition at EMEA
              College is designed to inspire creativity and nurture
              entrepreneurial talent. By connecting thought leaders,
              innovators, and aspiring entrepreneurs, the summit fosters
              collaboration, innovation, and problem-solving. The event provides
              an excellent opportunity for students to present their ideas,
              receive feedback from industry experts, and gain insights into
              entrepreneurship.
            </p>
          </PopIn>
        </div>

      </div>
    </section>
  );
};

export default About;
