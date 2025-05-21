"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

export function HiddenClickableEasterEgg() {
  const [isVisible, setIsVisible] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const showInterval = setInterval(() => {
      if (Math.random() < 0.05 && !isVisible && !isActivated) {
        const x = Math.random() * (window.innerWidth - 40)
        const y = Math.random() * (window.innerHeight - 40)
        setPosition({ x, y })
        setIsVisible(true)

        setTimeout(() => {
          if (isVisible) setIsVisible(false)
        }, 5000)
      }
    }, 30000)

    return () => clearInterval(showInterval)
  }, [isVisible, isActivated])

  const handleClick = () => {
    setIsActivated(true)
    setIsVisible(false)

    setTimeout(() => {
      setIsActivated(false)
    }, 5000)
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed z-50 cursor-pointer"
            style={{ left: position.x, top: position.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={handleClick}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                rotate: 360,
                boxShadow: [
                  "0px 0px 8px rgba(167, 139, 250, 0.5)",
                  "0px 0px 16px rgba(167, 139, 250, 0.8)",
                  "0px 0px 8px rgba(167, 139, 250, 0.5)",
                ],
              }}
              transition={{
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" },
                boxShadow: { repeat: Number.POSITIVE_INFINITY, duration: 2, yoyo: Number.POSITIVE_INFINITY },
              }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActivated && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 text-yellow-400"
                  initial={{
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: [1, 0],
                    scale: [0, 1, 0.5],
                  }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                >
                  ✨
                </motion.div>
              ))}

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border-2 border-purple-400 text-center">
                <motion.h3
                  className="text-2xl font-bold text-purple-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: 3, duration: 0.5 }}
                >
                  You found a secret!
                </motion.h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Hack Club has a secret message for you: Keep exploring, keep building, keep hacking!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
