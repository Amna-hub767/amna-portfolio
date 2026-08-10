function Experience() {
  const experiences = [
    {
      company: "FlyRank AI",
      role: "UI/UX Design Intern",
      duration: "Currently Ongoing",
      status: "Ongoing",
      description:
        "Currently working as a UI/UX Design Intern, contributing to user interface design, user experience research, wireframing, prototyping, and creating user-friendly digital experiences.",
      skills: [
        "UI/UX Design",
        "Figma",
        "Wireframing",
        "Prototyping",
      ],
    },

    {
      company: "CodeAlpha",
      role: "App Development Intern",
      duration: "1 Month — Completed",
      status: "Completed",
      description:
        "Successfully completed a one-month App Development Internship where I worked on Flutter-based mobile applications and strengthened my skills in mobile app development and user interface implementation.",
      skills: [
        "Flutter",
        "Dart",
        "Mobile App Development",
        "UI Design",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My{" "}
          <span className="text-cyan-400">
            Experience
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          My internship experience and professional learning journey.
        </p>

        <div className="max-w-4xl mx-auto mt-16 space-y-8">

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300 shadow-xl"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                  <span className="text-cyan-400 text-sm font-semibold">
                    {experience.status}
                  </span>

                  <h3 className="text-3xl font-bold mt-2">
                    {experience.role}
                  </h3>

                  <h4 className="text-xl text-gray-300 mt-2">
                    {experience.company}
                  </h4>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-5 py-2 rounded-full text-sm font-medium w-fit">
                  {experience.duration}
                </div>

              </div>

              <p className="text-gray-400 leading-8 mt-6">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-white duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;