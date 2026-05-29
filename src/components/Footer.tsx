import React from 'react';
export function Footer() {
  return (
    <footer className="bg-bg-secondary py-6 border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-4 flex-wrap max-md:flex-col max-md:text-center">
        <p className="text-text-secondary text-[0.875rem]">
          &copy; {new Date().getFullYear()} Coach Ademola Abiola |{' '}
          <a
            href="https://ping-perfect.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light">
            
            Ping Perfect Dubai
          </a>
          . All rights reserved.
        </p>
        <p className="text-text-secondary text-[0.875rem]">
          Developed by{' '}
          <a
            href="https://www.ayoolamuhammed.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light">
            
            MGraphix Web
          </a>
        </p>
      </div>
    </footer>);

}