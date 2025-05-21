"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const elements = [
  { emoji: "💻", size: 30 },
  { emoji: "🚀", size: 40 },
  { emoji: "⚡", size: 25 },
  { emoji: "🔥", size: 35 },
  { emoji: "🎮", size: 30 },
  { emoji: "🤖", size: 45 },
  { emoji: "🎯", size: 30 },
  { emoji: "🔍", size: 25 },
  { emoji: "🎨", size: 35 },
]

export function FloatingElements() {
  const [floatingElements, setFloatingElements] = useState<any[]>([])
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const newElements = elements.map((element, index) => {
      return {
        ...element,
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 300 + 50,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 5,
      }
    })

    setFloatingElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-10 dark:opacity-5"
          style={{
            left: `${element.x}%`,
            top: element.y,
            fontSize: element.size,
          }}
          animate={{
            y: [element.y, element.y + 100, element.y],
            x: [`${element.x}%`, `${element.x + 5}%`, `${element.x - 5}%`, `${element.x}%`],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}
