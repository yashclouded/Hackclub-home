"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Rocket } from "lucide-react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [isLaunching, setIsLaunching] = useState(false)
  const [showSmoke, setShowSmoke] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(true)
      } else {
        setShowScrollIndicator(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleRocketClick = () => {
    if (!isLaunching) {
      setIsLaunching(true)
      setShowSmoke(true)

      setTimeout(() => {
        setShowSmoke(false)
      }, 1000)

      setTimeout(() => {
        setIsLaunching(false)
      }, 3000)
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-hackclub-red via-hackclub-orange to-hackclub-redLight z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {showScrollIndicator && (
        <div className="fixed right-4 bottom-0 z-50">
          <AnimatePresence>
            {isLaunching ? (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -2000, rotate: 0 }}
                exit={{ y: -2000 }}
                transition={{
                  duration: 2.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="relative"
              >
                <Rocket
                  className="h-10 w-10 text-hackclub-red dark:text-hackclub-orange transform -rotate-45"
                  strokeWidth={1.5}
                />

                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-45 w-6 h-10"
                  initial={{ height: 10 }}
                  animate={{
                    height: [10, 20, 15, 25, 18, 22],
                    opacity: [0.7, 1, 0.8, 1, 0.9, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    background: "linear-gradient(to bottom, rgba(255, 140, 55, 1), rgba(255, 69, 0, 0))",
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                className="cursor-pointer"
                onClick={handleRocketClick}
                whileHover={{ scale: 1.2 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Rocket
                  className="h-10 w-10 text-hackclub-red dark:text-hackclub-orange transform -rotate-45"
                  strokeWidth={1.5}
                />
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-10 opacity-50"
                  animate={{
                    height: [10, 20, 10],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    background: "linear-gradient(to bottom, rgba(236, 55, 80, 0.7), rgba(236, 55, 80, 0))",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showSmoke && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/80"
                    initial={{
                      width: Math.random() * 15 + 10,
                      height: Math.random() * 15 + 10,
                      x: 0,
                      y: 0,
                      opacity: 0.8,
                    }}
                    animate={{
                      width: Math.random() * 30 + 20,
                      height: Math.random() * 30 + 20,
                      x: (Math.random() - 0.5) * 60,
                      y: Math.random() * 40 + 10,
                      opacity: 0,
                    }}
                    transition={{
                      duration: Math.random() * 1 + 0.5,
                    }}
                    style={{
                      left: `${Math.random() * 20 - 10}px`,
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  )
}
