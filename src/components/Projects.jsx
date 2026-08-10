function Projects() {
  const projects = [
    {
      title: "AI Electricity Billing System",
      image: "/images/projects/electricity.png",
      description:
        "A Python-based project for electricity bill prediction and calculation.",
      tools: ["Python"],
      github:
        "https://github.com/Amna-hub767/AI_Electricity_Project--2-",
    },

    {
      title: "Zakat Calculator",
      image: "/images/projects/zakat.png",
      description:
        "A Zakat calculator developed using Assembly Language.",
      tools: ["Assembly Language"],
      github:
        "https://github.com/Amna-hub767/zakat-calculator",
    },

    {
      title: "Hospital Emergency Triage",
      image: "/images/projects/hospital-triage.png",
      description:
        "An Assembly Language project for managing emergency patients according to priority.",
      tools: ["Assembly Language"],
      github:
        "https://github.com/Amna-hub767/Hospital-Emergency-Triage-1",
    },

    {
      title: "Railway Gate Control System",
      image: "/images/projects/railway.png",
      description:
        "A railway gate control system developed using Java.",
      tools: ["Java"],
      github:
        "https://github.com/Amna-hub767/Railway-gate-control-system.git",
    },

    {
      title: "Flashcard Quiz App",
      image: "/images/projects/flashcard.png",
      description:
        "A Flutter-based flashcard quiz application developed for interactive learning.",
      tools: ["Flutter", "Dart"],
      github:
        "https://github.com/Amna-hub767/CodeAlpha_FlashQuizApp",
    },

    {
      title: "Fitness Tracker App",
      image: "/images/projects/fitness.png",
      description:
        "A Flutter fitness tracking application for tracking workouts, steps and calories.",
      tools: ["Flutter", "Dart", "SQLite"],
      github:
        "https://github.com/Amna-hub767/CodeAlpha_FitnessTrackerApp",
    },

    {
      title: "Intra University Event Hub",
      image: "/images/projects/university-events.png",
      description:
        "A university event management and discovery interface designed in Figma.",
      tools: ["Figma", "UI/UX Design"],
      figma:
        "https://www.figma.com/proto/S1XK8iEf2HtlhTkAW7lwiO/intra-univesity-event-hub?node-id=126-222&t=aHmWSysYsz7us6ks-1&scaling=scale-down&content-scaling=fixed&page-id=9%3A356",
    },

    {
      title: "Medical Management System",
      image: "/images/projects/medical-management.png",
      description:
        "A medical management system UI/UX design created in Figma.",
      tools: ["Figma", "UI/UX Design"],
      figma:
        "https://www.figma.com/design/Lq7XJWu9ZsjTB2Al8Znspr/Untitled?node-id=0-1&t=bYrWiObQpmXF0YNE-1",
    },

    {
      title: "Vehicle Detector & Counter",
      image: "/images/projects/vehicle.png",
      description:
        "A Python computer vision project for detecting and counting vehicles.",
      tools: ["Python", "Computer Vision"],
      github:
        "https://github.com/Amna-hub767/Vehicle-detector---Counter.git",
    },

    {
      title: "Food Delivery Website",
      image: "/images/projects/food-delivery.png",
      description:
        "A responsive food delivery website designed with a modern interface.",
      tools: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "Library Management System",
      image: "/images/projects/library.png",
      description:
        "A software project designed for managing library books and records.",
      tools: ["Java"],
    },
  ];

  return (
    <section
      className="bg-slate-900 text-white py-24"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My{" "}
          <span className="text-cyan-400">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          A collection of my development, academic and UI/UX projects.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 duration-300 shadow-xl"
            >

              <div className="bg-slate-800 p-5">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-contain rounded-2xl"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}

                </div>

                <div className="flex flex-wrap gap-3 mt-7">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl duration-300"
                    >
                      GitHub
                    </a>
                  )}

                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl duration-300"
                    >
                      Figma
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;