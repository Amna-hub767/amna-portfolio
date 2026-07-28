function Skills() {


const skills = [

{
title: "Programming Languages",
items: [
"Python",
"Java",
"C++",
"HTML",
"CSS",
"JavaScript"
]
},


{
title: "Frameworks & Technologies",
items: [
"Flutter",
"React",
"Flask"
]
},


{
title: "Database",
items: [
"SQLite",
"MySQL"
]
},


{
title: "Tools & Design",
items: [
"Git",
"VS Code",
"Figma",
"Canva"
]
}

];



return (


<section 
id="skills"
className="
bg-slate-950
text-white
py-24
"
>


<div className="
max-w-7xl
mx-auto
px-8
">


<h2 className="
text-5xl
font-bold
text-center
">

My <span className="text-cyan-400">
Skills
</span>

</h2>



<p className="
text-gray-400
text-center
mt-4
">

Technologies and tools I use to build modern applications.

</p>




<div className="
grid
md:grid-cols-2
gap-8
mt-14
">



{
skills.map((skill,index)=>(


<div

key={index}

className="
bg-slate-900
border
border-slate-700
rounded-3xl
p-8
hover:border-cyan-400
hover:-translate-y-2
duration-300
shadow-xl
"

>


<h3 className="
text-2xl
font-bold
mb-6
text-cyan-400
">

{skill.title}

</h3>



<div className="
flex
flex-wrap
gap-3
">


{
skill.items.map((item,i)=>(


<span

key={i}

className="
bg-cyan-500/20
text-cyan-400
px-4
py-2
rounded-full
text-sm
hover:bg-cyan-500
hover:text-white
duration-300
"

>

{item}

</span>


))

}


</div>


</div>


))


}



</div>


</div>


</section>


);


}


export default Skills;