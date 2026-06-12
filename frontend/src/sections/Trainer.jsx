import React from "react";
import "../styles/Trainer.css";
import { trackWhatsApp } from "../utils/tracking";
import trainerImage from "../assets/images/trainer.jpeg";

const Trainer = () => {
  return (
    <section className="trainer-section" id="trainer">

      <div className="container trainer-container">

        <div className="trainer-image">

          <img
            src={trainerImage}
            alt="Sambasiva Rao - AI Trainer"
          />

        </div>

        <div className="trainer-content">

          <span className="trainer-tag">
            👨‍🏫 Meet Your Mentor
          </span>

          <h2>
            Learn From Industry Experts
          </h2>

          <h3>
            Sambasiva Rao
          </h3>

          <p className="trainer-role">
            Software Architect • AI Educator • Technology Mentor
          </p>

          <p>
            With 17+ years of experience in Software Development,
            Cloud Technologies, Artificial Intelligence and Enterprise
            Solutions, Sambasiva Rao has trained thousands of students
            and professionals across India.
          </p>

          <div className="trainer-stats">

            <div>
              <h4>17+</h4>
              <span>Years Experience</span>
            </div>

            <div>
              <h4>5000+</h4>
              <span>Students Trained</span>
            </div>

            <div>
              <h4>100+</h4>
              <span>Projects Guided</span>
            </div>

            <div>
              <h4>95%</h4>
              <span>Success Rate</span>
            </div>

          </div>

          <a
            href="https://wa.me/919010001847?text=Hi%20VPro%20Skills,%20I%20would%20like%20to%20speak%20with%20the%20trainer."
            target="_blank"
            rel="noopener noreferrer"
            className="trainer-btn"
            onClick={() =>
              trackWhatsApp(
                "trainer_connect_click",
                "Trainer Section"
              )
            }
          >
            📞 Talk To Trainer
          </a>

        </div>

      </div>

    </section>
  );
};

export default Trainer;