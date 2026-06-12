import React from "react";
import "../styles/WhyAI.css";

const WhyAI = () => {
  return (
    <section className="whyai-section">

      <div className="container">

        <div className="section-heading">
          <h2>Why Learn AI in 2026?</h2>
          <p>
            AI is no longer the future. It is today's highest-paying skill.
          </p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>$1.8 Trillion</h3>
            <p>Expected AI Market by 2030</p>
          </div>

          <div className="stat-card">
            <h3>95%</h3>
            <p>Companies Adopting AI Solutions</p>
          </div>

          <div className="stat-card">
            <h3>₹8-40 LPA</h3>
            <p>Average AI Engineer Salary</p>
          </div>

          <div className="stat-card">
            <h3>100M+</h3>
            <p>New AI Jobs Expected Globally</p>
          </div>

        </div>

        <div className="career-grid">

          <div className="career-card">
            <h4>🎓 B.Tech Students</h4>
            <ul>
              <li>Build Industry Projects</li>
              <li>Crack Internships</li>
              <li>Improve Placement Chances</li>
              <li>Stand Out From Peers</li>
            </ul>
          </div>

          <div className="career-card">
            <h4>💼 Working Professionals</h4>
            <ul>
              <li>Switch to AI Careers</li>
              <li>Get Higher Packages</li>
              <li>Automate Daily Work</li>
              <li>Future-Proof Your Career</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyAI;