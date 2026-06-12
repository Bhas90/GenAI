import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    category: "B.Tech Student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {

    if (!formData.name || !formData.mobile) {
      alert("Please fill required fields");
      return;
    }

    // GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_form_submit",
      form_name: "final_contact_form",
    });

    // GA4
    if(window.gtag){
      window.gtag("event","generate_lead");
    }

    // Meta Pixel
    if(window.fbq){
      window.fbq("track","Lead");
    }

    const message =
      `Hi VPro Skills,%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Mobile: ${formData.mobile}%0A` +
      `Email: ${formData.email}%0A` +
      `Category: ${formData.category}%0A%0A` +
      `I want details about Generative AI Course.`;

    window.open(
      `https://wa.me/919010001847?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section" id="contact">

      <div className="container">

        <div className="contact-content">

          <div className="contact-left">

            <span className="contact-badge">
              🚀 Limited Seats Available
            </span>

            <h2>
              Ready To Start Your
              <span> AI Career ?</span>
            </h2>

            <p>
              Join India's most practical AI Program and learn
              Generative AI, Agentic AI, MCP, RAG and AI Agents.
            </p>

            <div className="contact-points">
              <span>✅ Live Training</span>
              <span>✅ Real Projects</span>
              <span>✅ Placement Support</span>
              <span>✅ Certification</span>
            </div>

          </div>

          <div className="contact-form">

            <h3>Book Your FREE Demo</h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <select
              name="category"
              onChange={handleChange}
            >
              <option>B.Tech Student</option>
              <option>M.Tech Student</option>
              <option>Working Professional</option>
              <option>Job Seeker</option>
            </select>

            <button
              onClick={handleSubmit}
            >
              🚀 BOOK FREE DEMO
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;