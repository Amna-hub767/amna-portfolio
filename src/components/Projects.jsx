import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Electricity Billing System",
      description:
        "Built a Python application for electricity bill estimation and automated calculations.",
      tech: ["Python"],
      github: "https://github.com/Amna-hub767/AI_Electricity_Project--2-",
      details:
        "A desktop application that calculates electricity bills based on electricity consumption. It automates bill estimation, making the calculation process fast, accurate and user-friendly."
    },

    {
      title: "Hospital Emergency Triage",
      description:
        "Developed an 8086 Assembly Language project for emergency patient triage based on priority.",
      tech: ["8086 Assembly Language"],
      github: "https://github.com/Amna-hub767/Hospital-Emergency-Triage-1",
      details:
        "This Assembly Language project manages emergency patient priority using queue-based logic and basic Assembly programming concepts."
    },

    {
      title: "Zakat Calculator",
      description:
        "Developed an Assembly Language application to calculate Zakat based on user-entered assets.",
      tech: ["8086 Assembly Language"],
      github: "https://github.com/Amna-hub767/zakat-calculator",
      details:
        "A simple Assembly Language project that calculates Zakat according to the provided assets and displays the payable amount."
    },

    {
      title: "Smart Railway Gate Control System",
      description:
        "Created a Java-based simulation for automatic railway gate control and train detection.",
      tech: ["Java"],
      github: "https://github.com/Amna-hub767/Railway-gate-control-system.git",
      details:
        "This Java project simulates an automated railway gate system that detects train movement and controls gate operations."
    },

    {
      title: "Vehicle Detector & Counter",
      description:
        "Built a Python-based vehicle detection and counting system using computer vision techniques.",
      tech: ["Python", "OpenCV"],
      github: "https://github.com/Amna-hub767/Vehicle-detector---Counter.git",
      details:
        "A computer vision application that detects and counts vehicles from video footage using Python and OpenCV."
    },

    {
      title: "Food Delivery Website",
      description:
        "Designed and developed a responsive food delivery website with an attractive user interface.",
      tech: ["HTML", "CSS"],
      github: "",
      details:
        "A responsive frontend website featuring navigation, food categories, offers and a modern user interface."
    },

    {
      title: "Library Management System",
      description:
        "Developed a Java desktop application for managing books, students, issue records and return operations.",
      tech: ["Java"],
      github: "",
      details:
        "A desktop-based library management system that helps manage books, students and borrowing records efficiently."
    }
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Projects showcasing my programming, software development and problem-solving skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl border border-slate-700 p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-gray-400 mt-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl flex items-center justify-center gap-2 duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl flex items-center justify-center gap-2 duration-300"
                >
                  <FaExternalLinkAlt />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-5 z-50">
          <div className="bg-slate-900 max-w-lg w-full rounded-3xl border border-cyan-400 p-8">

            <h3 className="text-3xl font-bold text-cyan-400">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 leading-8 mt-6">
              {selectedProject.details}
            </p>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;