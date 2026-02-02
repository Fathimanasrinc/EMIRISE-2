import "./Bat.css";
import body from "../assets/image 18.png";
import leftWing from "../assets/image 20.png";
import rightWing from "../assets/image 21.png";

export default function Bat() {
  return (
    <div className="scene">
      <div className="bat">
        <img src={leftWing} className="wing left" alt="left wing" />
        <img src={body} className="body" alt="bat body" />
        <img src={rightWing} className="wing right" alt="right wing" />
      </div>
    </div>
  );
}
