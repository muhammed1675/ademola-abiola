import React from 'react';
import { motion } from 'framer-motion';
type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'rotate';
interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'article' | 'section' | 'li';
  amount?: number;
}
const offsets: Record<
  Direction,
  {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
  }> =
{
  up: {
    opacity: 0,
    y: 50
  },
  down: {
    opacity: 0,
    y: -50
  },
  left: {
    opacity: 0,
    x: -40
  },
  right: {
    opacity: 0,
    x: 40
  },
  zoom: {
    opacity: 0,
    scale: 0.82
  },
  rotate: {
    opacity: 0,
    rotate: -6,
    scale: 0.9
  }
};
// Scroll reveal with slow, eased motion mirroring the source site's cubic-bezier feel.
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
  amount = 0.2
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={offsets[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0
      }}
      viewport={{
        once: true,
        amount
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </MotionTag>);

}