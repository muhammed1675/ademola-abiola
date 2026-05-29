import React, { lazy } from 'react';
import { Reveal } from './Reveal';
const cards = [
{
  img: '/assets/img/img1.jpg',
  alt: 'Students',
  title: 'Student Success Stories',
  text: 'Every student I coach brings unique talent and determination. Through personalized training and mentorship, many have achieved remarkable success, competing at national and international levels.',
  dir: 'left' as const,
  delay: 0.1
},
{
  img: '/assets/img/img9.jpg',
  alt: 'Coaching',
  title: 'A Decade of Impact',
  text: "Over the years, I have trained both kids and adults to reach their full potential. My coaching has produced some of the country's top-performing students, who have excelled in national and international competitions.",
  dir: 'up' as const,
  delay: 0.2
},
{
  img: '/assets/img/img9.jpg',
  alt: 'Dubai School Games',
  title: 'Dubai School Games 2024',
  text: 'Demonstrated remarkable talent and determination by leading players to the finals of the Dubai School Games 2024, showcasing skill, speed, and competitive spirit on an international stage.',
  dir: 'right' as const,
  delay: 0.32
},
{
  img: '/assets/img/img5.jpg',
  alt: 'WTT Championship',
  title: 'WTT Championship',
  text: "Representing Nigeria as a Coach at the World Table Tennis Championship — alongside Africa's Number 1 player, a milestone moment in my coaching career.",
  dir: 'right' as const,
  delay: 0.1
},
{
  img: '/assets/img/img8.jpg',
  alt: 'Rising Star Award',
  title: 'Rising Star Award 2025',
  text: "Received the Rising Star Award 2025 in recognition of commitment to nurturing talent and guiding players to reach their full potential, reflected through students' success on the international stage.",
  dir: 'up' as const,
  delay: 0.2
},
{
  img: '/assets/img/img7-Copy.jpg',
  alt: 'Coaching in Action',
  title: 'Coaching in Action',
  text: 'Guiding students with precision, focus, and encouragement. Each session is designed to enhance skills, build confidence, and inspire players to reach their full potential.',
  dir: 'left' as const,
  delay: 0.32
}];

export function Achievements() {
  return (
    <section id="achievements" className="py-[5.5rem] bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="down" as="h2">
          <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
            Achievements
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) =>
          <Reveal key={i} direction={c.dir} delay={c.delay} as="article">
              <article className="group bg-bg-card rounded-[10px] overflow-hidden border border-border-color transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_var(--shadow-color)] hover:border-accent h-full">
                <div className="overflow-hidden">
                  <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="w-full h-[210px] max-md:h-auto max-md:aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="p-[1.35rem]">
                  <h3 className="font-heading text-[1.1rem] font-semibold text-text-primary mb-2.5 leading-[1.35]">
                    {c.title}
                  </h3>
                  <p className="text-text-secondary text-[0.92rem] leading-[1.7]">
                    {c.text}
                  </p>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}