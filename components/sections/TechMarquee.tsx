'use client'

import React from 'react'

const TECH_ITEMS = [
  { name: 'TypeScript', category: 'Core' },
  { name: 'React 19', category: 'Frontend' },
  { name: 'Next.js 16', category: 'Full-Stack' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Expo SDK 54', category: 'Mobile' },
  { name: 'PyTorch (ViT)', category: 'Applied AI' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Firebase Suite', category: 'Cloud' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Three.js', category: '3D Web' },
  { name: 'Tailwind CSS v4', category: 'Styling' },
  { name: 'Viro React (AR)', category: 'Augmented Reality' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'REST & GraphQL', category: 'Architecture' },
]

export function TechMarquee() {
  return (
    <section 
      aria-label="Technologies and competencies marquee" 
      className="group relative w-full py-5 md:py-6 border-y border-border/80 bg-surface/80 backdrop-blur-sm overflow-hidden flex select-none"
    >
      {/* Luxury Gradient Fade Masks on edges */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-background via-background/80 to-transparent z-20" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-background via-background/80 to-transparent z-20" 
      />

      {/* Marquee Container with pause-on-hover */}
      <div className="flex w-max animate-marquee will-change-transform">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {TECH_ITEMS.map((item, index) => (
            <div key={`track1-${index}`} className="flex items-center">
              <span className="font-sans font-bold uppercase tracking-[0.16em] text-[12px] md:text-[13px] text-foreground/80 hover:text-accent transition-colors duration-300 px-5 md:px-7 whitespace-nowrap cursor-default">
                {item.name}
              </span>
              <span className="text-accent text-[18px] leading-none select-none opacity-60">·</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless infinite scroll) */}
        <div aria-hidden="true" className="flex items-center shrink-0">
          {TECH_ITEMS.map((item, index) => (
            <div key={`track2-${index}`} className="flex items-center">
              <span className="font-sans font-bold uppercase tracking-[0.16em] text-[12px] md:text-[13px] text-foreground/80 hover:text-accent transition-colors duration-300 px-5 md:px-7 whitespace-nowrap cursor-default">
                {item.name}
              </span>
              <span className="text-accent text-[18px] leading-none select-none opacity-60">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
