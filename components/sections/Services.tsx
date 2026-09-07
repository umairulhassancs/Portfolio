'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Code2, BrainCircuit, Smartphone, Server, ArrowUpRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

export const services = [
  {
    id: 'saas',
    icon: Code2,
    num: '01',
    title: 'Full-Stack SaaS & Web Platforms',
    tagline: 'Modern, high-converting platforms built for velocity and scale.',
    deliverables: [
      'Next.js 16 App Router & React 19 architecture',
      'Production database schemas (PostgreSQL / Prisma / MySQL)',
      'Secure session auth, JWT rotation & multi-tier RBAC',
      'Automated transactional email (Resend) & Stripe billing',
    ],
    cta: 'Initiate SaaS Architecture',
    badge: 'Production Systems',
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    num: '02',
    title: 'Applied AI & Deep Learning Models',
    tagline: 'Transform raw data into real-time sub-second inference pipelines.',
    deliverables: [
      'Custom Vision Transformer (ViT) & CNN fine-tuning',
      'PyTorch & FastAPI asynchronous inference endpoints',
      'LLM orchestration, embeddings & structured JSON extraction',
      'Camera-assisted automated inventory & classification',
    ],
    cta: 'Discuss Applied AI',
    badge: 'PyTorch & FastAPI',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    num: '03',
    title: 'Cross-Platform Mobile & AR Apps',
    tagline: 'Native performance on iOS & Android with spatial computing.',
    deliverables: [
      'React Native & Expo SDK 54 cross-platform engineering',
      'Viro React 3D spatial computing & surface plane detection',
      'Background push alerts, location tracking & device telemetry',
      'Stripe Mobile SDK, digital wallets & vendor settlements',
    ],
    cta: 'Build Mobile / AR App',
    badge: 'React Native & AR',
  },
  {
    id: 'enterprise',
    icon: Server,
    num: '04',
    title: 'Enterprise ERP & Multi-Tenant Systems',
    tagline: 'Centralized institutional operations with granular role security.',
    deliverables: [
      'Multi-campus, multi-shift scheduling & state machines',
      'Financial ledgers, fee challans & profit/loss statements',
      'Custom PDF/Excel report engines & QR verification tags',
      'Redis rate limiting, Dockerization & Hostinger/Vercel deployment',
    ],
    cta: 'Engineer Enterprise ERP',
    badge: 'Enterprise Architecture',
  },
]

export function Services() {
  const handleSelectService = (serviceTitle: string) => {
    // Smooth scroll to contact and dispatch custom event or hash
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(new CustomEvent('portfolio:select-service', { detail: { service: serviceTitle } }))
    }
  }

  return (
    <section id="capabilities" className="py-20 sm:py-32 relative border-t border-border/80">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <SectionHeading
            number="03"
            title="Core Engineering Domains."
            className="mb-0"
          />
          <p className="font-sans text-muted-foreground text-xs sm:text-base max-w-md leading-relaxed">
            Direct, senior-level technical leadership — from initial system blueprints to high-load production deployment.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                className="group relative p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-surface/80 border border-border hover:border-accent/50 hover:bg-surface transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_45px_rgba(56,189,248,0.15)] flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold text-accent">
                        {service.num}
                      </span>
                      <span className="text-border">/</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-tertiary bg-background/80 border border-border px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-background border border-border text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => handleSelectService(service.title)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-background/80 hover:bg-accent/10 border border-border hover:border-accent/60 text-foreground hover:text-accent font-sans font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 group/btn"
                >
                  <span>{service.cta}</span>
                  <ArrowUpRight className="w-4 h-4 text-tertiary group-hover/btn:text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </button>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
