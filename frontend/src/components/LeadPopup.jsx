import React, { useEffect, useState } from "react";
import "../styles/LeadPopup.css";

const LeadPopup = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    const handleExitIntent = (e) => {

      if (e.clientY <= 0) {
        setShowPopup(true);
      }

    };

    document.addEventListener(
      "mouseleave",
      handleExitIntent
    );

    return () =>
      document.removeEventListener(
        "mouseleave",
        handleExitIntent
      );

  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const registerNow = () => {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "popup_register_click",
      source: "lead_popup",
    });

    if (window.gtag) {
      window.gtag(
        "event",
        "popup_register_click"
      );
    }

    if (window.fbq) {
      window.fbq("track", "Lead");
    }

    window.open(
      "https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20join%20the%20FREE%20AI%20Demo%20Session.",
      "_blank"
    );

    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">

      <div className="popup-box">

        <button
          className="popup-close"
          onClick={closePopup}
        >
          ×
        </button>

        <div className="popup-badge">
          🚀 FREE LIVE DEMO
        </div>

        <h2>
          Generative AI & Agentic AI
        </h2>

        <p>
          Learn Python, Gen AI, RAG,
          MCP and AI Agents from Industry Experts.
        </p>

        <ul>
          <li>✅ Live Online Training</li>
          <li>✅ Real Projects</li>
          <li>✅ Placement Support</li>
          <li>✅ Certificate</li>
        </ul>

        <button
          className="popup-register-btn"
          onClick={registerNow}
        >
          🚀 Reserve My Seat
        </button>

      </div>

    </div>
  );
};

export default LeadPopup;