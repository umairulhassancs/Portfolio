'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-border bg-background relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 text-center sm:text-left">
          <span className="font-serif italic text-2xl text-accent">UH.</span>
          <span className="font-sans text-xs text-muted-foreground">
            Umair Ul Hassan — Full-Stack Engineer &amp; Applied AI Builder
          </span>
        </div>

        {/* Center/Right Info & Back to Top */}
        <div className="flex items-center gap-6">
          <p className="font-sans text-xs text-tertiary hidden sm:block">
            © {new Date().getFullYear()} · All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="group flex items-center gap-2 font-sans font-bold uppercase tracking-[0.14em] text-[11px] text-muted-foreground hover:text-accent transition-colors duration-300 py-1"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-surface border border-border group-hover:border-accent group-hover:bg-surface-hover transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}
