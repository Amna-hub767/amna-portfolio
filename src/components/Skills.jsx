function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "85%" },
    { name: "Python", level: "90%" },
    { name: "Java", level: "80%" },
    { name: "MySQL", level: "85%" },
    { name: "Git & GitHub", level: "80%" },
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;