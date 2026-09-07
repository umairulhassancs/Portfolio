'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FileText, ArrowUpRight, Cpu, Layers, Sparkles, Terminal } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const PILLARS = [
  {
    icon: Layers,
    title: 'Scalable System Architecture',
    description: 'Designing resilient distributed services, transactional database schemas, and decoupled microservice architectures that scale gracefully under load.',
  },
  {
    icon: Sparkles,
    title: 'Modern Web & Mobile Platforms',
    description: 'Crafting responsive, accessible, and fluid user interfaces with React, Next.js, and React Native with 60fps performance and zero layout shift.',
  },
  {
    icon: Cpu,
    title: 'Applied AI & Machine Vision',
    description: 'Fine-tuning deep learning models and integrating computer vision transformers into production pipelines with low-latency inference.',
  },
  {
    icon: Terminal,
    title: 'Engineering Craftsmanship',
    description: 'Relentless commitment to strict type safety, defensive validation, comprehensive test coverage, and modular code maintainability.',
  },
]

const STATS = [
  { value: '4+', label: 'Years of Engineering Rigor' },
  { value: 'Full-Stack', label: 'End-to-End System Delivery' },
  { value: '<100ms', label: 'Target Latency & Optimization' },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative border-t border-border bg-surface/20">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6">
        <SectionHeading number="03" title="About & Philosophy" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Senior Engineering Philosophy */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="font-serif italic text-2xl sm:text-3xl text-foreground leading-snug">
              &ldquo;True engineering excellence is found where robust architecture meets effortless human interaction.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              I am a Full-Stack Software Engineer dedicated to architecting reliable, high-performance systems from the database layer to the interactive client. My approach treats code as a long-term asset: structured for longevity, defensive against failure, and optimized for speed.
            </p>

            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Throughout my journey, I have specialized in building production-grade web applications, cross-platform mobile platforms, and applied deep learning pipelines. I operate with an end-to-end mindset — taking complex business and technical requirements from conceptual whiteboarding to fully deployed, monitored cloud infrastructure.
            </p>

            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              I believe that great software demands discipline: decoupled components, strict type safety, thoughtful asynchronous workflows, and an obsessive attention to user perceived latency.
            </p>

            {/* Resume Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-sans font-bold uppercase tracking-[0.16em] text-[11px] text-accent border border-accent/60 px-7 py-3.5 rounded-full hover:border-accent hover:bg-accent hover:text-[#0A0E17] transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
              >
                <FileText className="w-4 h-4" />
                <span>Get In Touch for CV / Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Pillars & Metrics */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl bg-surface border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-4xl text-accent font-medium">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    className="group p-4 sm:p-6 rounded-2xl bg-surface border border-border hover:border-border-hover hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease }}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-sans font-bold text-base text-foreground mb-2">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
