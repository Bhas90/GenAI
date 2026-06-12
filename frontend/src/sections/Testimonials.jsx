import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "B.Tech Student",
      review:
        "The AI roadmap was crystal clear. I built my first AI Chatbot within 3 weeks."
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      review:
        "Agentic AI and RAG modules were amazing. Helped me switch to AI projects in my company."
    },
    {
      name: "Vamsi Krishna",
      role: "Job Seeker",
      review:
        "The projects and mentor support helped me gain confidence in AI interviews."
    },
    {
      name: "Sandeep Reddy",
      role: "Working Professional",
      review:
        "One of the best practical AI training programs. Highly recommended."
    },
    {
      name: "Anjali Verma",
      role: "M.Tech Student",
      review:
        "Real-world projects and live sessions made learning easy and engaging."
    },
    {
      name: "Karthik",
      role: "AI Enthusiast",
      review:
        "The Generative AI and MCP modules were worth every minute."
    }
  ];

  return (
    <section className="testimonials-section">

      <div className="container">

        <div className="section-heading">
          <h2>What Our Students Say</h2>
          <p>
            Thousands of students and professionals trust VPro Skills.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h4>{item.name}</h4>

              <span>{item.role}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;