import React from "react";
import Image from "next/image";

const About = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Microservices Architecture",
    "Cloud Infrastructure (AWS, Azure)",
    "CI/CD Pipelines",
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Azure AZ900 Certified",
    " IBM Agile Explorer Certified",
    " IBM Design Thinking Practitioner",
  ];

  return (
    <section
      id="about"
      className="bg-black text-white p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-screen"
      style={{
        backgroundImage: "url('/images/about-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4EF17A]">01. About Me</h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          With a solid foundation in full-stack development and cloud-based 
          technologies, I’ve built my career by creating efficient, scalable 
          software solutions that solve real-world challenges. My expertise includes 
          machine learning models for large-scale datasets, integration of enterprise 
          applications, and enhancing user-facing features for high-traffic platforms.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          In my current role as a Senior Application Developer at IBM, I’ve engineered 
          robust APIs, enhanced system stability, and delivered solutions that reduce 
          downtime and improve business efficiency. Previously, I contributed to work 
          at Spiral Blue, where I designed machine learning models for satellite 
          imagery processing, and at Buzzy Buzz, where I scaled a platform to support 
          over 1,000 users with 98% error-free releases.
        </p>

        <p className="text-lg font-medium mb-4">Technologies I've been working with recently:</p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-3">
            {technologies.slice(0, Math.ceil(technologies.length / 2)).map((tech, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-[#00F952] text-2xl">▹</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {technologies.slice(Math.ceil(technologies.length / 2)).map((tech, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-[#00F952] text-2xl">▹</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg font-medium mb-4 mt-6">Certifications:</p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-3">
            {certifications.slice(0, Math.ceil(certifications.length / 2)).map((cert, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-[#00F952] text-2xl">▹</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {certifications.slice(Math.ceil(certifications.length / 2)).map((cert, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="text-[#00F952] text-2xl">▹</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Content (Profile Image) */}
      <div className="flex justify-center">
        <Image
          src="/images/aboutprofile.svg"
          alt="Profile Photo"
          height={400}
          width={400}
          className="sm:h-[500px] sm:w-[500px] md:h-[500px] md:w-[500px]"
        />
      </div>
    </section>
  );
};

export default About;
