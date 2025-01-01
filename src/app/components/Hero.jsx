"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const goToExperiencePage = () => {
    router.push('/#experience'); // Navigate to /experience page
  };

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 bg-black text-[#4EF17A] min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center items-center md:items-start mx-8 md:mx-24 lg:mx-48 relative z-10">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white leading-tight text-center md:text-left animate-fadeIn">
          Hi there 👋, my name is...
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 text-center md:text-left hero-heading">
          <span className="typing-animation">Wasif Hossain</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl lg:text-2xl font-extrabold text-white leading-relaxed text-center md:text-left">
          I build things for the world.
        </p>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-white leading-relaxed text-center md:text-left">
          A dynamic Software Engineer with over 4 years of professional experience 
          crafting scalable, high-performing applications. Passionate about delivering 
          innovative solutions that merge cutting-edge technology with seamless user experiences.
        </p>
        <button
          onClick={goToExperiencePage}
          className="mt-10 bg-transparent border border-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-black transition-all"
        >
          Check Out My Experience 👇
        </button>
      </div>

      {/* Right Content (Globe Image) */}
      <div className="hidden md:flex justify-center">
        <Image
          src="/images/World.svg"
          alt="Globe"
          height={800}
          width={800}
          className=""
        />
      </div>
    </section>
  );
};

export default Hero;
