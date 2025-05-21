"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

// Konami code: up, up, down, down, left, right, left, right, b, a
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

// Secret code: h, a, c, k
const hackCode = ["h", "a", "c", "k"]

// Secret code: c, l, u, b
const clubCode = ["c", "l", "u", "b"]

export function KonamiCodeEasterEgg() {
  const [input, setInput] = useState<string[]>([])
  const [easterEggType, setEasterEggType] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = [...input, e.key]

      if (newInput.length > 10) {
        newInput.shift()
      }

      setInput(newInput)

      const isKonamiCode = konamiCode.every(
        (key, index) => newInput[newInput.length - konamiCode.length + index] === key,
      )

      const isHackCode = hackCode.every((key, index) => newInput[newInput.length - hackCode.length + index] === key)

      const isClubCode = clubCode.every((key, index) => newInput[newInput.length - clubCode.length + index] === key)

      if (isKonamiCode) {
        triggerEasterEgg("konami")
      } else if (isHackCode) {
        triggerEasterEgg("hack")
      } else if (isClubCode) {
        triggerEasterEgg("club")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [input])

  const triggerEasterEgg = (type: string) => {
    setEasterEggType(type)

    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Different colors for different easter eggs
      let colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]

      if (type === "hack") {
        colors = ["#ec3750", "#ff8c37", "#f1c40f", "#10B981"]
      } else if (type === "club") {
        colors = ["#ec3750", "#ff8c37", "#f1c40f", "#10B981", "#3498db"]
      }

      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors,
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors,
      })
    }, 250)

    // Hide after 5 seconds
    setTimeout(() => {
      setEasterEggType(null)
    }, 5000)
  }

  return (
    <AnimatePresence>
      {easterEggType && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl border-4 border-purple-500 text-center max-w-md"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{
              scale: 1,
              rotate: 0,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
          >
            {easterEggType === "konami" && (
              <>
                <motion.h2
                  className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  }}
                >
                  🎮 Konami Code Activated! 🎮
                </motion.h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You've unlocked the legendary Konami Code! Old school gaming skills detected!
                </p>
              </>
            )}

            {easterEggType === "hack" && (
              <>
                <motion.h2
                  className="text-3xl font-bold mb-4 text-hackclub-red"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  }}
                >
                  💻 Hack Mode Activated! 💻
                </motion.h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You've unlocked the secret Hack Mode! Time to build something awesome!
                </p>
              </>
            )}

            {easterEggType === "club" && (
              <>
                <motion.h2
                  className="text-3xl font-bold mb-4 text-hackclub-orange"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  }}
                >
                  🚀 Club Mode Activated! 🚀
                </motion.h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You've unlocked the secret Club Mode! Welcome to the community!
                </p>
              </>
            )}

            <div className="flex justify-center space-x-4">
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: [0, 360],
                  transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                }}
              >
                {easterEggType === "konami" ? "🎮" : easterEggType === "hack" ? "💻" : "🚀"}
              </motion.div>
              <motion.div
                className="text-4xl"
                animate={{
                  y: [0, -10, 0],
                  transition: { repeat: Number.POSITIVE_INFINITY, duration: 1 },
                }}
              >
                {easterEggType === "konami" ? "🕹️" : easterEggType === "hack" ? "⚡" : "🔥"}
              </motion.div>
              <motion.div
                className="text-4xl"
                animate={{
                  scale: [1, 1.5, 1],
                  transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                }}
              >
                {easterEggType === "konami" ? "👾" : easterEggType === "hack" ? "🔍" : "🌟"}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
