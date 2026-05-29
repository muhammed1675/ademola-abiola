import React from 'react';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { TESTIMONIALS } from '../data/content';
const dirs = ['left', 'zoom', 'right'] as const;
const delays = [0.1, 0.32, 0.56];
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-secondary py-[5.5rem]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle>What Players Say</SectionTitle>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) =>
          <Reveal
            key={t.name}
            direction={dirs[i]}
            delay={delays[i]}
            className="rounded-[10px] bg-accent p-7 transition-transform duration-300 hover:-translate-y-[5px]">
            
              <div className="mb-4 text-[1rem] tracking-[0.1em] text-white">
                ★★★★★
              </div>
              <p className="mb-5 text-[0.97rem] italic leading-[1.8] text-white/90">
                {t.text}
              </p>
              <div className="flex flex-col gap-[0.2rem] text-white">
                <strong className="text-[0.97rem] font-semibold">
                  {t.name}
                </strong>
                <span className="text-[0.82rem] opacity-75">{t.role}</span>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}