import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/profile.png"; // Update as needed

const Hero = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;
    if (window.VANTA && window.VANTA.CLOUDS) {
      effect = window.VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }
    const handleResize = () => {
      if (vantaRef.current) {
        vantaRef.current.style.width = window.innerWidth + "px";
        vantaRef.current.style.height = window.innerHeight + "px";
      }
      if (effect && effect.resize) effect.resize();
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      if (effect) effect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto" style={{ overflow: "hidden" }}>
      {/* Background Vanta Effect */}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-8`}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Left Accent */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full" style={{ background: "#38B6FF" }} />
          <div
            className="w-1 sm:h-80 h-40"
            style={{ background: "linear-gradient(to bottom, #263159, transparent)" }}
          />
        </div>
        {/* Main Headline and Typewriter */}
        <div>
          <h1
            className={`${styles.heroHeadText}`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              letterSpacing: "0.5px",
              color: "#263159",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#38B6FF", fontWeight: 900 }}>Pranay</span>
          </h1>
          <div
            className={`${styles.heroSubText} mt-3`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              color: "#6D7B8D",
              letterSpacing: "0.3px",
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            }}
          >
            I do{" "}
            <span style={{ color: "#38B6FF" }}>
              <Typewriter
                options={{
                  strings: [
                    "Data Analysis",
                    "AI & ML",
                    "Full Stack Development",
                    "UI/UX Design",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  pauseFor: 1000,
                }}
              />
            </span>
          </div>
        </div>
        {/* Profile Tilted Card beside the introduction */}
<div
  style={{
    width: "520px",                // Match new width
    minWidth: "520px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "320px",
    overflow: "visible",
  }}
>
  <TiltedCard
    containerHeight="400px"
    containerWidth="400px"          // Match new width
    imageHeight="400px"
    imageWidth="400px"              // Match new width
    rotateAmplitude={12}
    scaleOnHover={1.08}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent={true}
    overlayContent={
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(40,40,40,0.85)",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.1rem",
          borderRadius: "16px",
          padding: "10px 44px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.09)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        Pranay Kumar
      </div>
    }
  >
    <img
      src={profileImg}
      alt="Pranay's Profile"
      style={{
        width: "400px",             // Match new width
        height: "400px",
        objectFit: "cover",
        borderRadius: "24px",
        boxShadow: "0 2px 18px #26315930"
      }}
    />
  </TiltedCard>
</div>

        </div>
      {/* Animated Scroll Down Indicator */}
      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{ zIndex: 2 }}
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2"
            style={{ borderColor: "#6D7B8D" }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full"
              style={{ background: "#38B6FF", marginBottom: "4px" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
