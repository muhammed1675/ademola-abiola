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
        className="fixed bottom-7 right-7 max-[520px]:bottom-5 max-[520px]:right-5 w-11 h-11 bg-accent text-white rounded-full flex items-center justify-center z-[999] shadow-[0_4px_16px_rgba(39,174,96,0.35)] transition-colors hover:bg-accent-dark"
        aria-label="Back to top"
        onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        }
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