// All copy reproduced verbatim from the source site. DO NOT alter wording.

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1600&q=80',
  about:
  'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=900&q=80'
};

export interface GalleryImage {
  src: string;
  alt: string;
  portrait?: boolean;
}

export const GALLERY: GalleryImage[] = [
{
  src: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=900&q=80',
  alt: 'Sprint action',
  portrait: true
},
{
  src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80',
  alt: 'Sprint action',
  portrait: true
},
{
  src: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=900&q=80',
  alt: 'Sprint action',
  portrait: true
},
{
  src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=900&q=80',
  alt: 'Sprint action',
  portrait: true
},
{
  src: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=900&q=80',
  alt: 'Kids table tennis training'
},
{
  src: 'https://images.unsplash.com/photo-1597737230860-6c4e8a5f5b2e?auto=format&fit=crop&w=900&q=80',
  alt: 'Home table tennis training'
},
{
  src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=900&q=80',
  alt: 'Table tennis coaching'
},
{
  src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=901&q=80',
  alt: 'Private table tennis training'
},
{
  src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=901&q=80',
  alt: 'Dubai Home table tennis coaching'
},
{
  src: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=901&q=80',
  alt: 'Structured table tennis training'
},
{
  src: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=901&q=80',
  alt: 'Ping Perfect private coaching'
},
{
  src: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=901&q=80',
  alt: 'Table tennis lessons for kids'
},
{
  src: 'https://images.unsplash.com/photo-1597737230860-6c4e8a5f5b2e?auto=format&fit=crop&w=901&q=80',
  alt: 'Professional home coaching'
},
{
  src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=901&q=80',
  alt: 'Professional table tennis coach'
},
{
  src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=902&q=80',
  alt: 'Coach Ademola table tennis coaching'
},
{
  src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=902&q=80',
  alt: 'Coach Ademola'
},
{
  src: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=902&q=80',
  alt: 'Training session'
},
{
  src: 'https://images.unsplash.com/photo-1597737230860-6c4e8a5f5b2e?auto=format&fit=crop&w=902&q=80',
  alt: 'Podium moment'
},
{
  src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=902&q=80',
  alt: 'Starting blocks'
},
{
  src: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=902&q=80',
  alt: 'Team celebration'
},
{
  src: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=903&q=80',
  alt: 'Coaching session'
},
{
  src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=903&q=80',
  alt: 'Award ceremony'
},
{
  src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=903&q=80',
  alt: 'Student achievement'
}];


export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export const TIMELINE: TimelineItem[] = [
{
  year: '2019 – Present',
  title: 'Professional Table Tennis Coach',
  body: 'Delivering private and home table tennis coaching in Dubai for kids and adults, built on a structured training system focused on fundamentals, footwork, and match development. Consistently developing players from beginner level into confident, technically sound, and competition-ready performers.'
},
{
  year: 'Founder & Head Coach',
  title: 'Ping Perfect Table Tennis Coaching',
  body: 'Built a structured coaching platform delivering professional table tennis coaching in Dubai, with a clear progression pathway and consistent training standards. Known for producing disciplined players with strong technical foundations and measurable improvement.'
},
{
  year: '2024 – Present',
  title: 'Head Official, Dubai School Games',
  body: 'Led the table tennis division, overseeing competition standards and supporting player development within Dubai’s school sports system.'
},
{
  year: 'Ongoing',
  title: 'Competitive Table Tennis Player',
  body: 'Competitive playing background informing a coaching approach based on precision, discipline, and real match understanding.'
}];


export interface NewsCard {
  img: string;
  title: string;
  body: string;
}

export const ACHIEVEMENTS: NewsCard[] = [
{
  img: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=900&q=80',
  title: 'Student Success Stories',
  body: 'Every student I coach brings unique talent and determination. Through personalized training and mentorship, many have achieved remarkable success, competing at national and international levels.'
},
{
  img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=900&q=80',
  title: 'A Decade of Impact',
  body: "Over the years, I have trained both kids and adults to reach their full potential. My coaching has produced some of the country's top-performing students, who have excelled in national and international competitions."
},
{
  img: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=900&q=80',
  title: 'Dubai School Games 2024',
  body: 'Demonstrated remarkable talent and determination by leading players to the finals of the Dubai School Games 2024, showcasing skill, speed, and competitive spirit on an international stage.'
},
{
  img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80',
  title: 'WTT Championship',
  body: "Representing Nigeria as a Coach at the World Table Tennis Championship — alongside Africa's Number 1 player, a milestone moment in my coaching career."
},
{
  img: 'https://images.unsplash.com/photo-1597737230860-6c4e8a5f5b2e?auto=format&fit=crop&w=900&q=80',
  title: 'Rising Star Award 2025',
  body: "Received the Rising Star Award 2025 in recognition of commitment to nurturing talent and guiding players to reach their full potential, reflected through students' success on the international stage."
},
{
  img: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=900&q=80',
  title: 'Coaching in Action',
  body: 'Guiding students with precision, focus, and encouragement. Each session is designed to enhance skills, build confidence, and inspire players to reach their full potential.'
}];


export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
{
  text: '"5 stars table tennis coach. Coach Ademola coached me during the WTT Star Contender in Doha and we won a bronze medal in singles. High-level execution and structured preparation."',
  name: 'Aruna Quadri',
  role: 'Professional Athlete & Olympian'
},
{
  text: '"Coach Abiola has been training my son and me for the past 5 years. His techniques are very effective and his commitment to teaching is incredible. He is the best table tennis coach in Dubai."',
  name: 'Meenu Goenka',
  role: 'Parent & Beginner Player'
},
{
  text: '"Coach Ademola played a key role in my development. The training improved my technique, discipline, and match performance, helping me compete and win medals at World Table Tennis events."',
  name: 'Abdourahaman Ganiou',
  role: 'International Competitor'
}];


export const NAV_LINKS = [
{ href: '#hero', label: 'Home' },
{ href: '#about', label: 'About' },
{ href: '#experience', label: 'Experience' },
{ href: '#gallery', label: 'Gallery' },
{ href: '#achievements', label: 'Achievements' },
{ href: '#testimonials', label: 'Testimonials' },
{ href: '#contact', label: 'Contact' }];