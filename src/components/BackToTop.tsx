import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUpIcon } from 'lucide-react';
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible &&
      <motion.button
        aria-label="Back to top"
        onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        }
        className="fixed bottom-7 right-7 z-[999] flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-[0_4px_16px_rgba(39,174,96,0.35)] transition-colors hover:bg-accent-dark"
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: 20
        }}
        whileHover={{
          y: -4
        }}>
        
          <ChevronUpIcon size={20} strokeWidth={2.5} />
        </motion.button>
      }
    </AnimatePresence>);

}