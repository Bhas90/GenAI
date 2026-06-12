import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import { trackWhatsApp } from "../utils/tracking";

const Hero = () => {
  return (
    <section className="hero-section" id="home">

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 LIVE DEMO SESSION • 10 JUNE 2026
          </span>

          <h1>
            Become an
            <span> AI Engineer </span>
            in 90 Days
          </h1>

          <p>
            Master Python, Machine Learning, Deep Learning,
            Generative AI, RAG, MCP, AI Agents and Real-World Projects.
          </p>

          <div className="hero-features">
            <span>✅ Live Classes</span>
            <span>✅ Real Projects</span>
            <span>✅ Placement Support</span>
            <span>✅ Certification</span>
          </div>

          <div className="hero-buttons">

            {/* Register Button */}
            <button
              className="primary-btn"
              onClick={() => trackWhatsApp("hero_register")}
            >
              🔥 REGISTER NOW
            </button>

            {/* Curriculum Button */}
            <button
              className="secondary-btn"
              onClick={() => trackWhatsApp("hero_curriculum")}
            >
              📚 VIEW CURRICULUM
            </button>

          </div>

        </div>

        <motion.div
          className="hero-image"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900"
            alt="Generative AI"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;