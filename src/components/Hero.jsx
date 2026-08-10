import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      className="min-h-screen bg-slate-950 text-white flex items-center"
      id="home"
    >

      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="flex justify-center">

          <div className="max-w-4xl text-center">

            <p className="text-cyan-400 text-lg font-semibold mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Amna{" "}
              <span className="text-cyan-400">
                Basharat
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mt-6 min-h-[48px]">

              <TypeAnimation
                sequence={[
                  "Software Engineering Student",
                  2000,
                  "App Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="text-gray-400 text-lg leading-8 mt-7 max-w-2xl mx-auto">
              I am a Software Engineering student passionate about
              building mobile applications, designing user-friendly
              interfaces and creating practical software solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl font-semibold duration-300"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-7 py-3 rounded-xl font-semibold duration-300"
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;