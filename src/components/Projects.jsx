import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "Food Delivery Website",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      description:
        "Designed and developed a responsive food delivery website using HTML and CSS featuring navigation menus, promotional sections, and a mobile-friendly layout.",
      tech: ["HTML", "CSS"]
    },

    {
      title: "Library Management System",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
      description:
        "Developed a Java-based library management system to manage books, students, issue records, and return operations efficiently.",
      tech: ["Java"]
    },

    {
      title: "Smart Electricity Billing System",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      description:
        "Built a Python application for electricity bill estimation and consumption tracking with automated calculations.",
      tech: ["Python"]
    },

    {
      title: "Smart Railway Gate Control System",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
      description:
        "Created an automated railway gate control system using Java concepts to simulate train detection and automatic gate operations.",
      tech: ["Java"]
    }

  ];

  return (

    <section id="projects" className="bg-slate-950 py-24 text-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Some of the projects I have developed during my learning journey.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 duration-300 shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 duration-300 py-3 rounded-xl flex justify-center items-center gap-2">

                  <FaExternalLinkAlt />

                  View Details

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;