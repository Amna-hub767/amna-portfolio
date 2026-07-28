function WhyHireMe(){

const reasons=[

"Fast Learner",

"Problem Solver",

"Team Player",

"Creative Thinking",

"Quick Adaptability",

"Leadership Skills"

];


return(

<section className="bg-slate-900 text-white py-24">


<div className="max-w-7xl mx-auto px-8">


<h2 className="text-5xl font-bold text-center">

Why <span className="text-cyan-400">
Hire Me?
</span>

</h2>


<p className="text-gray-400 text-center mt-4">

Skills and qualities that help me build better solutions.

</p>



<div className="grid md:grid-cols-3 gap-8 mt-14">


{
reasons.map((reason,index)=>(


<div

key={index}

className="
bg-slate-950
p-8
rounded-3xl
border
border-slate-700
hover:border-cyan-400
hover:-translate-y-3
duration-300
"


>


<h3 className="
text-xl
font-bold
text-center
">

✓ {reason}

</h3>


</div>


))
}



</div>


</div>


</section>


)

}


export default WhyHireMe;