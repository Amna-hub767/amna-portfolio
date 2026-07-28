import profileImage from "../assets/amna.png";
function About() {
  return (
    <section className="bg-slate-900 text-white py-24" id="about">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>


        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">


          {/* Left Side */}

<div className="flex justify-center">
  <img
    src={profileImage}
    alt="Amna Basharat"
    className="w-80 h-80 object-cover rounded-3xl border-4 border-cyan-500 shadow-2xl"
/>
</div>



          {/* Right Side */}

          <div>


            <h3 className="text-3xl font-semibold mb-6">
              Software Engineering Student
            </h3>



            <p className="text-gray-300 leading-8 text-lg">

              I am a Software Engineering student at HITEC University,
              passionate about creating responsive web applications,
              learning Flutter, and building AI-powered software solutions.

            </p>



            <div className="grid grid-cols-2 gap-6 mt-10">



              <div className="bg-slate-800 p-5 rounded-xl">

                <h4 className="text-cyan-400 font-bold">
                  Education
                </h4>

                <p className="mt-2 text-gray-300">
                  BS Software Engineering
                </p>

              </div>




              <div className="bg-slate-800 p-5 rounded-xl">

                <h4 className="text-cyan-400 font-bold">
                  University
                </h4>

                <p className="mt-2 text-gray-300">
                  HITEC University
                </p>

              </div>





              <div className="bg-slate-800 p-5 rounded-xl">

                <h4 className="text-cyan-400 font-bold">
                  CGPA
                </h4>

                <p className="mt-2 text-gray-300">
                  3.09 / 4.00
                </p>

              </div>





              <div className="bg-slate-800 p-5 rounded-xl">

                <h4 className="text-cyan-400 font-bold">
                  Location
                </h4>

                <p className="mt-2 text-gray-300">
                  Taxila, Pakistan
                </p>

              </div>



            </div>


          </div>


        </div>


      </div>


    </section>
  );
}


export default About;