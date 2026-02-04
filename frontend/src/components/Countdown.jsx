import React, { useState, useEffect, useRef } from "react";
import "../styles/Countdown.css";

const TimeBox = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`time-box ${visible ? "pop-in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span>{value ?? "00"}</span>
      <p>{label}</p>
    </div>
  );
};

const Countdown = () => {
  const eventDate = new Date("February 9, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <TimeBox value={timeLeft.days} label="DAYS" delay={0} />
      <TimeBox value={timeLeft.hours} label="HOURS" delay={100} />
      <TimeBox value={timeLeft.minutes} label="MINUTES" delay={200} />
      <TimeBox value={timeLeft.seconds} label="SECONDS" delay={300} />
    </div>
  );
};

export default Countdown;
