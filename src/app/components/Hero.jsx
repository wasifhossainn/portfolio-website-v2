import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="grid grid-cols-2 bg-black text-green-400 md:grid-cols-2 sm:grid-cols-1 min-h-screen relative -my-28"
      id="hero"
      style={{
        backgroundImage: "url('/images/background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start mx-48 relative z-10">
        <h1 className="text-2xl font-bold text-white">
          Hi there 👋, my name is...
        </h1>
        <Image 
          src="/images/profile-photo.svg"
          alt="Profile Photo"
          height={300}  // Increased size
          width={300}    // Increased size
        />
        <h2 className="text-5xl font-extrabold mt-4">Wasif Hossain</h2>
        <p className="mt-6 text-3xl font-extrabold text-white">
          I build things for the world.
        </p>
        <p className="text-lg mt-4 text-white">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
        <button className="mt-8 bg-transparent border border-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-black">
          Check out my portfolio!
        </button>
      </div>

      {/* Right Content (Globe Image) */}
      <div className="flex justify-center">
        <Image
          src="/images/World.svg"
          alt="Globe"
          height={800}  // Increased size
          width={800}    // Increased size
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
