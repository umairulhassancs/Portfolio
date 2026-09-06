'use client'

import React, { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      aria-hidden="true" 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-accent/80 via-accent to-[#7dd3fc] transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.9),0_0_20px_rgba(56,189,248,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
