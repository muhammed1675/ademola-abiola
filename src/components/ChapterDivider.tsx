import React from 'react';
import { Reveal } from './Reveal';
export function ChapterDivider({ label }: {label: string;}) {
  return (
    <div className="flex items-center justify-center py-8 px-6 gap-6 overflow-hidden">
      <span
        className="flex-1 max-w-[200px] h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--accent))'
        }} />
      
      <Reveal direction="zoom" as="span">
        <span className="font-heading italic text-[0.82rem] text-accent tracking-[0.2em] uppercase whitespace-nowrap opacity-75">
          {label}
        </span>
      </Reveal>
      <span
        className="flex-1 max-w-[200px] h-px"
        style={{
          background: 'linear-gradient(to left, transparent, var(--accent))'
        }} />
      
    </div>);

}