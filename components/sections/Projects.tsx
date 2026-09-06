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
      className="group relative flex flex-col rounded-3xl bg-surface/90 border border-border hover:border-accent/60 shadow-[0_15px_45px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.18)] transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Subtle Top Glowing Aura on Hover */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-32 bg-accent/20 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* ── Top Meta Bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-3 p-6 border-b border-border/80 bg-surface/50">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-accent">
            0{index + 1}
          </span>
          <span className="text-border">/</span>
          <span className="font-sans font-bold uppercase tracking-[0.14em] text-[10px] text-muted-foreground flex items-center gap-1.5">
            {project.type === 'Mobile App' ? (
              <Smartphone className="w-3 h-3 text-accent" />
            ) : (
              <Monitor className="w-3 h-3 text-accent" />
            )}
            {project.platformBadge}
          </span>
        </div>

        {/* Status Pill or Live Launch Link */}
        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans font-bold uppercase tracking-[0.14em] text-[9px] px-2.5 py-1 rounded-full border text-emerald-400 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all z-20"
              title="Launch Live System"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Launch</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          ) : (
            <span className={cn(
              'inline-flex items-center gap-1.5 font-sans font-bold uppercase tracking-[0.14em] text-[9px] px-2.5 py-1 rounded-full border',
              statusBadgeStyles[project.status]
            )}>
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* ── Device Visual Showcase (Clean First Static Image) ───────── */}
      <Link 
        href={`/projects/${project.id}`}
        className="relative px-6 py-5 bg-background/50 flex flex-col items-center justify-between border-b border-border/70 overflow-hidden min-h-[360px] sm:min-h-[390px] cursor-pointer"
        aria-label={`Open ${project.title} case study`}
      >
        {/* Device Container */}
        <div className="relative w-full flex items-center justify-center py-2 max-w-[480px] flex-1">
          {project.type === 'Mobile App' ? (
            <div className="relative w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Subtle Ambient Radial Glow */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute w-52 h-52 bg-accent/15 rounded-full blur-3xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity"
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
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent bg-surface/95 border border-accent/50 px-3 py-1 rounded-full shadow-xl backdrop-blur-md">
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            <span>Open Case Study</span>
          </span>
        </div>

        {/* Static Screen Label */}
        <div className="w-full flex items-center justify-between pt-3 text-xs text-muted-foreground">
          <span className="font-mono text-[10px] text-tertiary">
            Preview · {coverScreen.label}
          </span>
          <span className="font-sans text-[10px] text-accent flex items-center gap-1 font-semibold group-hover:underline">
            <span>{project.screens.length} Screens in Case Study</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </Link>

      {/* ── Card Body & Details ──────────────────────────────────── */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-bold mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
            <Link href={`/projects/${project.id}`} className="hover:underline">
              {project.title}
            </Link>
            <span className="font-sans text-xs text-tertiary font-normal">
              {project.year}
            </span>
          </h3>

          <p className="font-sans text-sm text-accent font-medium mb-4 line-clamp-1">
            {project.tagline}
          </p>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-foreground/80 bg-background/80 border border-border px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="font-mono text-[10px] text-tertiary bg-background/50 border border-border/60 px-2 py-1 rounded-md">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* CTA to View Dedicated Detail Page & Direct Live Launch */}
        <div className="pt-4 border-t border-border/80 flex items-center gap-2.5">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 inline-flex items-center justify-between p-3.5 rounded-2xl bg-surface hover:bg-accent/15 border border-border hover:border-accent text-foreground hover:text-accent font-sans font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 group/link"
          >
            <span>Explore Case Study</span>
            <div className="flex items-center gap-1 text-accent">
              <span className="text-[10px] font-mono lowercase opacity-70">/case-study</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-accent text-[#0A0E17] hover:bg-accent-hover font-sans font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] shrink-0"
              title="Launch Live System"
            >
              <span>Live Launch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-serif italic text-2xl text-accent">·02</span>
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-tertiary">
              Selected Systems
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-tight">
              Featured Systems &amp; Case Studies.
            </h2>
            <p className="font-sans text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
              Production SaaS platforms, mobile augmented reality ecosystems, and deep vision transformer pipelines. Click any case study for deep technical blueprints and interactive screen flows.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
