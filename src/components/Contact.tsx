import React from 'react';
import { Reveal } from './Reveal';
export function Contact() {
  return (
    <section id="contact" className="py-[5.5rem] bg-bg-primary text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="down" as="h2">
          <h2 className="font-heading font-bold tracking-tight text-center text-accent mb-14 text-[clamp(1.9rem,4.5vw,3rem)]">
            Get In Touch
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <p className="text-[1.05rem] text-text-secondary leading-[1.8] -mt-6 mb-10">
            Ready to train, level up, or just ask a question?
            <br />
            Reach out directly — I respond fast.
          </p>
        </Reveal>
        <Reveal direction="zoom" delay={0.2}>
          <div className="flex justify-center gap-5 flex-wrap mb-8">
            <a
              href="https://wa.me/971586398728?text=Hello%20Coach%20Ademola!%20I%20found%20your%20website%20and%20I%27d%20love%20to%20know%20more%20about%20your%20training%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded text-[0.95rem] font-semibold tracking-[0.03em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(37,211,102,0.35)]"
              style={{
                backgroundColor: '#25d366'
              }}>
              
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0">
                
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.59 5.93L0 24l6.23-1.63A11.88 11.88 0 0 0 12 23.78c6.63 0 12-5.37 12-11.78 0-3.15-1.23-6.11-3.48-8.52zM12 21.44c-1.78 0-3.53-.48-5.06-1.39l-.36-.21-3.7.97.99-3.6-.24-.37A9.42 9.42 0 0 1 2.56 12C2.56 6.76 6.76 2.56 12 2.56c2.52 0 4.9.98 6.69 2.76 1.78 1.78 2.76 4.16 2.76 6.68 0 5.24-4.2 9.44-9.44 9.44zm4.85-6.84c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.84 1.01-.15.17-.31.19-.57.06-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.28-1.53-1.43-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.18-.26.26-.43.08-.17.04-.32-.02-.46-.06-.13-.6-1.44-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.17 0-.46.07-.7.32-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.17 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.66.1.51-.08 1.53-.63 1.75-1.24.22-.61.22-1.13.15-1.24-.07-.11-.23-.18-.49-.31z" />
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/coach__ademola?igsh=eWFxdnJuN3VmZ3o4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded text-[0.95rem] font-semibold tracking-[0.03em] text-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(220,39,67,0.35)]"
              style={{
                background:
                'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
              }}>
              
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0">
                
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              DM on Instagram
            </a>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.32}>
          <p className="text-[0.9rem] text-text-secondary mt-2">
            📍 Dubai, United Arab Emirates
          </p>
        </Reveal>
      </div>
    </section>);

}