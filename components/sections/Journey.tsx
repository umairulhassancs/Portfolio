'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ease = [0.16, 1, 0.3, 1] as const

const JOURNEY_MILESTONES = [
  {
    year: '2024 – 2025',
    role: 'Creator & Lead Architect',
    title: 'Shipped Vouch Keychain',
    project: 'Vouch Keychain',
    description:
      'Designed and deployed a full production SaaS platform that pairs hardware QR tags with anonymous real-time communications. Engineered zero-knowledge messaging so finders and owners communicate without exposing personal information, built live GPS capture telemetry, and implemented a Three.js interactive 3D product visualizer.',
    tags: ['Next.js 16', 'React 19', 'Firebase', 'Twilio SMS/Voice', 'Three.js', 'Resend', 'Production SaaS'],
  },
  {
    year: '2024',
    role: 'Lead Developer & AI Engineer',
    title: 'Engineered GardenMate Ecosystem',
    project: 'GardenMate (Final Year Project)',
    description:
      'Spearheaded the development of a comprehensive smart gardening and e-commerce mobile application. Fine-tuned a custom Vision Transformer (ViT) deep learning classifier recognizing 69 plant species, integrated interactive 3D AR plant previews in real space with Viro React, and architected 4 independent portals: Customer, Vendor, Rider, and Admin.',
    tags: ['React Native', 'Expo SDK 54', 'PyTorch ViT', 'FastAPI', 'Viro React AR', 'Firebase', 'Stripe'],
  },
  {
    year: '2024',
    role: 'Full-Stack Developer',
    title: 'Architected FinGo Marketplace',
    project: 'FinGo Multi-Vendor Platform',
    description:
      'Engineered an end-to-end multi-vendor marketplace connecting verified retail and grocery stores across Lahore, Karachi, and Islamabad. Implemented secure role-based access control (RBAC), JWT authentication with refresh rotation, real-time inventory tracking, and full order processing pipelines.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API'],
  },
  {
    year: '2020 – 2024',
    role: 'B.S. in Computer Science',
    title: 'GIFT University',
    project: 'Academic Foundation',
    description:
      'Completed four years of rigorous computer science education focusing on algorithmic complexity, data structures, distributed systems architecture, database management, and artificial intelligence.',
    tags: ['Software Engineering', 'Data Structures', 'Distributed Systems', 'Computer Vision', 'Database Design'],
  },
]

export function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-32 relative">
      <div className="max-w-[1000px] mx-auto px-3 sm:px-6">
        <SectionHeading number="04" title="The Journey" />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-border/80 ml-2 sm:ml-4">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              className="mb-12 sm:mb-16 last:mb-0 relative group"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease }}
            >
              {/* Timeline Node Icon/Dot */}
              <div 
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-accent group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(201,169,110,0.6)] transition-all duration-300"
              />

              {/* Milestone Card */}
              <div className="p-4 sm:p-8 rounded-2xl bg-surface/70 border border-border group-hover:border-border-hover transition-all duration-300">
                {/* Year & Role Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-sans font-bold uppercase tracking-[0.16em] text-xs text-accent">
                    {milestone.year}
                  </span>
                  <span className="font-sans font-medium text-xs text-tertiary">
                    {milestone.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3 leading-tight">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {milestone.description}
                </p>

                {/* Technology / Domain Tags */}
                <div className="flex flex-wrap gap-2">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] sm:text-xs text-foreground/70 bg-background/80 border border-border px-3 py-1 rounded-md group-hover:border-border-hover transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
