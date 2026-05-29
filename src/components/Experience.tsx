import React from 'react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { TIMELINE } from '../data/content';
export function Experience() {
  return (
    <section id="experience" className="bg-bg-primary py-[5.5rem]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>Experience</SectionTitle>

        <div className="relative mx-auto max-w-[740px]">
          {TIMELINE.map((item, i) =>
          <Reveal
            key={item.title}
            direction={i % 2 === 0 ? 'left' : 'right'}
            delay={i % 2 === 0 ? 0.1 : 0.2}
            className="relative mb-14 grid grid-cols-1 items-start gap-2 last:mb-0 sm:grid-cols-[160px_1fr] sm:gap-6">
            
              <div className="text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-accent sm:pt-[0.15rem] sm:pr-5 sm:text-right">
                {item.year}
              </div>
              <div className="border-l-2 border-edge pl-4 sm:pl-5">
                <h3 className="font-heading mb-2 text-[1.15rem] font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-[0.97rem] leading-[1.75] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}