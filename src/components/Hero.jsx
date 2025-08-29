import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Plasma from "./Plasma";
import ProfileCard from "./ProfileCard";
import { styles } from "../styles";

const Hero = () => (
  <section
    className="relative w-full min-h-screen"
    aria-label="Hero Section"
    style={{ background: "transparent", overflow: "hidden" }}
  >
    {/* Fullscreen Plasma Background */}
    <div className="plasma-bg" aria-hidden="true">
      <Plasma
        color="#915EFF"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
        // This style ensures the canvas is always filling its parent
        style={{ width: "100%", height: "100%" }}
      />
    </div>

    {/* Main Hero Content */}
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-24" style={{ minHeight: 600 }}>
      {/* Left: Text and Typewriter */}
      <div className="flex flex-col items-start flex-1 gap-8">
        <div className="flex flex-row items-start gap-5">
          {/* Accent Line */}
          <div className="flex flex-col justify-center items-center mt-2 select-none">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          {/* Title & Typewriter */}
          <div>
            <h1 className={`${styles?.heroHeadText || "text-5xl font-bold"} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Pranay</span>
            </h1>
            <p className={`${styles?.heroSubText || "text-xl"} mt-3 text-white-100`}>
              I do&nbsp;
              <Typewriter
                options={{
                  strings: [
                    "UI/UX Designer",
                    "Ai & ML",
                    "Frontend Developer",
                    "Data Analyst",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: "natural",
                  pauseFor: 1300,
                }}
              />
            </p>
          </div>
        </div>
        {/* (Optional) Call-to-action */}
        {/* <a href="#projects" className="mt-6 px-8 py-3 rounded-lg bg-[#915EFF] text-white font-semibold shadow hover:bg-[#7a4fd3] transition">View Projects</a> */}
      </div>
      {/* Right: Profile Card */}
      <div className="flex-shrink-0 w-full max-w-xs">
        <ProfileCard />
      </div>
    </div>

    {/* Scroll Down Indicator */}
    <div className="absolute bottom-10 left-0 right-0 w-full flex justify-center items-center z-20">
      <a href="#about" aria-label="Scroll to About section">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-white/20 backdrop-blur-md">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
