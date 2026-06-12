import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";
import "../styles/StickyHeader.css";
import logo from "../assets/images/logo.png";
import { trackWhatsApp } from "../utils/tracking";

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const trackCall = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "call_click",
      source: "header_call",
    });

    if (window.gtag) {
      window.gtag("event", "call_click", {
        source: "header_call",
      });
    }
  };

  return (
    <>
      {/* Top Alert Bar */}
      <div className="top-alert">
        <div className="scroll-text">
          FREE LIVE DEMO SESSION • GENERATIVE AI • AGENTIC AI • MCP • RAG • AGENTS • 10TH JUNE 2026 • LIMITED SEATS •

          <a
            href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20join%20the%20FREE%20AI%20Demo."
            target="_blank"
            rel="noopener noreferrer"
            className="alert-register-btn"
            onClick={() => trackWhatsApp("top_alert")}
          >
            🚀 JOIN FREE DEMO
          </a>

          • FREE LIVE DEMO SESSION • GENERATIVE AI • AGENTIC AI • MCP • RAG • AGENTS • LIMITED SEATS •
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="VPro Skills" />
          </div>

          {/* Navigation */}
          <nav className={menuOpen ? "nav active" : "nav"}>
            <a href="#home">Home</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#projects">Projects</a>
            <a href="#trainer">Trainer</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Actions */}
          <div className="header-actions">

  {/* Call */}
  <a
    href="tel:9010001847"
    className="call-btn"
    onClick={trackCall}
    aria-label="Call VPro Skills"
  >
    <FaPhone />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20am%20interested%20in%20the%20Generative%20AI%20Course."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
    onClick={() => trackWhatsApp("header_whatsapp")}
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp />
  </a>

  {/* Register */}
  <a
    href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20want%20to%20register%20for%20the%20FREE%20AI%20Demo."
    target="_blank"
    rel="noopener noreferrer"
    className="demo-btn"
    onClick={() => trackWhatsApp("header_register")}
  >
    🚀 Register Now
  </a>

  {/* Mobile Menu */}
  <div
    className="mobile-menu"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>

</div>
        </div>
      </header>
    </>
  );
};

export default StickyHeader;