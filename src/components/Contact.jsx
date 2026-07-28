import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


function Contact(){

return(

<section 
id="contact"
className="bg-slate-950 text-white py-24"
>


<div className="max-w-6xl mx-auto px-8">


<h2 className="text-5xl font-bold text-center">

Contact <span className="text-cyan-400">
Me
</span>

</h2>


<p className="text-gray-400 text-center mt-4">

Let's connect and build something amazing together.

</p>



<div className="grid md:grid-cols-2 gap-10 mt-14">



{/* Contact Information */}

<div className="
bg-slate-900
rounded-3xl
p-8
border
border-slate-700
">


<h3 className="text-3xl font-bold mb-6">

Get In Touch

</h3>


<p className="text-gray-400 mb-6">

I am open to internship opportunities,
collaborations and software development projects.

</p>



<div className="space-y-5">


<p className="flex items-center gap-3">

<FaEnvelope className="text-cyan-400"/>

amnabasharat767@gmail.com

</p>



<p className="flex items-center gap-3">

<FaPhone className="text-cyan-400"/>

03108744061

</p>



<p className="flex items-center gap-3">

📍 Taxila, Pakistan

</p>



<div className="flex gap-5 mt-8">


<a

href="https://www.linkedin.com/in/amna-basharat-6b1b73416"

target="_blank"

rel="noreferrer"

className="
text-3xl
text-cyan-400
hover:text-cyan-300
duration-300
"

>

<FaLinkedin/>

</a>


</div>



</div>


</div>





{/* Contact Form */}


<div className="
bg-slate-900
rounded-3xl
p-8
border
border-slate-700
">


<input

type="text"

placeholder="Your Name"

className="
w-full
bg-slate-800
p-4
rounded-xl
mb-5
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>



<input

type="email"

placeholder="Your Email"

className="
w-full
bg-slate-800
p-4
rounded-xl
mb-5
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>




<textarea

placeholder="Your Message"

rows="5"

className="
w-full
bg-slate-800
p-4
rounded-xl
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>



<button

className="
mt-5
w-full
bg-cyan-500
hover:bg-cyan-600
py-3
rounded-xl
font-bold
duration-300
"

>

Send Message

</button>



</div>



</div>


</div>


</section>

)

}


export default Contact;