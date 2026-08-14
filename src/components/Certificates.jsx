function Certificates() {
  const certificates = [
    {
      title: "Graphic Design Course",
      issuer: "HOPE-HITEC Oasis for Professional Excellence",
      image: "/images/certificates/graphic-design.png",
      description:
        "Completed a Graphic Design course covering creative design principles, visual communication, and practical design tools.",
      skills: [
        "Graphic Design",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
      ],
    },

    {
      title: "App Development Internship",
      issuer: "Code Alpha",
      image: "/images/certificates/codealpha-app-development.png",
      description:
        "Successfully completed a 1-month App Development internship at Code Alpha, gaining hands-on experience in mobile application development.",
      skills: [
        "App Development",
        "Flutter",
        "Dart",
        "Mobile UI",
      ],
    },

    {
      title: "Claude 101",
      issuer: "Anthropic",
      image: "/images/certificates/claude-101.png",
      description:
        "Completed Claude 101, an introductory course focused on using Claude effectively and understanding generative AI capabilities.",
      skills: [
        "Generative AI",
        "Claude",
        "Prompting",
        "AI Tools",
      ],
    },

    {
      title: "Introduction to Prompt Engineering with GitHub Copilot",
      issuer: "Simplilearn",
      image: "/images/certificates/prompt-engineering-github-copilot.png",
      description:
        "Completed an introductory course on prompt engineering with GitHub Copilot, covering effective prompting techniques and AI-assisted software development.",
      skills: [
        "Prompt Engineering",
        "GitHub Copilot",
        "Generative AI",
        "AI-Assisted Development",
      ],
    },

    {
      title: "Introduction to Generative AI Studio",
      issuer: "Simplilearn powered by Google Cloud",
      image: "/images/certificates/generative-ai-studio.png",
      description:
        "Completed an introductory course on Generative AI Studio by Simplilearn, powered by Google Cloud, covering generative AI concepts and practical AI tools.",
      skills: [
        "Generative AI",
        "Google Cloud",
        "AI Tools",
        "Prompt Engineering",
      ],
    },

    {
      title: "Introduction to Figma",
      issuer: "Simplilearn",
      image: "/images/certificates/introduction-to-figma.png",
      description:
        "Completed an introductory Figma course covering the fundamentals of interface design, design tools, and creating digital UI designs.",
      skills: [
        "Figma",
        "UI Design",
        "UX Design",
        "Prototyping",
      ],
    },
  ];

  return (
    <section
      className="bg-slate-900 text-white py-24"
      id="certificates"
    >

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          My{" "}
          <span className="text-cyan-400">
            Certificates
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Certifications, courses and professional learning experiences
          that have helped me develop my technical and creative skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 duration-300 shadow-xl"
            >

              <div className="bg-slate-800 p-4">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-contain rounded-2xl"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-cyan-400 font-medium mt-3">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 leading-7 mt-4">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {certificate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}

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