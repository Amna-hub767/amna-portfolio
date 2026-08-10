function Stats() {
  const stats = [
    {
      number: "11+",
      label: "Projects Completed",
    },
    {
      number: "10+",
      label: "Technologies",
    },
    {
      number: "2",
      label: "Internships",
    },
    {
      number: "3",
      label: "Certificates",
    },
  ];

  return (
    <section
      id="stats"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-3xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 duration-300 shadow-xl"
            >

              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-4">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;