import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
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
          Feel free to contact me for internships, freelance projects or collaboration opportunities.
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
                    className="text-cyan-400 text-3xl hover:text-cyan-300 duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/Amna-hub767"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-3xl hover:text-cyan-300 duration-300"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 flex flex-col justify-center">

            <h3 className="text-3xl font-bold mb-6">
              Let's Chat on WhatsApp
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Have an internship opportunity, project idea or collaboration in mind?
              Click the button below to start a conversation with me directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/923108744061?text=Hello%20Amna,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 duration-300 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-3 text-lg"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;