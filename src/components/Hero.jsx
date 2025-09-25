import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Plasma from "./Plasma";
import { styles } from "../styles";
import TiltedCard from "./TiltedCard";
import Particles from "./Particles";
import { tr } from "motion/react-client";
import { SumitDP } from "../assets";

const Hero = () => (
  <section
    className="relative w-full min-h-screen"
    aria-label="Hero Section"
    style={{ background: "transparent", overflow: "hidden" }}
  >
    <div style={{ width: '100%', height: '0px', position: 'relative' }}>
  <Particles
  particleColors={['#ffffff', '#ffffff']}
  particleCount={200}
  particleSpread={10}
  speed={0.1}
  particleBaseSize={100}
  moveParticlesOnHover={true}
  particleHoverFactor={3}
  alphaParticles={false}
  disableRotation={false}
/>
</div>

    {/* Main Hero Content */}
    <div className="relative z-1 w-full max-w-7xl mx-auto px-9 py-24 flex flex-col min-h-[400px] justify-center">
      <div className="flex flex-row items-start gap-20">

        {/* Accent Line + Title/Text in one flex block */}
        <div className="flex flex-row items-start">
          {/* Accent Line */}
          <div className="flex flex-col justify-center items-center select-none">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          {/* Title + Typewriter */}
          <div className="ml-10"> {/* Adjust ml-2 for small gap, or remove for zero gap */}
            <h1 className={`${styles?.heroHeadText || "text-5xl font-bold"} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Sumit</span>
            </h1>
            <div className={`${styles?.heroSubText || "text-xl"} mt-3 text-white-100`}>
              I do&nbsp;
              <Typewriter
                options={{
                  strings: [
                    "Data Scientist And Analyst",
                    "AI & ML Engineer",
                    "Backend Developer",
                    "Generative AI Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: "natural",
                  pauseFor: 1300,
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Tilted Card */}
        <div className="flex-shrink-0">
          <TiltedCard
            imageSrc={SumitDP}
            altText="Sumit Kumar"
            captionText="Sumit Kumar"
            containerHeight="400px"
            containerWidth="500px"
            imageHeight="500px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
      </div>
    </div>

    {/* Optional Scroll Down Indicator */}
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
