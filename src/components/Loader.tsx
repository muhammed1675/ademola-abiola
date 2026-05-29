import React from 'react';
import { motion } from 'framer-motion';
interface LoaderProps {
  onDone: () => void;
}
export function Loader({ onDone }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#0a1f0f'
      }}
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: 0
      }}
      transition={{
        delay: 2.3,
        duration: 0.7,
        ease: 'easeInOut'
      }}
      onAnimationComplete={onDone}>
      
      <motion.div
        className="flex flex-col items-center gap-3 text-center"
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
        
        <motion.span
          className="text-5xl"
          animate={{
            rotate: [-15, 15],
            scale: [0.9, 1.1]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}>
          
          🏓
        </motion.span>
        <h2 className="font-heading font-bold text-white leading-tight tracking-tight text-[clamp(1.6rem,5vw,2.6rem)]">
          Coach Ademola Abiola
        </h2>
        <p className="text-[0.8rem] font-medium tracking-[0.18em] uppercase text-accent-light mb-2">
          Certified Table Tennis Coach · Dubai
        </p>
        <div
          className="w-[220px] h-[3px] rounded-full overflow-hidden"
          style={{
            backgroundColor: 'rgba(255,255,255,0.12)'
          }}>
          
          <motion.div
            className="h-full rounded-full"
            style={{
              background:
              'linear-gradient(90deg, var(--accent), var(--accent-light))'
            }}
            initial={{
              width: '0%'
            }}
            animate={{
              width: '100%'
            }}
            transition={{
              duration: 1.9,
              ease: [0.4, 0, 0.2, 1]
            }} />
          
        </div>
      </motion.div>
    </motion.div>);

}