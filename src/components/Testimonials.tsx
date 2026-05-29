import React from 'react';
import { Reveal } from './Reveal';
const testimonials = [
{
  text: '"5 stars table tennis coach. Coach Ademola coached me during the WTT Star Contender in Doha and we won a bronze medal in singles. High-level execution and structured preparation."',
  author: 'Aruna Quadri',
  role: 'Professional Athlete & Olympian',
  dir: 'left' as const,
  delay: 0.1
},
{
  text: '"Coach Abiola has been training my son and me for the past 5 years. His techniques are very effective and his commitment to teaching is incredible. He is the best table tennis coach in Dubai."',
  author: 'Meenu Goenka',
  role: 'Parent & Beginner Player',
  dir: 'zoom' as const,
  delay: 0.32
},
{
  text: '"Coach Ademola played a key role in my development. The training improved my technique, discipline, and match performance, helping me compete and win medals at World Table Tennis events."',
  author: 'Abdourahaman Ganiou',
  role: 'International Competitor',
  dir: 'right' as const,
  delay: 0.5
}];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[5.5rem] bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="up" as="h2">
          <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
            What Players Say
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) =>
          <Reveal key={i} direction={t.dir} delay={t.delay}>
              <div className="bg-accent p-7 rounded-[10px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(39,174,96,0.25)] h-full">
                <div className="text-white text-base mb-4 tracking-[0.1em]">
                  ★★★★★
                </div>
                <p
                className="text-[0.97rem] leading-[1.8] mb-5 italic"
                style={{
                  color: 'rgba(255,255,255,0.9)'
                }}>
                
                  {t.text}
                </p>
                <div className="flex flex-col gap-0.5 text-white">
                  <strong className="font-semibold text-[0.97rem]">
                    {t.author}
                  </strong>
                  <span className="text-[0.82rem] opacity-75">{t.role}</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}