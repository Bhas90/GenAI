import React, { useEffect, useState } from "react";
import "../styles/LeadCapture.css";

const LeadCapture = () => {
  const targetDate = new Date("June 10, 2026 21:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    category: "B.Tech Student",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor(
            (distance / (1000 * 60)) % 60
          ),
          seconds: Math.floor(
            (distance / 1000) % 60
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = () => {
    if (!formData.name.trim()) {
      alert("Please enter your Full Name");
      return;
    }

    if (!formData.mobile.trim()) {
      alert("Please enter your Mobile Number");
      return;
    }

    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_form_submit",
      source: "genai_demo",
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      category: formData.category,
    });

    // Google Analytics
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        source: "genai_demo",
      });
    }

    // Meta Pixel
    if (window.fbq) {
      window.fbq("track", "Lead");
    }

    const message = `Hi VPro Skills,

I would like to register for the FREE Generative AI & Agentic AI Demo Session.

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Category: ${formData.category}

Please share complete details about the training program.`;

    window.open(
      `https://wa.me/919010001847?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      className="lead-section"
      id="register"
    >
      <div className="container lead-container">

        {/* LEFT SIDE */}

        <div className="countdown-box">

          <span className="live-badge">
            🔴 LIVE DEMO • LIMITED SEATS
          </span>

          <h2>
            FREE GENERATIVE AI DEMO SESSION
          </h2>

          <div className="countdown">

            <div className="time-box">
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>

            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>

            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>

            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>

          </div>

          <div className="seats-left">
            ⚡ Only 25 Seats Available
          </div>


        </div>

        {/* RIGHT SIDE */}

        <div className="lead-form">

          <h3>Reserve Your Free Seat</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option>B.Tech Student</option>
            <option>M.Tech Student</option>
            <option>Working Professional</option>
            <option>Job Seeker</option>
          </select>

          <button
            className="register-btn"
            onClick={handleRegister}
          >
            🚀 REGISTER NOW
          </button>

        </div>

      </div>
    </section>
  );
};

export default LeadCapture;