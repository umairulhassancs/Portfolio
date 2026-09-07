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
      compact 
        ? "w-full max-w-[95px] xs:max-w-[115px] sm:max-w-none sm:w-[145px] md:w-[155px] lg:w-[165px]" 
        : "w-[160px] sm:w-[180px] md:w-[200px] max-w-full",
      className
    )}>
      {/* Outer Titanium Bezel */}
      <div className={cn(
        "relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.12)]",
        compact ? "rounded-[20px] sm:rounded-[32px] p-1 sm:p-1.5" : "rounded-[28px] sm:rounded-[36px] p-1.5"
      )}>
        
        {/* Inner Phone Screen Body (Exact 9:19.5 smartphone aspect ratio) */}
        <div className={cn(
          "relative w-full overflow-hidden bg-black border border-slate-900 aspect-[9/19.5]",
          compact ? "rounded-[16px] sm:rounded-[26px]" : "rounded-[22px] sm:rounded-[30px]"
        )}>
          
          {/* Dynamic Island Notch */}
          <div className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-full bg-black border border-white/10 z-30 flex items-center justify-end px-1 pointer-events-none",
            compact ? "top-1 sm:top-1.5 w-8 sm:w-11 h-1.5 sm:h-2" : "top-1.5 sm:top-2 w-12 sm:w-16 h-2.5 sm:h-3"
          )}>
            <div className={cn("rounded-full bg-[#151515] border border-white/10", compact ? "w-1 sm:w-1.5 h-1 sm:h-1.5" : "w-1.5 h-1.5")} />
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
              sizes={compact ? "(max-width: 640px) 115px, 200px" : "(max-width: 768px) 200px, 240px"}
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
              compact ? "bottom-1 sm:bottom-1.5 w-8 sm:w-12 h-0.5" : "bottom-1.5 w-12 sm:w-16 h-0.5"
            )}
          />
        </div>

      </div>
    </div>
  )
}
