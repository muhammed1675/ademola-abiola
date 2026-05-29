import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChapterDivider } from './components/ChapterDivider';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
export function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full min-h-full bg-bg-primary overflow-x-hidden">
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <ChapterDivider label="The Story Begins" />
        <About />
        <ChapterDivider label="The Journey" />
        <Experience />
        <ChapterDivider label="Captured Moments" />
        <Gallery />
        <ChapterDivider label="The Milestones" />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>);

}