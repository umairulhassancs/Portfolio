'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { BrowserMockup } from '@/components/ui/BrowserMockup'
import { ArrowUpRight, Smartphone, Monitor, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const ease = [0.16, 1, 0.3, 1] as const

const statusBadgeStyles: Record<Project['status'], string> = {
  'Live': 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  'In Development': 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  'Completed': 'text-accent border-accent/30 bg-accent/10',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Landing page displays coverImage (e.g. Care Dashboard for GardenMate) or first screen
  const coverScreen = project.screens.find((s) => s.src === project.coverImage) || project.screens[0]

  return (
    <motion.article
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-surface/90 border border-border hover:border-accent/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.18)] transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Subtle Top Glowing Aura on Hover */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-20 sm:h-32 bg-accent/20 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* ── Top Meta Bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-3 p-2.5 sm:p-6 border-b border-border/80 bg-surface/50">
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-accent shrink-0">
            0{index + 1}
          </span>
          <span className="text-border">/</span>
          <span className="font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[8px] sm:text-[10px] text-muted-foreground flex items-center gap-1 truncate">
            {project.type === 'Mobile App' ? (
              <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent shrink-0" />
            ) : (
              <Monitor className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent shrink-0" />
            )}
            <span className="truncate">{project.platformBadge}</span>
          </span>
        </div>

        {/* Status Pill or Live Launch Link */}
        <div className="flex items-center gap-1.5 shrink-0">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all z-20"
              title="Launch Live System"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live</span>
              <ArrowUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
            </a>
          ) : (
            <span className={cn(
              'inline-flex items-center gap-1 font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[8px] sm:text-[9px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border',
              statusBadgeStyles[project.status]
            )}>
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* ── Device Visual Showcase (Clean Static Image) ───────── */}
      <Link 
        href={`/projects/${project.id}`}
        className="relative px-2 sm:px-6 py-2 sm:py-5 bg-background/50 flex flex-col items-center justify-between border-b border-border/70 overflow-hidden min-h-[140px] xs:min-h-[170px] sm:min-h-[260px] md:min-h-[360px] cursor-pointer"
        aria-label={`Open ${project.title} case study`}
      >
        {/* Device Container */}
        <div className="relative w-full flex items-center justify-center py-1 sm:py-2 max-w-[480px] flex-1">
          {project.type === 'Mobile App' ? (
            <div className="relative w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Subtle Ambient Radial Glow */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute w-32 sm:w-52 h-32 sm:h-52 bg-accent/15 rounded-full blur-3xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity"
              />

              <PhoneMockup
                imageSrc={coverScreen.src}
                alt={`${project.title} — ${coverScreen.label}`}
                priority={true}
                compact={true}
              />
            </div>
          ) : (
            <div className="w-full transition-transform duration-300 group-hover:scale-[1.01]">
              <BrowserMockup
                imageSrc={coverScreen.src}
                alt={`${project.title} — ${coverScreen.label}`}
                url={project.browserUrl}
                priority={true}
                aspectRatio="16/10"
              />
            </div>
          )}
        </div>

        {/* Hover Quick Action Badge */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono text-accent bg-surface/95 border border-accent/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-xl backdrop-blur-md">
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
            <span className="hidden xs:inline">Case Study</span>
          </span>
        </div>

        {/* Static Screen Label */}
        <div className="w-full flex items-center justify-between pt-1.5 sm:pt-3 text-[8px] sm:text-xs text-muted-foreground">
          <span className="font-mono text-[8px] sm:text-[10px] text-tertiary truncate">
            {coverScreen.label}
          </span>
          <span className="font-sans text-[8px] sm:text-[10px] text-accent flex items-center gap-0.5 font-semibold group-hover:underline shrink-0">
            <span>{project.screens.length} Screens</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </Link>

      {/* ── Card Body & Details ──────────────────────────────────── */}
      <div className="p-3 sm:p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif text-sm xs:text-base sm:text-2xl md:text-3xl text-foreground font-bold mb-1 sm:mb-2 group-hover:text-accent transition-colors flex items-center justify-between gap-1">
            <Link href={`/projects/${project.id}`} className="hover:underline truncate">
              {project.title}
            </Link>
            <span className="hidden sm:inline font-sans text-xs text-tertiary font-normal shrink-0">
              {project.year}
            </span>
          </h3>

          <p className="font-sans text-[10px] xs:text-xs sm:text-sm text-accent font-medium mb-1.5 sm:mb-4 line-clamp-1">
            {project.tagline}
          </p>

          <p className="font-sans text-[9px] xs:text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-2.5 sm:mb-6">
            {project.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-6">
            {project.tech.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[8px] sm:text-[10px] text-foreground/80 bg-background/80 border border-border px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.slice(2, 4).map((tech) => (
              <span
                key={tech}
                className="hidden sm:inline-block font-mono text-[8px] sm:text-[10px] text-foreground/80 bg-background/80 border border-border px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 2 && (
              <span className="font-mono text-[8px] sm:text-[10px] text-tertiary bg-background/50 border border-border/60 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md">
                +{project.tech.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* CTA to View Dedicated Detail Page & Direct Live Launch */}
        <div className="pt-2 sm:pt-4 border-t border-border/80 flex items-center gap-1.5 sm:gap-2.5">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 inline-flex items-center justify-between p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface hover:bg-accent/15 border border-border hover:border-accent text-foreground hover:text-accent font-sans font-bold text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.14em] transition-all duration-300 group/link"
          >
            <span className="truncate">Case Study</span>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-4 sm:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl bg-accent text-[#0A0E17] hover:bg-accent-hover font-sans font-bold text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.14em] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] shrink-0"
              title="Launch Live System"
            >
              <span>Live</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-serif italic text-xl sm:text-2xl text-accent">·02</span>
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] text-tertiary">
              Selected Systems
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-tight">
              Featured Systems &amp; Case Studies.
            </h2>
            <p className="font-sans text-muted-foreground text-xs sm:text-base max-w-md leading-relaxed">
              Production SaaS platforms, mobile augmented reality ecosystems, and deep vision transformer pipelines. Click any case study for deep technical blueprints and interactive screen flows.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Grid Layout on ALL screens (including mobile) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
