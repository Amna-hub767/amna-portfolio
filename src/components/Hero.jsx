import { ReactTyped } from "react-typed";
import { FaDownload } from "react-icons/fa";


function Hero(){

return(

<section 
className="
min-h-screen
bg-slate-950
text-white
flex
items-center
"
>


<div className="
max-w-7xl
mx-auto
px-8
w-full
"
>


<div className="
max-w-4xl
"
>


<p className="
text-cyan-400
text-xl
mb-4
font-semibold
">

Hello, I'm

</p>



<h1 className="
text-6xl
md:text-7xl
font-bold
leading-tight
">

Amna Basharat

</h1>



<h2 className="
text-3xl
md:text-4xl
font-semibold
mt-5
text-gray-200
">


<ReactTyped

strings={[
"Software Engineering Student",
"Frontend Developer",
"App Development Intern",
"Flutter Developer"
]}

typeSpeed={60}

backSpeed={40}

loop

/>


</h2>




<p className="
text-gray-400
mt-6
text-lg
leading-8
max-w-2xl
">

I build modern, responsive and user-friendly applications
using programming and emerging technologies.
Passionate about software development, problem solving
and continuous learning.

</p>




<div className="
flex
flex-wrap
gap-5
mt-8
">


<button

className="
bg-cyan-500
hover:bg-cyan-600
px-8
py-3
rounded-xl
font-bold
duration-300
"

>

Hire Me

</button>




<a

href="/resume.pdf"

download

className="
border
border-cyan-400
px-8
py-3
rounded-xl
flex
items-center
gap-3
hover:bg-cyan-500
duration-300
"

>


<FaDownload/>

Download Resume


</a>



</div>



</div>


</div>


</section>

)

}


export default Hero;