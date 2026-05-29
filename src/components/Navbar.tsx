import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setOpen(false);
  };
  return (
    <motion.nav
      className={`fixed top-0 left-0 z-[1000] w-full transition-all duration-300 ${scrolled ? 'py-3 bg-[rgba(246,249,247,0.96)] shadow-[0_2px_24px_rgba(0,0,0,0.1)] backdrop-blur-md' : 'py-5 bg-[rgba(246,249,247,0.9)] shadow-[0_1px_12px_rgba(0,0,0,0.08)]'}`}
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="font-heading flex-shrink-0 whitespace-nowrap text-[1.15rem] font-bold tracking-[0.04em] text-accent">
          
          Coach A. Ademola
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="group relative pb-[3px] text-[0.82rem] font-medium uppercase tracking-[0.07em] text-text-primary">
              
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          )}
        </ul>

        <button
          className="z-[3000] flex h-7 w-7 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation">
          
          {open ? <XIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            className="fixed inset-0 z-[1500] bg-black/30 md:hidden"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setOpen(false)} />
          
            <motion.ul
            className="fixed top-0 right-0 z-[2000] flex h-screen w-[min(280px,75%)] flex-col gap-7 bg-bg-primary px-8 pt-20 pb-8 shadow-[-8px_0_40px_rgba(0,0,0,0.4)] md:hidden"
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}>
            
              {NAV_LINKS.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[0.82rem] font-medium uppercase tracking-[0.07em] text-text-primary">
                
                    {link.label}
                  </a>
                </li>
            )}
            </motion.ul>
          </>
        }
      </AnimatePresence>
    </motion.nav>);

}