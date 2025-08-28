import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import Prism from "./Prism.jsx";
import ProfileCard from "./ProfileCard.jsx";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Animated Prism Background */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="rotate"
          timeScale={0.4}
          height={2.5}
          baseWidth={4}
          scale={3.2}
          hueShift={6}
          colorFrequency={0.45}
          noise={0.15}
          glow={0.55}
        />
        {/* Optional: Overlay for extra readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>
      </div>

      {/* Main Hero Content */}
      <div 
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-24"
        style={{ minHeight: "600px" }}
      >
        <div className="flex flex-col items-start flex-1 gap-8">
          {/* Accent and Headline */}
          <div className="flex flex-row items-start gap-5">
            {/* Accent Line */}
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-40 sm:h-80 violet-gradient" />
            </div>
            {/* Main Title & Typewriter */}
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Pranay</span>
              </h1>
              <p className={`${styles.heroSubText} mt-3 text-white-100`}>
                I do&nbsp;
                <Typewriter
                  options={{
                    strings: [
                      "UI/UX Designer",
                      "Ai & ML",
                      "Frontend Developer",
                      "Data Analyst"
                    ],
                    autoStart: true,
                    loop: true,
                    loopCount: Infinity,
                    deleteSpeed: "natural",
                    pauseFor: 1000,
                  }}
                />
              </p>
            </div>
          </div>

          {/* (Optional) CTA Button Example */}
          {/* <a href="#projects" className="mt-6 px-8 py-3 rounded-lg bg-[#915EFF] text-white font-semibold shadow hover:bg-[#7a4fd3] transition">View Projects</a> */}
        </div>

        {/* Profile Card */}
        <div className="flex-shrink-0 w-full max-w-xs">
          <ProfileCard />
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-white/20 backdrop-blur-md">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
