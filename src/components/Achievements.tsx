import React, { lazy } from 'react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { ACHIEVEMENTS } from '../data/content';
const dirs = ['left', 'up', 'right', 'right', 'up', 'left'] as const;
export function Achievements() {
  return (
    <section id="achievements" className="bg-bg-primary py-[5.5rem]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle direction="down">Achievements</SectionTitle>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((card, i) =>
          <Reveal
            key={card.title}
            as="article"
            direction={dirs[i % dirs.length]}
            delay={(i % 3 + 1) * 0.1}
            className="group overflow-hidden rounded-[10px] border border-edge bg-bg-card transition-all duration-300 hover:-translate-y-[6px] hover:border-accent hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
            
              <img
              src={card.img}
              alt={card.title}
              loading="lazy"
              className="h-[210px] w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" />
            
              <div className="p-[1.35rem]">
                <h3 className="font-heading mb-[0.6rem] text-[1.1rem] font-semibold leading-[1.35] text-text-primary">
                  {card.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.7] text-text-secondary">
                  {card.body}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}