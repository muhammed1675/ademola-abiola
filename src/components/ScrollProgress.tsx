import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3
  });
  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] w-full z-[9998] origin-left rounded-r-sm"
      style={{
        scaleX,
        background:
        'linear-gradient(90deg, var(--accent), var(--accent-light))'
      }} />);


}