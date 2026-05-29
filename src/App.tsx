import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useScreenInit } from './useScreenInit';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
export function App() {
  useScreenInit();
  const [loading, setLoading] = useState(true);
  return (
    <div className="min-h-screen w-full bg-bg-primary font-body text-text-primary">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>);

}