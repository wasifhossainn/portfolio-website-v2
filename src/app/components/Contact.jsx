import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="bg-black min-h-screen flex items-center justify-center py-10"
      id="contact"
      style={{
        backgroundImage: "url('./images/contact-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full text-center px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4EF17A] mb-6">04. Get In Touch</h2>
        <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
        Ready to create impactful software solutions together? 
        Let’s connect! Reach out via LinkedIn or email me at wasif.hossain@hotmail.com to start a conversation.
        </p>

        {/* Icons with labels */}
        <footer className="mt-8">
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-8">
            <a
              href="mailto:wasif.hossain@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaEnvelope className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Email</span>
            </a>
            <a
              href="https://github.com/wasifhossainn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaGithub className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Github</span>
            </a>
            <a
              href="https://au.linkedin.com/in/wasif-hossain-b4398115a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaLinkedin className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Linkedin</span>
            </a>
            <a
              href="https://dev.to/wasifhossain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400"
            >
              <FaNewspaper className="text-6xl" />
              <span className="hidden md:inline-block text-lg">Blog</span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
