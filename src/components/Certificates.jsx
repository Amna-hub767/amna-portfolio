function Certificates() {
  const certificates = [
    {
      title: "Graphic Design Course",
      organization:
        "HOPE-HITEC Oasis for Professional Excellence",
      description:
        "Completed a Graphic Design course focused on creative design, visual communication, and digital design skills.",
      image: "/images/certificates/graphic-design.png",
    },

    {
      title: "App Development Internship",
      organization: "CodeAlpha",
      description:
        "Successfully completed a one-month App Development Internship, gaining practical experience in Flutter and mobile application development.",
      image: "/images/certificates/codealpha.png",
    },

    {
      title: "Claude 101",
      organization: "Course Completion Certificate",
      description:
        "Completed the Claude 101 course and gained foundational knowledge about Claude and AI-assisted workflows.",
      image: "/images/certificates/claude-101.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My{" "}
          <span className="text-cyan-400">
            Certificates
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Certifications and achievements from my learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-3 duration-300 shadow-xl"
            >

              <div className="bg-slate-800 p-4">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-contain rounded-2xl"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 font-medium mt-3">
                  {certificate.organization}
                </p>

                <p className="text-gray-400 leading-7 mt-5">
                  {certificate.description}
                </p>

                <div className="mt-6 inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
                  Certificate
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;