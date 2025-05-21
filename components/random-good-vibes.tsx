"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Coffee, Sparkles, Music, Smile, Sun } from "lucide-react"

const goodVibesMessages = [
  { text: "You're doing great today!", icon: <Heart className="w-4 h-4 mr-2" /> },
  { text: "Take a break if you need one!", icon: <Coffee className="w-4 h-4 mr-2" /> },
  { text: "Your code is looking magical!", icon: <Sparkles className="w-4 h-4 mr-2" /> },
  { text: "Keep hacking, keep creating!", icon: <Music className="w-4 h-4 mr-2" /> },
  { text: "You belong in the Hack Club community!", icon: <Smile className="w-4 h-4 mr-2" /> },
  { text: "Sunshine and good code vibes!", icon: <Sun className="w-4 h-4 mr-2" /> },
]

export function RandomGoodVibes() {
  const [showMessage, setShowMessage] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(goodVibesMessages[0])

  useEffect(() => {
    const showMessageInterval = setInterval(() => {
      if (Math.random() < 0.2) {
        const randomMessage = goodVibesMessages[Math.floor(Math.random() * goodVibesMessages.length)]
        setCurrentMessage(randomMessage)
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
        }, 5000)
      }
    }, 120000)

    return () => clearInterval(showMessageInterval)
  }, [])

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className="fixed bottom-20 right-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 max-w-xs"
          initial={{ opacity: 0, y: 50, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <div className="flex items-center text-hackclub-red dark:text-hackclub-orange">
            {currentMessage.icon}
            <span className="font-medium">{currentMessage.text}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
