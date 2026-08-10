function GraphicDesign() {
  const designs = [
    {
      title: "Graphic Design Work",
      image: "/images/designs/design-1.png",
      description:
        "A graphic design piece created as part of my design work and creative practice.",
      tools: ["Canva"],
    },
  ];

  return (
    <section
      className="bg-slate-900 text-white py-24"
      id="graphic-design"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Graphic{" "}
          <span className="text-cyan-400">
            Design
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4">
          A selection of my graphic design work and creative projects.
        </p>

        <div className="max-w-3xl mx-auto mt-16">

          {designs.map((design, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 duration-300 shadow-xl"
            >

              <div className="bg-slate-800 p-5">

                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full max-h-[600px] object-contain rounded-2xl"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {design.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {design.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm"
                    >
                      {tool}
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

export default GraphicDesign;