import React, { lazy } from 'react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { IMAGES } from '../data/content';
export function About() {
  return (
    <section id="about" className="bg-bg-secondary py-[5.5rem]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle direction="down">About</SectionTitle>

        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="space-y-5">
            <Reveal direction="left" delay={0.1}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary">
                <strong className="font-semibold text-text-primary">
                  I’m Coach Ademola Abiola
                </strong>
                , a professional table tennis coach in Dubai specializing in
                private and home table tennis coaching for kids and adults.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary">
                I deliver{' '}
                <strong className="font-semibold text-text-primary">
                  structured table tennis coaching in Dubai
                </strong>
                , focused on fundamentals, footwork, and match
                development—helping players progress from beginner to
                competitive level with consistency.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.32}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary">
                I’ve worked with kids, teens, and adults across Dubai,
                developing confident and technically sound players, with several
                progressing into competitive environments.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.44}>
              <p className="text-[1.05rem] leading-[1.85] text-text-secondary">
                As the founder of{' '}
                <strong className="font-semibold text-text-primary">
                  Ping Perfect
                </strong>
                , I provide private table tennis coaching in Dubai, bringing
                professional training directly to your home or private facility.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.56}>
              <p className="pt-2 text-[1.05rem] leading-[1.85] text-text-secondary">
                <strong className="font-semibold text-text-primary">
                  📍 Dubai
                </strong>
                <br />
                Private sessions available across home and private facilities.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src={IMAGES.about}
                alt="Coach Ademola Abiola"
                loading="lazy"
                className="h-full w-full object-cover object-[center_top] transition-transform duration-[600ms] hover:scale-[1.04]" />
              
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}