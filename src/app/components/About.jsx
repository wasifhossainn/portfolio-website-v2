import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="grid grid-cols-2 bg-black p-32 mt-20 text-green-400 min-h-0"
      id="about"
      style={{
        backgroundImage: "url('/images/about-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold">01. About Me</h2>
        <p className="mt-6 text-sm">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
          <br />
          <br />
          I’ve spent my career honing my skills in creating scalable and
          maintainable applications that prioritize user experience. My passion
          lies in crafting intuitive and engaging solutions that make a
          difference.
          <br />
          <br />
          I’m driven by the challenge of turning ideas into functional,
          impactful software and delivering value to users.
        </p>
        <p className="mt-6">Here are a few technologies I’ve been working with recently:</p>
        <ul className="mt-6 space-y-4">
          <li className="relative pl-8 flex items-center space-x-2">
            <span className="arrow-animation absolute left-0 w-4 h-4 border-t-4 border-r-4 border-green-400 rotate-45 transform origin-center"></span>
            <span>JavaScript (ES6+)</span>
          </li>
          <li className="relative pl-8 flex items-center space-x-2">
            <span className="arrow-animation absolute left-0 w-4 h-4 border-t-4 border-r-4 border-green-400 rotate-45 transform origin-center"></span>
            <span>React</span>
          </li>
          <li className="relative pl-8 flex items-center space-x-2">
            <span className="arrow-animation absolute left-0 w-4 h-4 border-t-4 border-r-4 border-green-400 rotate-45 transform origin-center"></span>
            <span>Node.js</span>
          </li>
          <li className="relative pl-8 flex items-center space-x-2">
            <span className="arrow-animation absolute left-0 w-4 h-4 border-t-4 border-r-4 border-green-400 rotate-45 transform origin-center"></span>
            <span>Tailwind CSS</span>
          </li>
        </ul>
      </div>

      {/* Right Content (Profile Image) */}
      <div className="mx-24 flex content-center">
        <Image
          src="/images/about-profile.svg"
          alt="Profile Photo"
          height={650}
          width={650}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default About;
