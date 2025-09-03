import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from './components';
import PillNav from './components/PillNav';
import logo from '/src/assets/profile-icon.png';
import TargetCursor from './components/TargetCursor';
import { SumitDP } from './assets';
import LightRays from './components/LightRays'; // <--- Import your LightRays component

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ordeals", href: "#experience" },
  { label: "undertakings", href: "#works" },
  { label: "Tech", href: "#tech" },
  { label: "Reach", href: "#contact" },
  { label: "Resume", href: "/Resume.pdf" },
];

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* Custom Cursor at the top! */}
      <TargetCursor spinDuration={3} hideDefaultCursor={true} />

      <div className="relative z-0 bg-primary" style={{ minHeight: "100vh" }}>
        {/* Animated light rays background */}
        <LightRays
  raysOrigin="top-center"
  raysColor="#ffffff"
  raysSpeed={1.2}
  lightSpread={2.9}
  rayLength={1.1}
  followMouse={false}
  mouseInfluence={0.05}
  noiseAmount={0.1}
  distortion={0.06}
  className="custom-rays"
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    pointerEvents: 'none'
  }}
/>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <PillNav
            logo={SumitDP}
            logoAlt="Company Logo"
            items={navItems}
            activeHref="#home"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
          <div className="main-content" style={{ position: 'relative', zIndex: 2 }}>
            <section id="home" style={{ minHeight: "100vh" }}>
              <Hero />
            </section>
            <section id="about" style={{ minHeight: "100vh" }}>
              <About />
            </section>
            <section id="experience" style={{ minHeight: "100vh" }}>
              <Experience />
            </section>
            <section id="works" style={{ minHeight: "100vh" }}>
              <Works />
            </section>
            <section id="tech" style={{ minHeight: "100vh" }}>
              <Tech />
            </section>
            <section id="contact" style={{ minHeight: "100vh" }}>
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
