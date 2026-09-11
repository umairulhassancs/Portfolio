'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUp, ArrowUpRight, Mail, Code2, FileText } from 'lucide-react'
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.405z"/>
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
  { label: 'NutriLens — Vision Nutrition AI', href: '/projects/nutrilens' },
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
                Full-Stack Developer specializing in scalable web architectures, cross-platform mobile apps (React Native), and applied AI systems. Focused on clean code, reliability, and intuitive product UX.
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-b border-border/60">
          
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
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Umair's Curriculum Vitae (PDF)"
                  className="inline-flex items-center gap-2 font-sans text-xs text-foreground font-medium hover:text-accent transition-colors py-0.5 group"
                >
                  <FileText className="w-3.5 h-3.5 text-accent" />
                  <span>Curriculum Vitae (CV)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
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
                  href="https://wa.me/923473256547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
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
