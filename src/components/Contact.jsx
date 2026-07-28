import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Feel free to reach out for internships, collaborations or project opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700">

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-gray-300">
                  amnabasharat767@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-gray-300">
                  03108744061
                </span>
              </div>

              <div>
                <p className="text-gray-300 mb-4">
                  Connect with me
                </p>

                <div className="flex gap-5">

                  <a
                    href="https://www.linkedin.com/in/your-linkedin-username/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-cyan-400 hover:text-cyan-300 duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/Amna-hub767"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-cyan-400 hover:text-cyan-300 duration-300"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-700"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 p-4 rounded-xl mb-5 outline-none focus:border-cyan-400 border border-slate-700"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 p-4 rounded-xl mb-5 outline-none focus:border-cyan-400 border border-slate-700"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full bg-slate-800 p-4 rounded-xl mb-6 outline-none focus:border-cyan-400 border border-slate-700 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 duration-300 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;