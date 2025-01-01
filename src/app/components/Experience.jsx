"use client";
import React, { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [activeJob, setActiveJob] = useState("IBM");

  const jobs = {
    IBM: {
      title: "Senior Application Developer",
      company: "@IBM",
      dates: "July 2022 - Present",
      description: [
        "Designed and optimized APIs to enable seamless, high-performance data exchange, reducing system downtime by 20%.",
        "Collaborated with stakeholders to translate complex business needs into scalable, practical software solutions for major projects like Transgrid and AIA.",
        "Leveraged tools like Mulesoft, Java, DataWeave, and Microsoft Graph APIs to integrate cloud and legacy systems, enhancing operational cohesion.",
        "Reduced integration-related incidents by 30% through MUnit testing and rigorous quality assurance protocols.",
        "Resolved over 50 critical system defects, delivering well-documented, maintainable code that strengthened overall system stability."
      ],
    },
    SpiralBlue: {
      title: "Machine Learning Developer",
      company: "@Spiral Blue",
      dates: "November 2021 - July 2022",
      description: [
        "Developed machine learning models for Earth observation satellites, efficiently handling datasets exceeding 100GB.",
        "Built and deployed full-stack solutions using Azure, Docker, and React to integrate predictive analytics.",
        "Achieved 95% prediction accuracy through algorithm optimization tailored to real-world data challenges.",
        "Tested machine learning algorithms and prepared against real-world data sets."
      ],
    },
    BuzzyBuzz: {
      title: "Full Stack Engineer & Solutions Designer",
      company: "@Buzzy Buzz",
      dates: "August 2020 - February 2021",
      description: [
        "Designed and implemented full-stack features using Node.js, MeteorJS, and React Native, creating a user-friendly platform for over 1,000 users.",
        "Enhanced system performance and scalability, reducing latency by using data structures and algorithms.",
        "Analyzed, designed, and delivered innovative technical solutions effectively to customers.",
        "Delivered an error-free release rate by resolving user interface and logic bugs during the development lifecycle."
      ],
    },
    Stomble: {
      title: "Full Stack Engineer",
      company: "@Stomble",
      dates: "June 2019 - February 2020",
      description: [
        "Developed and implemented wireframes into a video web application platform using ReactJS and MaterialUI, integrated back-end functionality through Redux and AWS.",
        "Worked in an agile SCRUM environment to make deliverables per sprint.",
        "Assisted in system analysis and reviewed document specifications and wireframe designs to meet changing requirements.",
        "Tested solutions using Google Developer Tools and Redux debugger tools."
      ],
    },
  };

  return (
    <section
      className="min-h-screen bg-black text-white py-12 md:py-24 px-5 flex flex-col items-center justify-center"
      id="experience"
      style={{
        backgroundImage: "url('./images/experience-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center md:items-start">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left text-[#4EF17A]">
          02. Where I've Worked
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Sidebar without Scroll */}
        <div className="md:w-1/5 max-h-[100%] overflow-hidden flex flex-col items-center md:items-start">
          <ul className="space-y-6 w-full">
            {Object.keys(jobs).map((jobKey) => (
              <li
                key={jobKey}
                className={`cursor-pointer py-4 px-6 rounded-lg text-lg md:text-xl text-center md:text-left ${
                  activeJob === jobKey
                    ? "bg-green-500 text-black"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setActiveJob(jobKey)}
              >
                {jobKey}
              </li>
            ))}
          </ul>
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 mt-10 md:mt-0 mx-5">
          <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            {jobs[activeJob].title}{" "}
            <span className="text-[#00F952]">{jobs[activeJob].company}</span>
          </h3>
          <p className="text-lg md:text-xl text-white mt-2 text-center md:text-left">
            {jobs[activeJob].dates}
          </p>
          <ul className="mt-6 space-y-6 md:space-y-8 text-lg">
            {jobs[activeJob].description.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-[#00F952] text-2xl">▹</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-3/4 hidden md:flex justify-center">
          <Image
            src="./images/city.svg"
            alt="Work Experience Illustration"
            height={1200}
            width={1200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
