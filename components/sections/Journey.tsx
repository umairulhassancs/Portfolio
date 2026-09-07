'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ease = [0.16, 1, 0.3, 1] as const

const JOURNEY_MILESTONES = [
  {
    year: '2026',
    role: 'Creator & Full-Stack Developer',
    title: 'Shipped Vouch',
    project: 'Vouch Platform',
    description:
      'Designed and developed a SaaS platform connecting hardware QR tags with privacy-preserving communication between finders and owners. Implemented masked contact workflows, location-based recovery telemetry, real-time messaging, and an interactive Three.js 3D product visualizer.',
    tags: ['Next.js 16', 'React 19', 'Firebase', 'Twilio', 'Three.js', 'Resend', 'SaaS Platform'],
  },
  {
    year: '2026',
    role: 'Full-Stack Developer',
    title: 'Engineered Evershine Educational ERP',
    project: 'Evershine Academy ERP & LMS',
    description:
      'Engineered comprehensive institutional management modules for a multi-campus academy. Implemented on-premise biometric fingerprint machine synchronization for staff/student attendance, automated fee challan generation, payroll ledgers, and secure role-based portals.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Biometric Hardware', 'Tailwind CSS'],
  },
  {
    year: '2025 – 2026',
    role: 'Project Lead & Developer',
    title: 'Developed GardenMate Ecosystem',
    project: 'GardenMate (Final Year Project)',
    description:
      'Built a smart gardening and e-commerce mobile application combining AI plant recognition, AR visualization, community features, and marketplace functionality. Fine-tuned a Vision Transformer classifier for 69 plant species, integrated AR plant previews using Viro React, and developed four role-specific portals for customers, vendors, riders, and administrators.',
    tags: ['React Native', 'Expo SDK 54', 'PyTorch ViT', 'FastAPI', 'Viro React AR', 'Firebase', 'Stripe'],
  },
  {
    year: '2024',
    role: 'Creator & Full-Stack Developer',
    title: 'Built FinGo Multi-Vendor Marketplace',
    project: 'FinGo Multi-Vendor Platform',
    description:
      'Developed an end-to-end multi-vendor marketplace designed to connect retail and grocery stores with customers across Lahore, Karachi, and Islamabad. Implemented role-based access control, JWT authentication with refresh token rotation, real-time inventory tracking, and end-to-end order processing workflows.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API'],
  },
  {
    year: '2022 – 2026',
    role: 'BS in Computer Science',
    title: 'GIFT University',
    project: 'Academic Foundation',
    description:
      'Completed a four-year Computer Science degree covering software engineering, algorithms and data structures, databases, artificial intelligence, computer vision, and distributed systems.',
    tags: ['Software Engineering', 'Data Structures', 'Distributed Systems', 'Computer Vision', 'Database Systems'],
  },
]

export function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-32 relative">
      <div className="max-w-[1000px] mx-auto px-3 sm:px-6">
        <SectionHeading number="06" title="Experience &amp; Projects" />

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-10 md:pl-12 border-l border-border/80 ml-2 sm:ml-4">
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              className="mb-8 sm:mb-16 last:mb-0 relative group"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease }}
            >
              {/* Timeline Node Icon/Dot */}
              <div 
                aria-hidden="true"
                className="absolute -left-[23px] sm:-left-[47px] md:-left-[55px] top-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border-2 border-accent group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(201,169,110,0.6)] transition-all duration-300"
              />

              {/* Milestone Card */}
              <div className="p-3 sm:p-8 rounded-xl sm:rounded-2xl bg-surface/70 border border-border group-hover:border-border-hover transition-all duration-300">
                {/* Year & Role Row */}
                <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2 mb-1.5 sm:mb-3">
                  <span className="font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-[10px] sm:text-xs text-accent">
                    {milestone.year}
                  </span>
                  <span className="font-sans font-medium text-[9px] sm:text-xs text-tertiary">
                    {milestone.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-3xl text-foreground mb-1.5 sm:mb-3 leading-tight">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[11px] sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-6">
                  {milestone.description}
                </p>

                {/* Technology / Domain Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] sm:text-xs text-foreground/70 bg-background/80 border border-border px-2 sm:px-3 py-0.5 sm:py-1 rounded-md group-hover:border-border-hover transition-colors"
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
