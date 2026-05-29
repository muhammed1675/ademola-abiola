import React from 'react';
import { motion } from 'framer-motion';
interface LoadingScreenProps {
  onComplete: () => void;
}
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[3000] flex flex-col items-center justify-center bg-bg-primary"
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: 0
      }}
      transition={{
        delay: 2.4,
        duration: 0.7,
        ease: 'easeInOut'
      }}
      onAnimationComplete={onComplete}>
      
      <motion.h1
        className="font-heading text-accent text-center px-6"
        style={{
          fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.01em'
        }}
        initial={{
          opacity: 0,
          y: 24
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }}>
        
        Coach Ademola Abiola
      </motion.h1>

      {/* Loader bar under the name */}
      <motion.div
        className="mt-7 h-[3px] w-48 overflow-hidden rounded-full bg-edge"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.5,
          duration: 0.4
        }}>
        
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{
            width: '0%'
          }}
          animate={{
            width: '100%'
          }}
          transition={{
            delay: 0.5,
            duration: 1.7,
            ease: 'easeInOut'
          }} />
        
      </motion.div>

      <motion.span
        className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-text-secondary"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.7,
          duration: 0.5
        }}>
        
        Loading
      </motion.span>
    </motion.div>);

}