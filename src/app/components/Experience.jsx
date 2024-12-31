"use client";
import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [activeJob, setActiveJob] = useState("IBM");

  const jobs = {
    IBM: {
      title: "Senior Software Engineer",
      company: "@IBM",
      dates: "July 2021 - Present",
      description: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
        "Collaborate with cross-functional teams to ensure seamless delivery of software solutions.",
        "Implement modern development practices to enhance system performance and reliability.",
      ],
    },
    SpiralBlue: {
      title: "Developer",
      company: "@Spiral Blue",
      dates: "May 2020 - June 2021",
      description: [
        "Designed and developed software systems for satellite data processing.",
        "Optimized algorithms for geospatial data analysis to improve accuracy.",
      ],
    },
    BuzzyBuzz: {
      title: "Intern",
      company: "@Buzzy Buzz",
      dates: "June 2019 - April 2020",
      description: [
        "Assisted in the development of marketing automation tools.",
        "Gained hands-on experience in frontend and backend development.",
      ],
    },
    Stomble: {
      title: "Intern",
      company: "@Stomble",
      dates: "June 2019 - April 2020",
      description: [
        "Assisted in the development of marketing automation tools.",
        "Gained hands-on experience in frontend and backend development.",
      ],
    },
  };

  return (
    <section className="min-h-screen bg-black text-white py-12 md:py-24 px-5 flex flex-col items-center justify-center" 
      style={{
        backgroundImage: "url('/images/experience-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    id="experience">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">02. Where I've Worked</h2>
        <Image
          src="/images/line-node.svg"
          alt="Profile Illustration"
          height={100}
          width={300}
          className="mx-8 -mt-8 md:mt-0"
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Sidebar with Scroll & Green Scrollbar */}
        <div className="md:w-1/5 max-h-[600px] overflow-y-auto flex flex-col items-center">
          <ul className="space-y-6">
            {Object.keys(jobs).map((jobKey) => (
              <li
                key={jobKey}
                className={`cursor-pointer py-4 px-6 rounded-lg text-lg md:text-xl text-center ${
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
        <div className="md:w-2/3 mt-10 md:mt-0 mx-10">
          <h3 className="text-3xl md:text-4xl font-bold">
            {jobs[activeJob].title}{" "}
            <span className="text-[#00F952]">{jobs[activeJob].company}</span>
          </h3>
          <p className="text-lg md:text-xl text-white mt-2">{jobs[activeJob].dates}</p>
          <ul className="mt-6 space-y-4 md:space-y-6 text-lg">
            {jobs[activeJob].description.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-[#00F952] text-2xl">▹</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-3/4">
          <Image
            src="/images/city.svg"
            alt="Work Experience Illustration"
            height={1200} // Increased height
            width={1200} // Increased width
            className="md:w-full md:h-auto mt-10 md:mt-0" 
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
