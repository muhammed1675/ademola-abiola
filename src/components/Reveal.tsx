import React from 'react';
import { motion, Variants } from 'framer-motion';
type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom';
interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3' | 'span';
}
const offsets: Record<
  Direction,
  {
    x?: number;
    y?: number;
    scale?: number;
  }> =
{
  up: {
    y: 50
  },
  down: {
    y: -50
  },
  left: {
    x: -45
  },
  right: {
    x: 45
  },
  zoom: {
    scale: 0.82
  }
};
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div'
}: RevealProps) {
  const o = offsets[direction];
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: o.x ?? 0,
      y: o.y ?? 0,
      scale: o.scale ?? 1
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '0px 0px -40px 0px'
      }}>
      
      {children}
    </MotionTag>);

}