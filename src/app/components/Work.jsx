import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Mock Data
const projects = [
  {
    title: "Front End Simplified",
    description: "A collaborative capstone project designed to teach coding fundamentals and front-end development, helping students secure tech jobs. As a front-end developer, I contributed to UI design and researched AI-driven job recommendation use cases.",
    technologies: ["Vue", "Firebase", "Nuxt", "React", "Stripe", "Element UI", "HTML", "CSS"],
    websiteLink: "https://frontendsimplified.com/",
    image: "./images/frontendsimplified.png",
  },
  {
    title: "Travelogue",
    description: "A university project leveraging AI to generate tailored travel itineraries based on budget, time, location, and group size. As the technical lead, I managed a team of 12, designed the UX, and developed full-stack solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "Google APIs"],
    websiteLink: "https://www.youtube.com/watch?v=rSJsmoA4jxo&ab_channel=WH",
    githubLink: "https://github.com/Studio-3A",
    image: "./images/travelogueimage.png",
  },
  {
    title: "Anti-Cheat Examination System",
    description: "A university project creating an AI-powered platform to prevent cheating during online exams. Features included detecting cheating devices and teacher misconduct reporting. I served as technical lead, managing a team of 12, while contributing to UX design and full-stack development.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "YOLO API"],
    githubLink: "https://gitlab.com/aces1/anti-cheating-examination-system",
    image: "./images/Anticheatingexamsystem.png",
  },
];

const otherProjects = [
  {
    title: "IOU",
    description: "A social application allowing users to track, send, and manage favors among friends and groups, complete with friend recommendations. I worked as a full-stack engineer and crafted the user interface and experience.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    websiteLink: "#",
    githubLink: "https://github.com/mikaelamcnamara/IOU",
  },
  {
    title: "UTS Quantum Software Centre",
    description: "A platform for teaching quantum circuits, developed as a university project. I led a team of 12, serving as the technical lead, UX designer, and full-stack developer.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Quantum API"],
    githubLink: "https://gitlab.com/qsi2/quantum-user-interface",
  },
  {
    title: "StreamZ",
    description: "A video streaming platform allowing users to create, view, and manage streams. Streams are passed through an RTMP server for seamless viewing via browsers.",
    technologies: ["React", "Redux", "Router", "Axios", "Semantic UI", "GoogleAuth"],
    websiteLink: "https://www.youtube.com/watch?v=wkU2ug9M3UQ&feature=youtu.be",
    githubLink: "https://github.com/wasifhossainn/streams",
  },
  {
    title: "OneVice",
    description: "An e-commerce application enabling users to buy and sell electronic devices. Features include product recommendations and customizable user profiles. I worked as a full-stack developer on design and functionality.",
    technologies: ["Java", "XML", "Firebase"],
    websiteLink: "https://www.youtube.com/watch?v=hsRhr7fpbcY&feature=youtu.be",
    githubLink: "https://github.com/DavidOsburnUTS/studio-group8",
  },
  {
    title: "ezyDonate",
    description: "A university project where I served as a front-end developer using Java and XML, with backend integration using Firebase. The app connects donors and charities, enabling donations, bookings, and event management.",
    technologies: ["Java", "XML", "Firebase"],
    websiteLink: "#",
    githubLink: "#",
  },
  {
    title: "Earth X Aliens",
    description: "A team project creating a Python-based multiplayer game. Players defeat aliens with features such as power-ups and a high-score system. My contributions focused on front-end design and interface development.",
    technologies: ["Python"],
    websiteLink: "https://www.youtube.com/watch?v=yAzAS21myGg&feature=youtu.be",
    githubLink: "https://github.com/wasifhossainn/SpaceInvader",
  },
];

// Utility Function to Get Technology Colors
const getTechColor = (tech) => {
  const colors = {
    JavaScript: "#F7DF1E",   // Google yellow
    HTML: "#E53935",         // Red
    CSS: "#2965F1",          // Blue
  
    React: "#61DAFB",        // Cyan
    "Node.js": "#83CD29",     // Green
    MongoDB: "#47A248",       // Dark Green
    "Next.js": "#0070F3",     // Blue
    "Tailwind CSS": "#38B2AC", // Teal
    Firebase: "#FFCA28",      // Amber
    API: "#0288D1",           // Blue
    Vue: "#4DB8FF",           // Light Blue
    Nuxt: "#4DB8FF",          // Light Blue
    Stripe: "#5A9",           // Teal
    "Redux": "#55555",
    "Socket.IO": "#007ACD",     // Black
    WebRTC: "#FF5722",        // Orange
    "YOLO API": "#FF5722",          // Orange
    TypeScript: "#007ACD",    // Blue
    Java: "#007396",          // Blue Grey
    "Express.js": "#999",
    XML: "#007396",           // Blue Grey
    Axios: "#2196F3",         // Blue
    Router: "#FF9800",        // Amber
    Redux: "#764ABC",         // Deep Purple
    "Semantic UI": "#009688",      // Teal
    "Element UI": "#ffff",
    GoogleAuth: "#EA4335",    // Red
    Python: "#3776AB",        // Blue
    "Quantum API": "#FDD835"
  };
  return colors[tech] || "#555"; // Default gray
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
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-2xl hover:text-white transition" />
            </a>
          )}
          
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-white transition" />
            </a>
          )}
        </div>
      </div>
    )}

    <div className="flex justify-center items-center">
      <Image
        src={project.image}
        alt={project.title}
        height={700}
        width={700}
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
    className="p-10 sm:p-12 bg-black text-green-400 min-h-screen"
    id="work"
    style={{
      backgroundImage: "url('./images/project-background.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex items-center justify-between">
      <h2 className="text-4xl md:text-5xl text-green font-bold">03. Some Things I've Built</h2>
    </div>

    {/* Main Projects Section */}
    <div className="space-y-20 mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} isImageFirst={index % 2 === 0} />
      ))}
    </div>

    {/* Other Projects Section */}
    <h3 className="mt-12 text-4xl md:text-5xl font-bold">Other Projects</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {otherProjects.map((project, index) => (
        <SmallProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Work;
