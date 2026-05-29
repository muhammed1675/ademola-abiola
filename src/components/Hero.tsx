import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '../data/content';
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 220]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.12]);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_top]"
        style={{
          backgroundImage: `url('${IMAGES.hero}')`,
          y,
          scale
        }} />
      
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
          'linear-gradient(160deg, rgba(5,20,10,0.82) 0%, rgba(10,50,25,0.62) 60%, rgba(5,20,10,0.80) 100%)'
        }} />
      

      <div className="relative z-[1] max-w-[820px] px-6 text-center">
        <motion.h1
          className="font-heading mb-5 text-white"
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.08
          }}
          initial={{
            opacity: 0,
            y: 32
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

        <motion.p
          className="mx-auto mb-9 max-w-[600px] font-normal leading-[1.7] text-white/[0.78]"
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)'
          }}
          initial={{
            opacity: 0,
            y: 32
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          Private Table Tennis Coaching in Dubai | Structured Home &amp; Private
          Sessions for Kids and Adults | Focused on Fundamentals, Footwork &amp;
          Match Development
          <br />
          Founder, Ping Perfect — Professional Coaching System
        </motion.p>

        <motion.a
          href="#contact"
          onClick={handleClick}
          className="inline-block rounded-[4px] bg-accent px-9 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-accent-dark hover:shadow-[0_12px_32px_rgba(39,174,96,0.3)]"
          initial={{
            opacity: 0,
            y: 32
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          Join My Training
        </motion.a>
      </div>
    </section>);

}