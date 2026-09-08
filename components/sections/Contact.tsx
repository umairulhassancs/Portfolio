'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Mail, Check, Copy, ArrowUpRight, Send, Sparkles } from 'lucide-react'

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

const ease = [0.16, 1, 0.3, 1] as const

const projectTypes = [
  'Full-Stack SaaS & Web Platforms',
  'Applied AI & Deep Learning Models',
  'Cross-Platform Mobile & AR Apps',
  'Enterprise ERP & Systems',
  'Full-Time Engineering Role',
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('Full-Stack SaaS & Web Platforms')
  const email = 'umairulhassan.cs@gmail.com'

  // Listen for custom service selection events from Services section
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string }>
      if (customEvent.detail?.service) {
        setSelectedTopic(customEvent.detail.service)
      }
    }

    window.addEventListener('portfolio:select-service', handleServiceSelect)
    return () => window.removeEventListener('portfolio:select-service', handleServiceSelect)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const encodedSubject = encodeURIComponent(`Inquiry: ${selectedTopic} — Umair Ul Hassan`)
  const mailtoUrl = `mailto:${email}?subject=${encodedSubject}`

  const socials = [
    {
      label: 'GitHub',
      handle: '@umairulhassancs',
      href: 'https://github.com/umairulhassancs',
      Icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      handle: 'in/umair-ul-hassan-cs',
      href: 'https://www.linkedin.com/in/umair-ul-hassan-cs/',
      Icon: LinkedInIcon,
    },
    {
      label: 'Direct Email',
      handle: 'umairulhassan.cs@gmail.com',
      href: mailtoUrl,
      Icon: Mail,
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 relative border-t border-border bg-surface/30">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 flex flex-col items-center text-center">
        
        {/* Section Heading */}
        <SectionHeading
          number="08"
          title="Let's build something enduring."
          className="justify-center text-center"
        />

        {/* Availability Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.16em] text-[10px] text-accent border border-accent/40 bg-accent/5 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Full-Time Full-Stack, Web &amp; Mobile Development Roles
          </span>
        </motion.div>

        {/* Intro Subtitle */}
        <motion.p
          className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Whether you need to architect a production SaaS from scratch, fine-tune custom Vision Transformers, or scale mission-critical systems — let's connect.
        </motion.p>

        {/* Interactive Topic Pre-selector */}
        <motion.div
          className="w-full max-w-2xl mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-tertiary block mb-3">
            Select Your Primary Objective:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {projectTypes.map((topic) => {
              const isSelected = selectedTopic === topic
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`font-sans text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-accent text-[#0A0E17] font-bold border-accent shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                      : 'bg-surface border-border text-muted-foreground hover:text-foreground hover:border-border-hover'
                  }`}
                >
                  {isSelected && <Sparkles className="w-3 h-3" />}
                  <span>{topic}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Interactive Action Hub (Send Email + Quick Copy) */}
        <motion.div
          className="w-full max-w-lg mb-14"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <div className="p-3 rounded-3xl bg-surface border border-border shadow-2xl space-y-3">
            
            {/* Primary Action: Direct Mailto Link with Pre-filled Subject */}
            <a
              href={mailtoUrl}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-accent text-[#0A0E17] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.14em] hover:bg-accent-hover transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.25)] group"
            >
              <div className="flex items-center gap-3 text-left truncate">
                <Send className="w-4 h-4 shrink-0" />
                <span className="truncate">Initiate Email ({selectedTopic.split('&')[0].trim()})</span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Secondary Action: 1-Click Copy Email */}
            <button
              onClick={handleCopy}
              aria-label={copied ? 'Email copied!' : 'Copy email address'}
              className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-background border border-border/80 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="flex flex-col text-left truncate">
                <span className="font-sans font-bold uppercase tracking-[0.15em] text-[10px] text-tertiary">
                  Direct Contact Address
                </span>
                <span className="font-mono text-xs sm:text-sm text-foreground group-hover:text-accent transition-colors truncate mt-0.5">
                  {email}
                </span>
              </div>

              <div className="shrink-0 bg-surface p-2.5 rounded-xl border border-border group-hover:border-accent/50 text-muted-foreground group-hover:text-accent transition-all duration-300">
                {copied ? (
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4" aria-hidden="true" />
                )}
              </div>
            </button>

            {/* Direct WhatsApp & Phone Action */}
            <a
              href="https://wa.me/923473256547"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Contact: 03473256547"
              className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-background border border-border/80 hover:border-emerald-500/50 hover:bg-emerald-500/[0.03] transition-all duration-300 group"
            >
              <div className="flex flex-col text-left truncate">
                <span className="font-sans font-bold uppercase tracking-[0.15em] text-[10px] text-tertiary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Direct WhatsApp &amp; Phone
                </span>
                <span className="font-mono text-xs sm:text-sm text-foreground group-hover:text-emerald-400 transition-colors truncate mt-0.5">
                  03473256547 <span className="text-muted-foreground font-sans text-[11px] font-normal">(+92 347 3256547)</span>
                </span>
              </div>

              <div className="shrink-0 bg-surface p-2.5 rounded-xl border border-border group-hover:border-emerald-500/50 text-muted-foreground group-hover:text-emerald-400 transition-all duration-300">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Feedback Indicator */}
          <motion.div
            className="h-6 mt-3 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: copied ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-sans font-medium text-xs text-accent">
              ✓ Email copied to clipboard — ready to send!
            </span>
          </motion.div>
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          {socials.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Direct Email' ? '_blank' : undefined}
              rel={label !== 'Direct Email' ? 'noopener noreferrer' : undefined}
              className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col items-start text-left justify-between"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="p-2.5 rounded-xl bg-background border border-border text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-tertiary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <span className="font-sans font-bold text-sm text-foreground block group-hover:text-accent transition-colors">
                  {label}
                </span>
                <span className="font-mono text-xs text-muted-foreground truncate block mt-0.5">
                  {handle}
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Timezone Note */}
        <motion.p
          className="font-sans text-xs text-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Based in Pakistan (PKT · UTC+5) · High overlap with US (EST/PST), European &amp; Asia-Pacific working hours.
        </motion.p>
      </div>
    </section>
  )
}
