'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

/* Inline Brand Icons for Navbar & Mobile Overlay */
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
  { label: 'Work', href: '#projects', sectionId: 'projects' },
  { label: 'Capabilities', href: '#capabilities', sectionId: 'capabilities' },
  { label: 'Methodology', href: '#process', sectionId: 'process' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'FAQ', href: '#faq', sectionId: 'faq' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll detection
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Active section spy using IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -50% 0px',
    })

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Lock body scroll and handle Escape key for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-[#111111]/85 backdrop-blur-[16px] border-b border-border/60 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent py-6'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

          {/* Monogram / Logo */}
          <a
            href="#"
            aria-label="Umair Ul Hassan — Back to top"
            className="group flex items-center gap-2"
          >
            <span className="font-serif italic text-2xl text-accent group-hover:text-accent-hover transition-colors duration-300">
              UH.
            </span>
            <span className="hidden sm:inline-block font-sans font-medium text-[11px] uppercase tracking-[0.2em] text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href, sectionId }) => {
              const isActive = activeSection === sectionId
              return (
                <a
                  key={label}
                  href={href}
                  className={cn(
                    'relative font-sans font-bold uppercase tracking-[0.16em] text-[11px] transition-colors duration-300 py-1',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-accent'
                  )}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}

            {/* High-End Outline CTA Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.16em] text-[11px] text-accent border border-accent/60 px-5 py-2.5 rounded-full overflow-hidden hover:border-accent hover:shadow-[0_0_25px_rgba(201,169,110,0.2)] transition-all duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#111111]">
                Let&apos;s Talk
              </span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-all duration-300 group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-accent translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none focus:ring-1 focus:ring-accent rounded-lg"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      {/* ── High-End Fullscreen Mobile Overlay (Editorial Style) ────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-border/80 pb-6">
              <span className="font-serif italic text-3xl text-accent">UH.</span>
              <button
                aria-label="Close navigation menu"
                className="p-2 text-foreground hover:text-accent transition-transform duration-300 hover:rotate-90"
                onClick={closeMobileMenu}
              >
                <X className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links (Instrument Serif Editorial Stack) */}
            <nav aria-label="Mobile navigation" className="flex flex-col gap-6 my-auto">
              <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-tertiary">
                Navigation
              </span>

              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="font-serif text-4xl sm:text-5xl text-foreground hover:text-accent hover:translate-x-2 transition-all duration-300 flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span>{label}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex items-center justify-center gap-3 font-sans font-bold uppercase tracking-widest text-xs text-[#111111] bg-accent px-8 py-4 rounded-full hover:bg-accent-hover transition-colors duration-300 shadow-[0_0_25px_rgba(201,169,110,0.2)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </nav>

            {/* Bottom Meta & Social Bar */}
            <div className="border-t border-border/80 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-xs text-tertiary">Based in Pakistan</p>
                <p className="font-sans text-xs text-muted-foreground">Available Worldwide</p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/umairulhassancs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/umairulhassancs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:umairulhassan.dev@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Email Umair"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
