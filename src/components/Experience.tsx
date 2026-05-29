import React from 'react';
import { Reveal } from './Reveal';
const items = [
{
  year: '2019 – Present',
  title: 'Professional Table Tennis Coach',
  text: 'Delivering private and home table tennis coaching in Dubai for kids and adults, built on a structured training system focused on fundamentals, footwork, and match development. Consistently developing players from beginner level into confident, technically sound, and competition-ready performers.',
  dir: 'left' as const,
  delay: 0.1
},
{
  year: 'Founder & Head Coach',
  title: 'Ping Perfect Table Tennis Coaching',
  text: 'Built a structured coaching platform delivering professional table tennis coaching in Dubai, with a clear progression pathway and consistent training standards. Known for producing disciplined players with strong technical foundations and measurable improvement.',
  dir: 'right' as const,
  delay: 0.2
},
{
  year: '2024 – Present',
  title: 'Head Official, Dubai School Games',
  text: 'Led the table tennis division, overseeing competition standards and supporting player development within Dubai\u2019s school sports system.',
  dir: 'left' as const,
  delay: 0.1
},
{
  year: 'Ongoing',
  title: 'Competitive Table Tennis Player',
  text: 'Competitive playing background informing a coaching approach based on precision, discipline, and real match understanding.',
  dir: 'right' as const,
  delay: 0.2
}];

export function Experience() {
  return (
    <section id="experience" className="py-[5.5rem] bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="up" as="h2">
          <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
            Experience
          </h2>
        </Reveal>
        <div className="max-w-[740px] mx-auto relative">
          {items.map((it, i) =>
          <Reveal key={i} direction={it.dir} delay={it.delay}>
              <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-6 mb-14 last:mb-0 relative items-start">
                <div className="text-[0.8rem] font-semibold text-accent md:text-right md:pr-5 pt-0.5 tracking-[0.04em] uppercase">
                  {it.year}
                </div>
                <div className="pl-4 md:pl-5 border-l-2 border-border-color">
                  <h3 className="font-heading text-[1.15rem] font-semibold text-text-primary mb-2">
                    {it.title}
                  </h3>
                  <p className="text-text-secondary text-[0.97rem] leading-[1.75]">
                    {it.text}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}