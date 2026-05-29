import React, { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type { GalleryImage } from './Gallery';
interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}
export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const isOpen = index !== null;
  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange]
  );
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, go, onClose]);
  return (
    <AnimatePresence>
      {isOpen && index !== null &&
      <motion.div
        className="fixed inset-0 z-[2000] flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(0,0,0,0.96)'
        }}
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
        onClick={onClose}>
        
          <button
          className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'rgba(39,174,96,0.8)'
          }}
          aria-label="Close lightbox"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}>
          
            <XIcon size={22} />
          </button>
          <button
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'rgba(39,174,96,0.8)'
          }}
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}>
          
            <ChevronLeftIcon size={22} />
          </button>
          <button
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'rgba(39,174,96,0.8)'
          }}
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}>
          
            <ChevronRightIcon size={22} />
          </button>

          <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-[10px]"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}
          onClick={(e) => e.stopPropagation()} />
        

          <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.85rem] tracking-[0.05em] px-4 py-1.5 rounded-[20px]"
          style={{
            color: 'rgba(255,255,255,0.75)',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}>
          
            {index + 1} / {images.length}
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}