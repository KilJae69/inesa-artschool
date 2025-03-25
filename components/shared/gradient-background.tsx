"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GradientBackgroundProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  children?: React.ReactNode
}

export default function GradientBackground({
  className,
  primaryColor = "#7c3aed", // Default to the provided accent color
  secondaryColor = "#c4b5fd", // Lighter shade of the primary color
  children,
}: GradientBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Background color */}
      <div className="absolute inset-0 bg-gray-50/60 backdrop-blur-sm" />

      {/* Left gradient on large screens, top gradient on small screens */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 md:opacity-40 blur-3xl 
                  md:left-[-200px] md:top-1/4 
                  left-1/2 top-[-100px] transform md:translate-y-0 -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
        }}
      />

      {/* Right gradient on large screens, bottom gradient on small screens */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 md:opacity-40 blur-3xl 
                  md:right-[-500px] md:bottom-1/4 md:left-auto
                  left-1/2 bottom-[-100px] transform md:translate-y-0 -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

