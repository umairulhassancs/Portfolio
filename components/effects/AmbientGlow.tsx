import React from 'react'
import { cn } from '@/lib/utils'

interface AmbientGlowProps {
  className?: string
  /**
   * Size of the glow circle. Defaults to '400px'.
   * Use a percentage string for responsive sizing.
   */
  size?: string
  /**
   * Opacity of the glow (0–1). Defaults to 0.18.
   */
  opacity?: number
}

/**
 * A soft radial gold glow — placed *behind* its sibling elements.
 * The parent must be `position: relative` with overflow NOT hidden (or
 * positioned outside the clipping ancestor).
 */
export function AmbientGlow({ className, size = '400px', opacity = 0.18 }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-[100px]',
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
        opacity,
      }}
    />
  )
}
