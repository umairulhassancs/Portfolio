'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { type Project } from '@/data/projects'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { BrowserMockup } from '@/components/ui/BrowserMockup'
import { GrainOverlay } from '@/components/effects/GrainOverlay'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Layers, 
  Cpu, 
  ShieldCheck,
  GitMerge,
  ShieldAlert,
  Gauge,
  Boxes
} from 'lucide-react'
import { cn } from '@/lib/utils'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const ease = [0.16, 1, 0.3, 1] as const
const AUTO_SCROLL_SECONDS = 3

interface ProjectDetailClientProps {
  project: Project
  nextProject: Project
  currentIndex: number
  totalProjects: number
}

export function ProjectDetailClient({
  project,
  nextProject,
  currentIndex,
  totalProjects,
}: ProjectDetailClientProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const [selectedModuleId, setSelectedModuleId] = useState<string>(project.modules?.[0]?.id || '')

  const activeScreen = project.screens[activeScreenIndex] || project.screens[0]

  // Continuous auto-scroll loop every 3 seconds — does NOT pause on hover
  useEffect(() => {
    if (project.screens.length <= 1) return

    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % project.screens.length)
    }, AUTO_SCROLL_SECONDS * 1000)

    return () => clearInterval(interval)
  }, [project.screens.length])

  const nextScreen = () => {
    setActiveScreenIndex((prev) => (prev + 1) % project.screens.length)
  }

  const prevScreen = () => {
    setActiveScreenIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-[#0A0E17]">
      <GrainOverlay />
      <ScrollProgressBar />

      {/* ── Top Navigation Bar ───────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/70 py-4 px-6">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">
              0{currentIndex + 1} / 0{totalProjects}
            </span>
            <span className="hidden sm:inline-block text-border">·</span>
            <span className="hidden sm:inline-block font-sans text-xs text-tertiary">
              {project.title}
            </span>
          </div>
        </div>
      </header>

      {/* ── Main Content Container ───────────────────────────────── */}
      <div className="pt-28 pb-24 px-6 max-w-[1240px] mx-auto">
        
        {/* Project Header Meta */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              CASE STUDY · 0{currentIndex + 1}
            </span>
            <span className="font-sans font-bold uppercase tracking-[0.14em] text-[10px] text-tertiary flex items-center gap-1.5 bg-surface border border-border px-3 py-1 rounded-full">
              {project.type === 'Mobile App' ? (
                <Smartphone className="w-3.5 h-3.5 text-accent" />
              ) : (
                <Monitor className="w-3.5 h-3.5 text-accent" />
              )}
              {project.platformBadge}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-accent font-medium max-w-4xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* ── 1. ALL PICTURES ABOVE: Cinema Auto-Scrolling Gallery (Continuous 3s) ── */}
        <motion.section
          className="mb-16 rounded-3xl bg-surface/90 border border-border shadow-[0_25px_65px_rgba(0,0,0,0.6)] p-6 sm:p-10 lg:p-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {/* Visual Showcase Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/80 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground bg-background border border-border px-3 py-1 rounded-full">
                Screen {activeScreenIndex + 1} of {project.screens.length}
              </span>
              <span className="font-sans text-xs text-accent flex items-center gap-1.5 font-medium">
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>Auto-scrolling every 3s</span>
              </span>
            </div>

            {/* Actions & Navigation Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-[#0A0E17] font-sans font-bold text-xs uppercase tracking-[0.12em] hover:bg-accent-hover transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live</span>
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background border border-border text-foreground hover:border-accent hover:text-accent font-sans font-bold text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-1.5 border-l border-border pl-2.5">
                <button
                  onClick={prevScreen}
                  aria-label="Previous screenshot"
                  className="p-2 rounded-xl bg-background hover:bg-surface-hover border border-border hover:border-accent text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextScreen}
                  aria-label="Next screenshot"
                  className="p-2 rounded-xl bg-background hover:bg-surface-hover border border-border hover:border-accent text-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Central Mockup Display */}
          <div className="w-full flex justify-center py-4 sm:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.src}
                className="w-full max-w-[900px] flex justify-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
              >
                {project.type === 'Mobile App' ? (
                  <div className="max-w-[320px] w-full flex justify-center">
                    <PhoneMockup
                      imageSrc={activeScreen.src}
                      alt={`${project.title} — ${activeScreen.label}`}
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <BrowserMockup
                      imageSrc={activeScreen.src}
                      alt={`${project.title} — ${activeScreen.label}`}
                      url={project.browserUrl}
                      priority
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screen Caption Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-background/80 border border-border/80 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-bold text-foreground">
                {activeScreen.label}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted-foreground italic">
              {activeScreen.caption}
            </p>
          </div>

          {/* Interactive Screen Tags (Click any tag to immediately jump) */}
          <div className="mt-6 pt-6 border-t border-border/60">
            <span className="font-sans font-bold uppercase tracking-[0.16em] text-[10px] text-tertiary block mb-3">
              Application Screen Flow (Click any tag to jump to that screen)
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.screens.map((screen, i) => {
                const isActive = i === activeScreenIndex
                return (
                  <button
                    key={screen.label}
                    onClick={() => setActiveScreenIndex(i)}
                    className={cn(
                      'font-sans text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 border flex items-center gap-2',
                      isActive
                        ? 'bg-accent/20 border-accent text-accent font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                        : 'bg-background border-border text-muted-foreground hover:text-foreground hover:border-border-hover'
                    )}
                  >
                    <span className={cn('w-1.5 h-1.5 rounded-full', isActive ? 'bg-accent' : 'bg-muted-foreground/40')} />
                    <span>{screen.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* ── 2. ARCHITECTURE OVERVIEW, TECH STACK & ACTIONS (Directly Below Gallery) ── */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Description Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Architectural Overview */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-xs font-mono text-accent uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                <span>Executive Architecture</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                System Overview &amp; Engineering Longevity
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Engineering Deliverables */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-xs font-mono text-accent uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>Core Innovations</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Key Engineering Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-background border border-border flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-foreground/90 leading-snug">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column: Tech Stack & Actions */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Card */}
            <div className="p-6 rounded-3xl bg-surface border border-border space-y-4">
              <span className="font-sans font-bold uppercase tracking-[0.16em] text-[10px] text-tertiary block">
                Deployment &amp; Repository
              </span>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-3.5 rounded-2xl bg-accent text-[#0A0E17] font-sans font-bold text-xs uppercase tracking-[0.14em] hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(56,189,248,0.25)]"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live System</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-3.5 rounded-2xl bg-background border border-border text-foreground hover:border-accent hover:text-accent font-sans font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Inspect GitHub Source</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Complete Tech Stack & Protocols */}
            <div className="p-6 rounded-3xl bg-surface border border-border">
              <span className="font-sans font-bold uppercase tracking-[0.16em] text-[10px] text-tertiary block mb-4">
                Technologies &amp; Protocols
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-foreground/90 bg-background border border-border px-3 py-1.5 rounded-xl"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-6 rounded-3xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 text-accent text-xs font-mono mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Production Standard</span>
              </div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                Architected with clean domain separation, strict TypeScript contracts, and automated telemetry logging.
              </p>
            </div>

          </div>

        </div>

        {/* ── 3. KEY PRODUCTION BENCHMARKS (High-Impact Metrics) ───── */}
        {project.benchmarks && project.benchmarks.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.benchmarks.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-surface/80 border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-accent mb-1">
                    {item.metric}
                  </div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-foreground mb-1">
                    {item.label}
                  </h4>
                  <p className="font-sans text-xs text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 3. ARCHITECTURE PIPELINE & DATA FLOW ─────────────────── */}
        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-surface border border-border">
            <div className="flex items-center gap-2.5 mb-2 text-xs font-mono text-accent uppercase tracking-widest">
              <GitMerge className="w-4 h-4" />
              <span>Execution Pipeline</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              End-to-End System Data Flow
            </h2>
            <p className="font-sans text-sm text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              How user inputs, computer vision pipelines, and transaction protocols flow across the stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {project.architectureFlow.map((step, idx) => (
                <div
                  key={step.step}
                  className="relative p-5 rounded-2xl bg-background border border-border/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25">
                        STEP {step.step}
                      </span>
                      {idx < project.architectureFlow.length - 1 && (
                        <span className="hidden md:inline-block text-muted-foreground text-xs font-mono">→</span>
                      )}
                    </div>
                    <h4 className="font-sans font-bold text-sm text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. COMPLETE SYSTEM MODULES BREAKDOWN (12+ Modules) ────── */}
        {project.modules && project.modules.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-2 text-xs font-mono text-accent uppercase tracking-widest">
                  <Boxes className="w-4 h-4" />
                  <span>Module Architecture</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  System Capabilities &amp; {project.modules.length}+ Functional Modules
                </h2>
              </div>
              <span className="font-mono text-xs text-tertiary bg-surface border border-border px-3 py-1.5 rounded-full self-start sm:self-auto">
                {project.modules.length} Production Subsystems
              </span>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.modules.map((module) => (
                <div
                  key={module.id}
                  className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                        {module.tag}
                      </span>
                    </div>
                    <h3 className="font-sans font-bold text-base text-foreground mb-2">
                      {module.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                      {module.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 space-y-1.5">
                    {module.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] font-sans text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 5. ENGINEERING CHALLENGES & SOLUTIONS ────────────────── */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-16 p-8 sm:p-10 rounded-3xl bg-surface border border-border">
            <div className="flex items-center gap-2.5 mb-2 text-xs font-mono text-accent uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4" />
              <span>Technical Hardening</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Key Engineering Bottlenecks &amp; Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-background border border-border/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full inline-block mb-3">
                      Challenge 0{idx + 1}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-foreground mb-3 leading-snug">
                      {c.challenge}
                    </h4>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                      {c.solution}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Engineered &amp; Hardened</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Next Project Footer Banner ──────────────────────────── */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-surface border border-border hover:border-accent/40 transition-colors">
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-1">
                Next Case Study
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                {nextProject.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">
                {nextProject.tagline}
              </p>
            </div>

            <Link
              href={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-[#0A0E17] font-sans font-bold text-xs uppercase tracking-[0.14em] hover:bg-accent-hover transition-all shrink-0"
            >
              <span>View Next System</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
