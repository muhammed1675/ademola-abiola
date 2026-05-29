import React, { lazy } from 'react';
import { Reveal } from './Reveal';
export function About() {
  return (
    <section id="about" className="py-[5.5rem] bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="down" as="h2">
          <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
            About
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal direction="left" delay={0.1}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary mb-5">
                <strong className="text-text-primary font-semibold">
                  I'm Coach Ademola Abiola
                </strong>
                , a professional table tennis coach in Dubai specializing in
                private and home table tennis coaching for kids and adults.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary mb-5">
                I deliver{' '}
                <strong className="text-text-primary font-semibold">
                  structured table tennis coaching in Dubai
                </strong>
                , focused on fundamentals, footwork, and match
                development—helping players progress from beginner to
                competitive level with consistency.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.32}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary mb-5">
                I've worked with kids, teens, and adults across Dubai,
                developing confident and technically sound players, with several
                progressing into competitive environments.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.44}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary mb-5">
                As the founder of{' '}
                <strong className="text-text-primary font-semibold">
                  Ping Perfect
                </strong>
                , I provide private table tennis coaching in Dubai, bringing
                professional training directly to your home or private facility.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.56}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary mt-5">
                <strong className="text-text-primary font-semibold">
                  📍 Dubai
                </strong>
                <br />
                Private sessions available across home and private facilities.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_var(--shadow-color)] aspect-[4/5] group">
              <img
                src="/assets/img/ademola-abiola-table-tennis-coach-dubai-Copy.png"
                alt="Coach Ademola Abiola"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}