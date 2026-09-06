'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Compass, Database, Terminal, Rocket, CheckCircle2 } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const stages = [
  {
    step: '01',
    title: 'Architecture & Threat Modeling',
    summary: 'Define strict domain boundaries, entity relationship schemas, and protocol requirements before writing code.',
    icon: Compass,
    highlights: [
      'Comprehensive schema design (Prisma/PostgreSQL)',
      'Security boundary & threat modeling',
      'API contract specification (REST / GraphQL)',
    ],
  },
  {
    step: '02',
    title: 'Core Backend & Model Engineering',
    summary: 'Build high-throughput backend services, data pipelines, and AI inference endpoints with robust type safety.',
    icon: Database,
    highlights: [
      'Transactional database mutations & indexing',
      'PyTorch ViT model training & FastAPI runtime',
      'Granular multi-role RBAC & session security',
    ],
  },
  {
    step: '03',
    title: 'Reactive Frontend & Spatial UX',
    summary: 'Engineer silky-smooth, responsive user interfaces with sub-second state synchronization and hardware integration.',
    icon: Terminal,
    highlights: [
      'React 19 & Next.js 16 App Router architecture',
      'Framer Motion micro-interactions & hardware frames',
      'Viro React 3D AR surface detection',
    ],
  },
  {
    step: '04',
    title: 'Hardening, CI/CD & Telemetry',
    summary: 'Rigorous end-to-end testing, production deployment, and automated monitoring for bulletproof reliability.',
    icon: Rocket,
    highlights: [
      'Vitest unit tests & Playwright visual E2E',
      'Dockerized deployment (Hostinger / Vercel)',
      'Real-time GPS telemetry & audit logging',
    ],
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 relative border-t border-border/80 bg-surface/20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <SectionHeading
            number="04"
            title="The Engineering Methodology."
            className="mb-0"
          />
          <p className="font-sans text-muted-foreground text-sm sm:text-base max-w-md">
            How complex ideas transform into fault-tolerant, award-winning software systems.
          </p>
        </div>

        {/* 4-Step Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.step}
                className="group relative p-8 rounded-3xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-hover transition-all duration-400 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease }}
              >
                <div>
                  {/* Step Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/25">
                      STAGE {stage.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-background border border-border text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground font-bold mb-3 group-hover:text-accent transition-colors">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-6">
                    {stage.summary}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-4 border-t border-border/60">
                  {stage.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 font-sans text-[11px] text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
