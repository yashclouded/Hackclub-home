"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ScrollRevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealSectionProps) {
  let initial = { opacity: 0, y: 50 }

  if (direction === "down") {
    initial = { opacity: 0, y: -50 }
  } else if (direction === "left") {
    initial = { opacity: 0, x: 50, y: 0 }
  } else if (direction === "right") {
    initial = { opacity: 0, x: -50, y: 0 }
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}
