import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
export interface GalleryImage {
  src: string;
  alt: string;
  portrait?: boolean;
}
// SINGLE SOURCE OF TRUTH — the grid and the lightbox both read from this exact
// array, so clicking, deleting, or reordering an entry always affects the
// intended image. To remove an image, delete its line below.
export const galleryImages: GalleryImage[] = [
{
  src: '/assets/img/ademola-abiola-table-tennis-coach-dubai-3.jpg',
  alt: 'Sprint action',
  portrait: true
},
{
  src: '/assets/img/kids-table-tennis-training-dubai.jpg',
  alt: 'Kids table tennis training'
},
{
  src: '/assets/img/ping-perfect-home-table-tennis-training-dubai.jpg',
  alt: 'Home table tennis training'
},
{
  src: '/assets/img/ping-perfect-table-tennis-coaching-dubai.jpg',
  alt: 'Table tennis coaching'
},
{
  src: '/assets/img/private-table-tennis-training-dubai.jpg',
  alt: 'Private table tennis training'
},
{
  src: '/assets/img/dubai-home-table-tennis-coaching.jpg',
  alt: 'Dubai Home table tennis coaching'
},
{
  src: '/assets/img/structured-table-tennis-training-dubai.jpg',
  alt: 'Structured table tennis training'
},
{
  src: '/assets/img/ping-perfect-private-coaching-dubai.jpg',
  alt: 'Ping Perfect private coaching'
},
{
  src: '/assets/img/table-tennis-lessons-for-kids-dubai.jpg',
  alt: 'Table tennis lessons for kids'
},
{
  src: '/assets/img/professional-home-coaching-dubai.jpg',
  alt: 'Professional home coaching'
},
{
  src: '/assets/img/professional-table-tennis-coach-dubai.jpg',
  alt: 'Professional table tennis coach'
},
{
  src: '/assets/img/coach-ademola-table-tennis-coaching-dubai.jpg',
  alt: 'Coach Ademola table tennis coaching'
},
{
  src: '/assets/img/img1.jpg',
  alt: 'Coach Ademola'
},
{
  src: '/assets/img/img3.jpg',
  alt: 'Training session'
},
{
  src: '/assets/img/img4.jpg',
  alt: 'Podium moment'
},
{
  src: '/assets/img/img5.jpg',
  alt: 'Starting blocks'
},
{
  src: '/assets/img/img6.jpg',
  alt: 'Team celebration'
},
{
  src: '/assets/img/img7.jpg',
  alt: 'Coaching session'
},
{
  src: '/assets/img/img8.jpg',
  alt: 'Award ceremony'
},
{
  src: '/assets/img/img9.jpg',
  alt: 'Student achievement'
}];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-[5.5rem] bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) =>
          <motion.button
            key={img.src + i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`group relative rounded-[10px] overflow-hidden cursor-pointer ${img.portrait ? 'aspect-[2/3] sm:aspect-[3/4]' : 'aspect-square'}`}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '0px 0px -40px 0px'
            }}
            transition={{
              duration: 0.6,
              delay: i % 6 * 0.06,
              ease: [0.22, 1, 0.36, 1]
            }}>
            
              <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.09]" />
            
              <div
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundColor: 'rgba(39,174,96,0.82)'
              }}>
              
                <span className="text-[0.85rem] font-semibold text-white uppercase tracking-[0.12em]">
                  View
                </span>
              </div>
            </motion.button>
          )}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex} />
      
    </section>);

}