"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface EmojiReactionsProps {
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left"
}

export function EmojiReactions({ position = "bottom-right" }: EmojiReactionsProps) {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const [emojiBurst, setEmojiBurst] = useState<{ emoji: string; id: number }[]>([])
  const [burstCount, setBurstCount] = useState(0)

  const emojis = ["🚀", "💻", "🔥", "✨", "🎮", "🤖"]

  const positionClasses = {
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-left": "bottom-4 left-4",
  }

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji)

    const newBursts = Array.from({ length: 8 }, (_, i) => ({
      emoji,
      id: burstCount + i,
    }))

    setEmojiBurst((prev) => [...prev, ...newBursts])
    setBurstCount((prev) => prev + 8)

    setShowEmojis(false)
  }

  useEffect(() => {
    if (emojiBurst.length > 0) {
      const timer = setTimeout(() => {
        setEmojiBurst((prev) => prev.slice(8))
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [emojiBurst])

  return (
    <div className={`fixed ${positionClasses[position]} z-40`}>
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <AnimatePresence>
          {emojiBurst.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 0.5,
                x: Math.random() * 100 - 50,
                y: Math.random() * -100 - 20,
                rotate: Math.random() * 360,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute text-2xl"
            >
              {item.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showEmojis && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-slate-800 rounded-full shadow-lg p-2 flex space-x-2 border border-slate-200 dark:border-slate-700"
          >
            {emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleEmojiClick(emoji)}
                className="w-10 h-10 text-xl flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowEmojis(!showEmojis)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-xl"
      >
        {selectedEmoji || "😎"}
      </motion.button>
    </div>
  )
}
