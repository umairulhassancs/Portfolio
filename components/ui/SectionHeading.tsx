'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  number: string
  title: string
  className?: string
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn("flex items-end gap-6 mb-16", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-serif italic text-3xl text-accent">·{number}</span>
      <h2 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight leading-none">
        {title}
      </h2>
    </motion.div>
  )
}
