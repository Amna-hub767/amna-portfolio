import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects(){


const [selectedProject, setSelectedProject] = useState(null);



const projects = [

{
title:"Food Delivery Website",

description:
"Designed and developed a responsive food delivery website using HTML and CSS with attractive layouts, navigation menus and user-friendly interface.",

tech:[
"HTML",
"CSS"
],


details:
"This project focuses on designing a responsive food ordering website. It includes structured web pages, attractive UI sections, navigation menus and mobile-friendly layouts."
},



{
title:"Library Management System",

description:
"Developed a Java-based library management system to manage books, students, issue records and return operations efficiently.",

tech:[
"Java"
],


details:
"This desktop application automates library operations including adding books, managing student records, issuing books and tracking returned books."
},



{
title:"Smart Electricity Billing System",

description:
"Built a Python application for electricity bill estimation and automated calculation of electricity consumption charges.",

tech:[
"Python"
],


details:
"This application calculates electricity bills based on user input and provides an efficient solution for managing electricity consumption and billing."
},



{
title:"Smart Railway Gate Control System",

description:
"Created a Java-based simulation system for automatic railway gate control and train detection operations.",

tech:[
"Java"
],


details:
"This project demonstrates automation concepts by simulating train detection and controlling railway gate opening and closing operations."
}



];



return(


<section

id="projects"

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
Projects
</span>

</h2>



<p className="
text-gray-400
text-center
mt-4
">

Academic projects showcasing my programming and development skills.

</p>




<div className="
grid
md:grid-cols-2
gap-10
mt-14
">



{

projects.map((project,index)=>(


<div

key={index}

className="
bg-slate-900
rounded-3xl
p-8
border
border-slate-700
hover:border-cyan-400
hover:-translate-y-3
duration-300
shadow-xl
"

>


<div className="
h-40
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
flex
items-center
justify-center
mb-6
">


<h3 className="
text-2xl
font-bold
text-center
px-4
">

{project.title}

</h3>


</div>





<p className="
text-gray-400
leading-7
">

{project.description}

</p>





<div className="
flex
flex-wrap
gap-3
mt-6
">


{

project.tech.map((tech,i)=>(


<span

key={i}

className="
bg-cyan-500/20
text-cyan-400
px-4
py-2
rounded-full
text-sm
"

>

{tech}

</span>


))

}


</div>




<button

onClick={()=>setSelectedProject(project)}

className="
mt-8
w-full
bg-cyan-500
hover:bg-cyan-600
py-3
rounded-xl
flex
justify-center
items-center
gap-2
duration-300
"

>


<FaExternalLinkAlt/>


View Details


</button>



</div>


))


}



</div>


</div>





{/* Details Popup */}


{

selectedProject && (


<div

className="
fixed
inset-0
bg-black/70
flex
items-center
justify-center
px-5
z-50
"

>


<div

className="
bg-slate-900
max-w-lg
w-full
rounded-3xl
p-8
border
border-cyan-400
"

>


<h3 className="
text-3xl
font-bold
text-cyan-400
">

{selectedProject.title}

</h3>



<p className="
text-gray-300
mt-5
leading-7
">

{selectedProject.details}

</p>




<div className="
flex
flex-wrap
gap-3
mt-6
">


{

selectedProject.tech.map((tech,index)=>(


<span

key={index}

className="
bg-cyan-500/20
text-cyan-400
px-4
py-2
rounded-full
"

>

{tech}

</span>


))


}


</div>




<button

onClick={()=>setSelectedProject(null)}

className="
mt-8
bg-cyan-500
px-6
py-3
rounded-xl
hover:bg-cyan-600
"

>

Close

</button>



</div>


</div>


)

}



</section>


)

}


export default Projects;