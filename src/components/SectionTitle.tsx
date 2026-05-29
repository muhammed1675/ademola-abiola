import React from 'react';
import { Reveal } from './Reveal';
type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'rotate';
export function SectionTitle({
  children,
  direction = 'up'



}: {children: React.ReactNode;direction?: Direction;}) {
  return (
    <Reveal direction={direction}>
      <h2
        className="font-heading mb-14 text-center font-bold tracking-[-0.01em] text-accent"
        style={{
          fontSize: 'clamp(1.9rem, 4.5vw, 3rem)'
        }}>
        
        {children}
      </h2>
    </Reveal>);

}