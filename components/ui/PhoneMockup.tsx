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
      compact ? "w-full max-w-[110px] xs:max-w-[140px] sm:w-[218px]" : "w-[220px] sm:w-[260px] max-w-full",
      className
    )}>
      {/* Outer Titanium Bezel */}
      <div className={cn(
        "relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.12)]",
        compact ? "rounded-[18px] sm:rounded-[34px] p-1 sm:p-2" : "rounded-[28px] sm:rounded-[42px] p-1.5 sm:p-2.5"
      )}>
        
        {/* Inner Phone Screen Body */}
        <div className={cn(
          "relative w-full overflow-hidden bg-black border border-slate-900",
          compact ? "aspect-[9/17] rounded-[14px] sm:rounded-[26px]" : "aspect-[9/18.5] rounded-[22px] sm:rounded-[32px]"
        )}>
          
          {/* Dynamic Island Notch */}
          <div className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-full bg-black border border-white/10 z-30 flex items-center justify-end px-1.5 pointer-events-none",
            compact ? "top-1 w-10 sm:w-16 h-2 sm:h-3.5" : "top-1.5 sm:top-2 w-14 sm:w-20 h-3 sm:h-4.5"
          )}>
            <div className={cn("rounded-full bg-[#151515] border border-white/10", compact ? "w-1 h-1 sm:w-1.5 sm:h-1.5" : "w-1.5 sm:w-2 h-1.5 sm:h-2")} />
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
              sizes={compact ? "(max-width: 768px) 140px, 260px" : "(max-width: 768px) 280px, 320px"}
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
              compact ? "bottom-1 w-10 sm:w-16 h-0.5 sm:h-1" : "bottom-1.5 w-14 sm:w-20 h-0.5 sm:h-1"
            )}
          />
        </div>

      </div>
    </div>
  )
}
