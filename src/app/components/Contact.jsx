import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="bg-black min-h-screen flex items-center justify-center py-10"
      id="contact"
      style={{
        backgroundImage: "url('/images/contact-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full text-center px-5">
        <h2 className="text-xl md:text-4xl font-bold text-green-400 mb-6">04. Get In Touch</h2>
        <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
          Although I’m currently looking for new opportunities, my inbox is always open. <br />
          Whether you have a question or just want to say hi, I’ll do my best to get back to you!
        </p>

        {/* Icons with labels */}
        <footer className="mt-8">
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-8">
            <a
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaEnvelope className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaGithub className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaLinkedin className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Linkedin</span>
            </a>
            <a
              href="https://www.yournewspaperarticle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaNewspaper className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Blog</span>
            </a>
          </div>
        </footer>

        <button className="mt-8 bg-transparent border border-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-black text-green-400 text-xl">
          Say Hello
        </button>
      </div>
    </section>
  );
};

export default Contact;
