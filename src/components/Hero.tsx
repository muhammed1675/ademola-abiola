import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_top]"
        style={{
          backgroundImage:
          "url('/assets/img/ademola-abiola-table-tennis-coach-dubai-3.jpg')",
          y
        }} />
      
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
          'linear-gradient(160deg, rgba(5,20,10,0.82) 0%, rgba(10,50,25,0.62) 60%, rgba(5,20,10,0.80) 100%)'
        }} />
      
      <div className="relative z-[1] text-center px-6 max-w-[820px]">
        <motion.h1
          className="font-heading font-bold tracking-tight leading-[1.08] text-white mb-5 text-[clamp(2.4rem,7vw,5.5rem)]"
          initial={{
            opacity: 0,
            y: 32
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          Coach Ademola Abiola
        </motion.h1>
        <motion.p
          className="text-[clamp(0.9rem,1.8vw,1.1rem)] leading-[1.7] mb-9 max-w-[600px] mx-auto"
          style={{
            color: 'rgba(255,255,255,0.78)'
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
            duration: 1.2,
            delay: 0.28,
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
          onClick={scrollToContact}
          className="inline-block px-9 py-3.5 bg-accent text-white text-[0.85rem] font-semibold tracking-[0.08em] uppercase rounded transition-all duration-300 hover:bg-accent-dark hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(39,174,96,0.3)]"
          initial={{
            opacity: 0,
            y: 32
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2,
            delay: 0.52,
            ease: [0.22, 1, 0.36, 1]
          }}>
          
          Join My Training
        </motion.a>
      </div>
    </section>);

}