function Stats() {

  const stats = [
    {
      number: "04",
      title: "Projects Completed"
    },
    {
      number: "05+",
      title: "Programming Languages"
    },
    {
      number: "08+",
      title: "Technologies Learned"
    },
    {
      number: "3.09",
      title: "Current CGPA"
    }
  ];


  return (

    <section className="bg-slate-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-8">


        <h2 className="text-5xl font-bold text-center">

          My <span className="text-cyan-400">
            Achievements
          </span>

        </h2>


        <p className="text-gray-400 text-center mt-4">

          My learning journey and development milestones.

        </p>


        <div className="grid md:grid-cols-4 gap-8 mt-14">


          {
            stats.map((item,index)=>(


              <div
              key={index}
              className="
              bg-slate-900 
              border border-slate-700
              rounded-3xl
              p-8
              text-center
              hover:border-cyan-400
              hover:-translate-y-3
              duration-300
              shadow-xl
              "
              >


                <h3 className="
                text-5xl 
                font-bold 
                text-cyan-400
                ">

                  {item.number}

                </h3>


                <p className="
                text-gray-400
                mt-4
                ">

                  {item.title}

                </p>


              </div>


            ))
          }


        </div>


      </div>


    </section>


  );
}


export default Stats;