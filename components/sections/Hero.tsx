'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AmbientGlow } from '@/components/effects/AmbientGlow'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import umairPortrait from '@/public/images/umair-new.png'

/* Inline Brand SVGs */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative flex items-center pt-24 sm:pt-32 pb-8 sm:pb-20 min-h-0 sm:min-h-[85vh] overflow-hidden">
      
      {/* Background Subtle Gradient Mesh */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent blur-[140px] opacity-40 -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-12 gap-3 sm:gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Headline & Senior Professional Bio */}
        <motion.div
          className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col items-start text-left order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Status Badge */}
          <div className="mb-3 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-surface border border-border shadow-sm max-w-full">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-sans font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] text-[8px] sm:text-[10px] text-muted-foreground truncate">
              Available for Full-Time Roles
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight text-foreground leading-[1.05] mb-2 sm:mb-6">
            Umair Ul <span className="italic text-accent">Hassan.</span>
          </h1>

          <p className="font-sans font-medium text-[11px] xs:text-xs sm:text-lg md:text-xl text-foreground/90 max-w-xl mb-2 sm:mb-4 leading-snug">
            Full-Stack Software Engineer &amp; Applied AI Specialist
          </p>

          <p className="font-sans text-[10px] sm:text-base md:text-lg text-muted-foreground max-w-xl mb-4 sm:mb-10 leading-relaxed line-clamp-3 sm:line-clamp-none">
            Specializing in designing scalable web architectures, resilient distributed backends, and applied computer vision systems. I engineer production-ready digital products with an uncompromising focus on latency, clean abstraction, and high-performance user interfaces.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-start mb-4 sm:mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 sm:gap-2.5 font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[9px] sm:text-[11px] text-[#0A0E17] bg-accent px-3.5 sm:px-8 py-2 sm:py-4 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 sm:gap-2 font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[9px] sm:text-[11px] text-foreground border border-border px-3 sm:px-7 py-2 sm:py-4 rounded-full hover:border-accent hover:text-accent hover:bg-surface transition-all duration-300"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5" />
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-6 text-muted-foreground text-[9px] sm:text-xs font-sans">
            <span className="text-tertiary uppercase tracking-widest text-[8px] sm:text-[10px] font-bold">Connect</span>
            <a
              href="https://github.com/umairulhassancs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <GithubIcon className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-border">·</span>
            <a
              href="https://www.linkedin.com/in/umair-ul-hassan-cs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <LinkedInIcon className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean, Authentic Executive Portrait */}
        <motion.div
          className="col-span-5 sm:col-span-5 lg:col-span-5 flex justify-end order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <div className="relative w-full max-w-[150px] xs:max-w-[190px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[380px]">
            
            {/* Luminous Ice Aura Backlight */}
            <AmbientGlow size="340px" opacity={0.18} />

            {/* Clean Frame (No fake AI tags or gimmicks) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-surface border border-border shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-1.5 sm:p-3">
              
              {/* Natural Portrait */}
              <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-surface">
                <Image
                  src={umairPortrait}
                  alt="Umair Ul Hassan — Full-Stack Software Engineer"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 45vw, 380px"
                />

                {/* Subtle Inner Ring */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10" 
                />
              </div>

              {/* Bottom Clean Label */}
              <div className="pt-1.5 sm:pt-3 pb-0.5 sm:pb-1 px-1 sm:px-2 flex items-center justify-between">
                <div className="flex flex-col truncate pr-1">
                  <span className="font-sans font-bold text-[10px] sm:text-sm text-foreground truncate">
                    Umair Ul Hassan
                  </span>
                  <span className="hidden sm:block font-sans text-xs text-muted-foreground">
                    Full-Stack Software Engineer
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-xs text-muted-foreground font-mono shrink-0">
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400" />
                  <span>PKT</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
