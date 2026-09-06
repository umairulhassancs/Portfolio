'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  imageSrc: string
  alt: string
  className?: string
  priority?: boolean
  compact?: boolean
}

export function PhoneMockup({ 
  imageSrc, 
  alt, 
  className, 
  priority = true,
  compact = false 
}: PhoneMockupProps) {
  return (
    <div className={cn(
      "relative mx-auto select-none shrink-0 transition-all",
      compact ? "w-[200px] sm:w-[218px]" : "w-[240px] sm:w-[260px] max-w-full",
      className
    )}>
      {/* Outer Titanium Bezel */}
      <div className={cn(
        "relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.12)]",
        compact ? "rounded-[34px] p-2" : "rounded-[42px] p-2.5"
      )}>
        
        {/* Inner Phone Screen Body */}
        <div className={cn(
          "relative w-full overflow-hidden bg-black border border-slate-900",
          compact ? "aspect-[9/17] rounded-[26px]" : "aspect-[9/18.5] rounded-[32px]"
        )}>
          
          {/* Dynamic Island Notch */}
          <div className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-full bg-black border border-white/10 z-30 flex items-center justify-end px-1.5 pointer-events-none",
            compact ? "top-1.5 w-16 h-3.5" : "top-2 w-20 h-4.5"
          )}>
            <div className={cn("rounded-full bg-[#151515] border border-white/10", compact ? "w-1.5 h-1.5" : "w-2 h-2")} />
          </div>

          {/* Screenshot Content */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0E17]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority={priority}
              unoptimized={true}
              className="object-cover object-top"
              sizes={compact ? "(max-width: 768px) 220px, 260px" : "(max-width: 768px) 280px, 320px"}
            />
          </div>

          {/* Screen Glass Reflection */}
          <div 
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20"
          />

          {/* Home Bar Indicator */}
          <div 
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-white/40 z-30",
              compact ? "bottom-1.5 w-16 h-1" : "bottom-1.5 w-20 h-1"
            )}
          />
        </div>

      </div>
    </div>
  )
}
