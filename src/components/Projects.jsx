import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      title: "Vehicle Detector & Counter",
      description:
        "Developed a Python-based vehicle detection and counting system for monitoring vehicle traffic.",
      tech: ["Python", "OpenCV"],
      github: "https://github.com/Amna-hub767/Vehicle-detector---Counter.git",
      details:
        "A computer vision project that detects and counts vehicles from video streams using Python."
    },

    {
      title: "AI Electricity Billing System",
      description:
        "Built a Python application for electricity bill estimation and automated calculations.",
      tech: ["Python"],
      github: "https://github.com/Amna-hub767/AI_Electricity_Project--2-",
      details:
        "Calculates electricity bills based on user consumption and provides automated bill estimation."
    },

    {
      title: "Hospital Emergency Triage",
      description:
        "An 8086 Assembly Language project for managing emergency patient triage based on priority.",
      tech: ["8086 Assembly"],
      github: "https://github.com/Amna-hub767/Hospital-Emergency-Triage-1",
      details:
        "Implements a basic emergency triage system using Assembly Language concepts."
    },

    {
      title: "Zakat Calculator",
      description:
        "An Assembly Language application for calculating Zakat based on user-entered assets.",
      tech: ["8086 Assembly"],
      github: "https://github.com/Amna-hub767/zakat-calculator",
      details:
        "Calculates Zakat according to user inputs using Assembly Language programming."
    },

    {
      title: "Smart Railway Gate Control System",
      description:
        "Created a Java-based railway gate control simulation system for automatic gate operations.",
      tech: ["Java"],
      github: "https://github.com/Amna-hub767/Railway-gate-control-system.git",
      details:
        "Simulates automatic railway gate opening and closing based on train movement."
    },

    {
      title: "Food Delivery Website",
      description:
        "Designed and developed a responsive food delivery website using HTML and CSS.",
      tech: ["HTML", "CSS"],
      github: "",
      details:
        "A responsive website with navigation menus, food categories and attractive UI."
    },

    {
      title: "Library Management System",
      description:
        "Developed a Java-based desktop application for managing books and student records.",
      tech: ["Java"],
      github: "",
      details:
        "Provides book management, issuing and returning functionalities."
    }

  ];

  return (
    <section id="projects" className="bg-slate-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Projects showcasing my programming, problem-solving and software development skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300 shadow-xl"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-4 mt-8">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl flex justify-center items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl flex justify-center items-center gap-2"
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

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center px-6 z-50">

          <div className="bg-slate-900 max-w-lg w-full rounded-3xl border border-cyan-400 p-8">

            <h3 className="text-3xl font-bold text-cyan-400">
              {selectedProject.title}
            </h3>

            <p className="text-gray-300 mt-6 leading-8">
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