import React from 'react';
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-edge bg-bg-secondary py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col flex-wrap items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-[0.875rem] text-text-secondary">
          © <span>{year}</span> Coach Ademola Abiola |{' '}
          <a
            href="https://ping-perfect.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-accent-light">
            
            Ping Perfect Dubai
          </a>
          . All rights reserved.
        </p>
        <p className="text-[0.875rem] text-text-secondary">
          Developed by{' '}
          <a
            href="https://www.ayoolamuhammed.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-accent-light">
            
            MGraphix Web
          </a>
        </p>
      </div>
    </footer>);

}