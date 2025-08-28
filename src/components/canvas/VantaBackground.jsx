import React, { useEffect, useRef } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    // Ensure window.VANTA is available (scripts loaded)
    if (window.VANTA) {
      window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }
    // Optionally cleanup: window.VANTA...
  }, []);
  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh", position: "fixed", zIndex: 0, top: 0, left: 0 }} />;
};

export default VantaBackground;
