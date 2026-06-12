// src/sections/Countdown.jsx

import React, { useEffect, useState } from "react";
import "../styles/Countdown.css";
import { trackWhatsApp } from "../utils/tracking";

const Countdown = () => {
  const targetDate = new Date("June 10, 2026 21:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">

      <div className="container">

        <div className="countdown-top">

          <span className="live-tag">
            🔴 LIVE ON ZOOM
          </span>

          <h2>
            FREE GENERATIVE AI & AGENTIC AI DEMO
          </h2>

          <p>
            Learn Python → AI → RAG → MCP → Agents
            from Industry Experts
          </p>

        </div>

        <div className="timer-grid">

          <div className="timer-card">
            <h3>{timeLeft.days}</h3>
            <p>Days</p>
          </div>

          <div className="timer-card">
            <h3>{timeLeft.hours}</h3>
            <p>Hours</p>
          </div>

          <div className="timer-card">
            <h3>{timeLeft.minutes}</h3>
            <p>Minutes</p>
          </div>

          <div className="timer-card">
            <h3>{timeLeft.seconds}</h3>
            <p>Seconds</p>
          </div>

        </div>

        <div className="event-details">

          <div>
            📅 10 June 2026
          </div>

          <div>
            ⏰ 09:00 PM IST
          </div>

          <div>
            💻 Online via Zoom
          </div>

        </div>

        <div className="seat-alert">
          ⚡ Only 25 Demo Seats Available
        </div>

        <a
          href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20join%20the%20FREE%20Generative%20AI%20Demo."
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-btn"
          onClick={() =>
            trackWhatsApp(
              "countdown_register_click",
              "Countdown Section"
            )
          }
        >
          🚀 Reserve My Free Seat
        </a>

      </div>

    </section>
  );
};

export default Countdown;