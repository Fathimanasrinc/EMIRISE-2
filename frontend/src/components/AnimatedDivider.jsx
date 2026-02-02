import React, { useRef, useEffect, useState } from "react";
import "../styles/AnimatedDivider.css";

const AnimatedDivider = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="divider-container">
      <div className={`divider-line ${visible ? "animate" : ""}`}></div>
    </div>
  );
};

export default AnimatedDivider;
