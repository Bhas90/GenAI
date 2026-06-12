import React from "react";
import "../styles/Curriculum.css";

const Curriculum = () => {

  const modules = [
    {
      title: "Module 1",
      topic: "Python Fundamentals",
      icon: "🐍",
      lessons: [
        "Variables & Data Types",
        "Functions",
        "Loops",
        "OOP Concepts",
        "File Handling"
      ]
    },
    {
      title: "Module 2",
      topic: "Machine Learning",
      icon: "🧠",
      lessons: [
        "Regression",
        "Classification",
        "Clustering",
        "Model Evaluation",
        "Scikit Learn"
      ]
    },
    {
      title: "Module 3",
      topic: "Deep Learning",
      icon: "⚡",
      lessons: [
        "Neural Networks",
        "TensorFlow",
        "Keras",
        "CNN",
        "Transfer Learning"
      ]
    },
    {
      title: "Module 4",
      topic: "Generative AI",
      icon: "🤖",
      lessons: [
        "LLMs",
        "Prompt Engineering",
        "ChatGPT APIs",
        "LangChain",
        "Fine Tuning"
      ]
    },
    {
      title: "Module 5",
      topic: "Agentic AI",
      icon: "🚀",
      lessons: [
        "AI Agents",
        "CrewAI",
        "AutoGen",
        "Task Automation",
        "Multi-Agent Systems"
      ]
    },
    {
      title: "Module 6",
      topic: "RAG + MCP",
      icon: "📚",
      lessons: [
        "Vector Databases",
        "Pinecone",
        "Retrieval Systems",
        "MCP",
        "Enterprise AI"
      ]
    }
  ];

  return (
    <section className="curriculum-section" id="curriculum">

      <div className="container">

        <div className="section-heading">
          <h2>Complete AI Engineer Roadmap</h2>
          <p>
            Everything you need to become an AI Engineer from scratch.
          </p>
        </div>

        <div className="curriculum-grid">

          {modules.map((module, index) => (
            <div className="module-card" key={index}>

              <div className="module-icon">
                {module.icon}
              </div>

              <span className="module-number">
                {module.title}
              </span>

              <h3>{module.topic}</h3>

              <ul>
                {module.lessons.map((lesson, i) => (
                  <li key={i}>
                    ✅ {lesson}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Curriculum;