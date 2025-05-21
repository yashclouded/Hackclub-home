"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    setIsGlitching(true)
    const timeout = setTimeout(() => setIsGlitching(false), 2000)

    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 2000)
    }, 10000)

    return () => {
      clearTimeout(timeout)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="relative">
      <motion.h2
        className={cn("relative z-10", className)}
        animate={{
          x: isGlitching ? [0, -2, 3, -1, 0] : 0,
        }}
        transition={{ duration: 0.5, repeat: isGlitching ? 2 : 0 }}
      >
        {text}
      </motion.h2>
        
      {isGlitching && (
        <>
          <motion.h2
            className={cn("absolute top-0 left-0 text-red-500 opacity-70", className)}
            animate={{
              x: [-2, 2, -1, 0],
              opacity: [0.7, 0.5, 0.7, 0],
            }}
            transition={{ duration: 0.5, repeat: 2 }}
            aria-hidden="true"
          >
            {text}
          </motion.h2>
          <motion.h2
            className={cn("absolute top-0 left-0 text-blue-500 opacity-70", className)}
            animate={{
              x: [2, -2, 1, 0],
              opacity: [0.7, 0.5, 0.7, 0],
            }}
            transition={{ duration: 0.5, repeat: 2 }}
            aria-hidden="true"
          >
            {text}
          </motion.h2>
        </>
      )}
    </div>
  )
}
