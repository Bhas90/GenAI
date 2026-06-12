import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {

  const faqs = [
    {
      question: "Who can join this AI Course?",
      answer:
        "B.Tech, M.Tech, MCA, Degree students, Working Professionals and Job Seekers can join."
    },
    {
      question: "Do I need coding knowledge?",
      answer:
        "No. We start from basics and gradually move into advanced AI concepts."
    },
    {
      question: "Will I learn Generative AI?",
      answer:
        "Yes. ChatGPT, Gemini, Claude, AI Agents, MCP, RAG and GenAI applications are covered."
    },
    {
      question: "Is this course live?",
      answer:
        "Yes. Sessions are conducted live with trainer interaction and doubt clarification."
    },
    {
      question: "Will recordings be provided?",
      answer:
        "Yes. Lifetime access to session recordings is included."
    },
    {
      question: "Do you provide placement support?",
      answer:
        "Yes. Resume building, interview preparation and job assistance are included."
    },
    {
      question: "How many projects will I build?",
      answer:
        "You will work on multiple industry-oriented AI projects."
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes. Industry-recognized certification will be provided after course completion."
    },
    {
      question: "Is this suitable for working professionals?",
      answer:
        "Absolutely. Classes are designed to suit working professionals."
    },
    {
      question: "Can I attend a free demo?",
      answer:
        "Yes. Register for our FREE LIVE DEMO SESSION."
    }
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="faq-section" id="faq">

      <div className="container">

        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know before joining.
          </p>
        </div>

        <div className="faq-wrapper">

          {faqs.map((faq, index) => (

            <div className="faq-item" key={index}>

              <div
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <h4>{faq.question}</h4>

                <span>
                  {active === index ? "−" : "+"}
                </span>
              </div>

              {active === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;