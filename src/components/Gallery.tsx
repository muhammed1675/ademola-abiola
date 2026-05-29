import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { Lightbox } from './Lightbox';
import { GALLERY } from '../data/content';
export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section id="gallery" className="bg-bg-secondary py-[5.5rem]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle direction="zoom">Gallery</SectionTitle>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {GALLERY.map((image, index) =>
          <motion.button
            key={index}
            type="button"
            className={`group relative cursor-pointer overflow-hidden rounded-[10px] ${image.portrait ? 'aspect-[2/3] sm:aspect-square' : 'aspect-[4/5] sm:aspect-square'}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${image.alt}`}
            initial={{
              opacity: 0,
              y: 28
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.15
            }}
            transition={{
              duration: 0.6,
              delay: index % 3 * 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}>
            
              <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.07]" />
            
              <div className="absolute inset-0 flex items-center justify-center bg-accent/[0.82] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-white">
                  View
                </span>
              </div>
            </motion.button>
          )}
        </div>
      </div>

      <Lightbox
        images={GALLERY}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex} />
      
    </section>);

}