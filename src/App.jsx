import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, StarsCanvas, Tech, Works } from './components';
import PillNav from './components/PillNav';
import logo from '/src/assets/profile-icon.png';

// Define your nav items OUTSIDE the component
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
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
          {/* Pass the navItems to PillNav */}
          <PillNav
            logo={logo}
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
          <div className="main-content">
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
          <div style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}>
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
