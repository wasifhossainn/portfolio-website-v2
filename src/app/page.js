import Image from "next/image";
import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (


    
    <main className="min-h-screen flex flex-col"
    >
        
    <Navbar/>
        <Hero/>
        <About />
        <Experience />
        <Work />
        <Contact />
        
      {/* <Footer /> */}
      </main>
      
  );
}
