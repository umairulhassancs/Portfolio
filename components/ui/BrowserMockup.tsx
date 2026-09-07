'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Lock } from 'lucide-react'

interface BrowserMockupProps {
  imageSrc: string
  alt: string
  url?: string
  className?: string
  priority?: boolean
  aspectRatio?: string
}

export function BrowserMockup({
  imageSrc,
  alt,
  url = 'https://production-app.internal',
  className,
  priority = false,
  aspectRatio = '16/10',
}: BrowserMockupProps) {
  return (
    <div className={cn("relative w-full rounded-2xl overflow-hidden bg-surface border border-border shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none", className)}>
      {/* Top Window Bar */}
      <div className="h-6 sm:h-10 px-2 sm:px-4 bg-[#0F1420] border-b border-border/80 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-[#FF5F56]/90" />
          <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-[#FFBD2E]/90" />
          <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-[#27C93F]/90" />
        </div>

        {/* Address URL Pill */}
        <div className="flex-1 max-w-sm mx-auto h-4 sm:h-6 rounded-md bg-background/70 border border-border/60 flex items-center justify-center px-1.5 sm:px-3 text-[8px] sm:text-[11px] font-mono text-muted-foreground truncate gap-1 sm:gap-1.5">
          <Lock className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-accent shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        {/* Action placeholder */}
        <div className="hidden sm:block w-12" />
      </div>

      {/* Screen Area */}
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio }}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />

        {/* Subtle Glass Glare */}
        <div 
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent"
        />
      </div>
    </div>
  )
}
