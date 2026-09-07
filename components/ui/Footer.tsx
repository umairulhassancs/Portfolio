'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUp, ArrowUpRight, Mail, Code2 } from 'lucide-react'
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

const NAV_LINKS = [
  { label: 'Work', hash: 'projects' },
  { label: 'Capabilities', hash: 'capabilities' },
  { label: 'Methodology', hash: 'process' },
  { label: 'About & Philosophy', hash: 'about' },
  { label: 'Experience & Projects', hash: 'journey' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Contact', hash: 'contact' },
]

const CASE_STUDIES = [
  { label: 'Vouch — Hardware QR SaaS', href: '/projects/vouch' },
  { label: 'GardenMate — AI ViT & AR', href: '/projects/gardenmate' },
  { label: 'FinGo — Multi-Vendor Commerce', href: '/projects/fingo' },
  { label: 'Evershine — Biometrics & ERP', href: '/projects/evershine' },
  { label: 'Voice AI Copilot — Voice Assistant', href: '/projects/copilot' },
]

export function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getNavHref = (hash: string) => {
    return isHome ? `#${hash}` : `/#${hash}`
  }

  return (
    <footer className="relative z-10 border-t border-border bg-[#0B0F17] pt-14 pb-12 overflow-hidden text-foreground">
      {/* Top subtle ambient glow line */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" 
      />

      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section: Author Bio & Availability Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-border/60">
          
          {/* Author Badge & Identity */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-4">
            <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-2xl overflow-hidden ring-1 ring-accent/30 shadow-[0_0_20px_rgba(56,189,248,0.2)] shrink-0 bg-surface">
              <Image
                src={umairPortrait}
                alt="Umair Ul Hassan"
                fill
                sizes="56px"
                className="object-cover object-center"
              />
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B0F17]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground tracking-tight">
                  Umair Ul Hassan
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent uppercase tracking-wider">
                  Full-Stack Dev
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1 max-w-lg leading-relaxed">
                Full-Stack Software Engineer specializing in scalable web architectures, cross-platform mobile apps (React Native), and applied AI systems. Focused on clean code, reliability, and intuitive product UX.
              </p>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-surface/70 border border-border/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Full-Time Full-Stack, Web &amp; Mobile Roles</span>
            </div>
            <p className="font-sans text-[11px] sm:text-xs text-muted-foreground mt-1.5 leading-relaxed">
              Based in Pakistan (PKT · UTC+5) · High overlap with US (EST/PST), European &amp; Asia-Pacific working hours.
            </p>
          </div>

        </div>

        {/* Middle Section: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-border/60">
          
          {/* Col 1: Main Sections */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tertiary block mb-3.5">
              Navigation
            </span>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, hash }) => (
                <li key={hash}>
                  <Link
                    href={getNavHref(hash)}
                    className="font-sans text-xs text-muted-foreground hover:text-accent transition-colors block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Featured Systems */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tertiary block mb-3.5">
              Case Studies
            </span>
            <ul className="space-y-2">
              {CASE_STUDIES.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-xs text-muted-foreground hover:text-accent transition-colors block py-0.5 group"
                  >
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tertiary block mb-3.5">
              Connect
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/umairulhassancs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/umair-ul-hassan-cs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:umairulhassan.cs@gmail.com"
                  className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">Email Me</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/umairulhassancs/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering Specs */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tertiary block mb-3.5">
              Stack &amp; Spec
            </span>
            <div className="space-y-1.5 font-mono text-[11px] text-muted-foreground">
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-tertiary">Framework</span>
                <span className="text-foreground font-semibold">Next.js 16</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-tertiary">Runtime</span>
                <span className="text-foreground font-semibold">React 19</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-tertiary">Language</span>
                <span className="text-foreground font-semibold">TypeScript</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-tertiary">Styling</span>
                <span className="text-foreground font-semibold">Tailwind CSS</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-tertiary">Domain</span>
                <span className="text-accent font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  umairulhassan.site
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-tertiary font-sans">
            <span>© {new Date().getFullYear()} Umair Ul Hassan. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Designed &amp; engineered with clean architecture.</span>
          </div>

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
