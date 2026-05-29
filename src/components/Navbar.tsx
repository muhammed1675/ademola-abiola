import React, { useEffect, useState } from 'react';
const links = [
{
  href: '#hero',
  label: 'Home'
},
{
  href: '#about',
  label: 'About'
},
{
  href: '#experience',
  label: 'Experience'
},
{
  href: '#gallery',
  label: 'Gallery'
},
{
  href: '#achievements',
  label: 'Achievements'
},
{
  href: '#testimonials',
  label: 'Testimonials'
},
{
  href: '#contact',
  label: 'Contact'
}];

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
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-3.5 shadow-[0_2px_24px_rgba(0,0,0,0.1)]' : 'py-5'}`}
      style={{
        backgroundColor: scrolled ?
        'rgba(246,249,247,0.96)' :
        'rgba(246,249,247,0.9)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none'
      }}>
      
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-6">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="font-heading text-[1.15rem] font-bold tracking-[0.04em] text-accent whitespace-nowrap">
          
          Coach A. Ademola
        </a>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 z-[3000]"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}>
          
          <span
            className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          
          <span
            className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          
          <span
            className={`w-full h-0.5 bg-text-primary rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          
        </button>

        <ul
          className={`hidden md:flex gap-8 list-none max-md:fixed max-md:top-0 max-md:flex-col max-md:h-screen max-md:w-[min(280px,75%)] max-md:pt-20 max-md:px-8 max-md:gap-7 max-md:bg-bg-primary max-md:shadow-[-8px_0_40px_rgba(0,0,0,0.4)] max-md:z-[2000] transition-[right] duration-300 ${open ? 'max-md:!flex max-md:right-0' : 'max-md:-right-full'}`}>
          
          {links.map((l) =>
          <li key={l.href}>
              <a
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="group relative text-[0.82rem] font-medium tracking-[0.07em] uppercase text-text-primary pb-[3px]">
              
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>);

}