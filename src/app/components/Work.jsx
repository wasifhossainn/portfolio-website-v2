import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Mock Data
const projects = [
  {
    title: "Spotify Application",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    technologies: ["JavaScript", "HTML", "CSS"],
    websiteLink: "#",
    githubLink: "#",
    image: "/images/project1.svg",
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce solution for small businesses.",
    technologies: ["React", "Node.js", "MongoDB"],
    websiteLink: "#",
    githubLink: "#",
    image: "/images/project2.svg",
  },
  {
    title: "Blog Application",
    description: "A simple and elegant blogging platform for creators.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    websiteLink: "#",
    githubLink: "#",
    image: "/images/project3.svg",
  },
];

const otherProjects = [
  {
    title: "Weather App",
    description: "A responsive app to check weather updates.",
    technologies: ["JavaScript", "API", "CSS"],
    websiteLink: "#",
    githubLink: "#",
  },
  {
    title: "Todo List",
    description: "A simple to-do list app to organize tasks.",
    technologies: ["React", "CSS"],
    websiteLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    websiteLink: "#",
    githubLink: "#",
  },
];

// Utility Function to Get Technology Colors
const getTechColor = (tech) => {
  const colors = {
    JavaScript: "#F7DF1E",
    HTML: "#E34F26",
    CSS: "#1572B6",
    React: "#61DAFB",
    "Node.js": "#339933",
    MongoDB: "#47A248",
    "Next.js": "#000000",
    "Tailwind CSS": "#38B2AC",
    Firebase: "#FFCA28",
    API: "#4DB8FF",
  };
  return colors[tech] || "#555";
};

// Reusable Technology Tags Component
const TechTags = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {technologies.map((tech, index) => (
      <span
        key={index}
        className="px-4 py-2 rounded-full text-base font-medium text-black"
        style={{ backgroundColor: getTechColor(tech) }}
      >
        {tech}
      </span>
    ))}
  </div>
);

// Reusable Project Card Component
const ProjectCard = ({ project, isImageFirst }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {!isImageFirst && (
      <div className="bg-gray-900 text-white p-8 rounded-lg border border-green-400 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-3xl font-bold">{project.title}</h3>
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-red-500 rounded-full cursor-not-allowed"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full cursor-not-allowed"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full cursor-not-allowed"></div>
          </div>
        </div>
        <p className="mt-4 text-md md:text-lg">{project.description}</p>

        <div className="mt-6">
          <h4 className="text-md md:text-lg font-bold text-green-400">Technologies Used:</h4>
          <TechTags technologies={project.technologies} />
        </div>

        <div className="mt-6 flex space-x-6 text-green-400">
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-2xl hover:text-white transition" />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </div>
    )}

    <div className="flex justify-center items-center">
      <Image
        src={project.image}
        alt={project.title}
        height={800}
        width={800}
        className="rounded-lg"
      />
    </div>

    {isImageFirst && (
      <div className="bg-gray-900 text-white p-8 rounded-lg border border-green-400 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-3xl font-bold">{project.title}</h3>
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-red-500 rounded-full cursor-not-allowed"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full cursor-not-allowed"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full cursor-not-allowed"></div>
          </div>
        </div>
        <p className="mt-4 text-md md:text-lg">{project.description}</p>

        <div className="mt-6">
          <h4 className="text-md md:text-lg font-bold text-green-400">Technologies Used:</h4>
          <TechTags technologies={project.technologies} />
        </div>

        <div className="mt-6 flex space-x-6 text-green-400">
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-2xl hover:text-white transition" />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </div>
    )}
  </div>
);

// Smaller Project Card Component
const SmallProjectCard = ({ project }) => (
  <div className="bg-gray-900 text-white p-8 rounded-lg border border-green-400 shadow-lg">
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-bold">{project.title}</h4>
      <div className="flex space-x-3">
        <div className="w-4 h-4 bg-red-500 rounded-full cursor-not-allowed"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full cursor-not-allowed"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full cursor-not-allowed"></div>
      </div>
    </div>
    <p className="mt-4 text-md">{project.description}</p>

    <div className="mt-6">
      <h4 className="text-sm font-bold text-green-400">Technologies Used:</h4>
      <TechTags technologies={project.technologies} />
    </div>

    <div className="mt-6 flex space-x-6 text-green-400">
      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
        <FaExternalLinkAlt className="text-lg hover:text-white transition" />
      </a>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-lg hover:text-white transition" />
      </a>
    </div>
  </div>
);

const Work = () => (
  <section
    className="p-8 sm:p-12 bg-black text-green-400 min-h-screen"
    id="work"
    style={{
      backgroundImage: "url('/images/project-background.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex items-center justify-between">
      <h2 className="text-xl sm:text-4xl font-bold">03. Some Things I've Built</h2>
    </div>

    {/* Main Projects Section */}
    <div className="space-y-20 mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} isImageFirst={index % 2 === 0} />
      ))}
    </div>

    {/* Other Projects Section */}
    <h3 className="mt-12 text-xl sm:text-3xl font-bold">Other Projects</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {otherProjects.map((project, index) => (
        <SmallProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Work;
