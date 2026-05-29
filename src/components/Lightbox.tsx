import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { GalleryImage } from '../data/content';
interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}
export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const isOpen = index !== null;
  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onChange]);
  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % images.length);
  }, [index, images.length, onChange]);
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('no-scroll');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose, prev, next]);
  return (
    <AnimatePresence>
      {isOpen && index !== null &&
      <motion.div
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/[0.96]"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.25
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}>
        
          <button
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-accent/80 text-white transition-all duration-300 hover:scale-110 hover:bg-accent"
          aria-label="Close lightbox"
          onClick={onClose}>
          
            <XIcon size={22} />
          </button>

          <button
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-accent/80 text-white transition-all duration-300 hover:scale-110 hover:bg-accent sm:left-6"
          aria-label="Previous image"
          onClick={prev}>
          
            <ChevronLeftIcon size={24} />
          </button>

          <button
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-accent/80 text-white transition-all duration-300 hover:scale-110 hover:bg-accent sm:right-6"
          aria-label="Next image"
          onClick={next}>
          
            <ChevronRightIcon size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-[10px] object-contain"
            initial={{
              opacity: 0,
              scale: 0.94
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.94
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }} />
          
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-[20px] bg-black/50 px-4 py-1.5 text-[0.85rem] tracking-[0.05em] text-white/75">
            {index + 1} / {images.length}
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}