import React from "react";
import "../styles/Projects.css";

const Projects = () => {

  const projects = [
    {
      title: "AI Resume Analyzer",
      icon: "📄",
      desc: "Analyze resumes using Generative AI and ATS scoring."
    },
    {
      title: "AI Chatbot",
      icon: "💬",
      desc: "Build ChatGPT-like intelligent assistants."
    },
    {
      title: "RAG Knowledge Bot",
      icon: "📚",
      desc: "Chat with PDFs, Documents and Databases."
    },
    {
      title: "AI Voice Assistant",
      icon: "🎤",
      desc: "Speech-to-Text and Text-to-Speech AI."
    },
    {
      title: "Agentic AI System",
      icon: "🤖",
      desc: "Multi-step AI Agents using CrewAI."
    },
    {
      title: "Multi-Agent Automation",
      icon: "🚀",
      desc: "Multiple AI Agents working together."
    },
    {
      title: "MCP Integration",
      icon: "🔗",
      desc: "Connect AI to External Tools & APIs."
    },
    {
      title: "Cloud AI Deployment",
      icon: "☁️",
      desc: "Deploy AI Apps on AWS & Cloud."
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="container">

        <div className="section-heading">
          <h2>Build Industry-Level AI Projects</h2>

          <p>
            Real projects that recruiters and companies want to see.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;