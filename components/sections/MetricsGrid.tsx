'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, BrainCircuit, Layers } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const capabilities = [
  {
    icon: Layers,
    value: '6+',
    label: 'End-to-End Projects',
    detail: 'Full-stack web, mobile, SaaS, ERP, commerce, and applied AI systems.',
    tag: 'Projects',
  },
  {
    icon: Globe,
    value: 'Web',
    label: 'Full-Stack Development',
    detail: 'React, Next.js, Node.js, REST APIs, authentication, and database schemas.',
    tag: 'Platforms',
  },
  {
    icon: Smartphone,
    value: 'Mobile',
    label: 'React Native & Expo',
    detail: 'Cross-platform iOS & Android apps with Firebase, APIs, and native hardware features.',
    tag: 'Mobile Apps',
  },
  {
    icon: BrainCircuit,
    value: 'AI',
    label: 'Applied AI & Vision',
    detail: 'PyTorch, Vision Transformers, computer vision, voice AI, and model integrations.',
    tag: 'Intelligent Systems',
  },
]

export function MetricsGrid() {
  return (
    <section className="py-8 sm:py-12 relative border-y border-border/80 bg-surface/30">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="group relative p-3 sm:p-6 rounded-2xl bg-surface/80 border border-border hover:border-accent/40 hover:bg-surface transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <span className="font-mono text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-tertiary bg-background/80 border border-border px-2 sm:px-2.5 py-0.5 rounded-full group-hover:text-accent group-hover:border-accent/30 transition-colors truncate max-w-[90px] sm:max-w-none">
                      {item.tag}
                    </span>
                    <div className="p-1.5 sm:p-2 rounded-xl bg-background border border-border text-muted-foreground group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div className="font-serif text-2xl sm:text-4xl font-bold text-foreground mb-0.5 sm:mb-1 group-hover:text-accent transition-colors">
                    {item.value}
                  </div>

                  <h3 className="font-sans font-bold text-xs sm:text-sm text-foreground/90 mb-1 sm:mb-2 truncate">
                    {item.label}
                  </h3>

                  <p className="font-sans text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
