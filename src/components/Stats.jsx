function Stats() {
  const stats = [
    {
      number: "11+",
      title: "Projects Completed",
    },
    {
      number: "2",
      title: "Internships",
    },
    {
      number: "3",
      title: "Certificates",
    },
    {
      number: "10+",
      title: "Technologies",
    },
  ];

  return (
    <section
      className="bg-slate-950 text-white py-24"
      id="achievements"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My{" "}
          <span className="text-cyan-400">
            Achievements
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          A quick overview of my projects, internships,
          certificates and technical skills.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center hover:border-cyan-400 duration-300 shadow-xl"
            >

              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="text-gray-300 mt-4 font-medium">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;