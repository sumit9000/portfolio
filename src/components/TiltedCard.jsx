import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TiltedCard = ({ children, style }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  return (
    <motion.div
      style={{
        width: 320 ,
        height: 400,
        background: "linear-gradient(135deg, #38B6FF 60%, #263159 100%)",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 24px #38B6FF55",
        cursor: "pointer",
        ...style,
        rotateX,
        rotateY,
        perspective: 800
      }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        x.set(px);
        y.set(py);
      }}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltedCard;
