"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { useTheme } from "next-themes"

interface Command {
  command: string
  output: string
}

interface TerminalWindowProps {
  commands: Command[]
}

export function TerminalWindow({ commands }: TerminalWindowProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentCommand, setCurrentCommand] = useState("")
  const [currentOutput, setCurrentOutput] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return

    const commandText = commands[currentCommandIndex].command
    let i = 0
    setIsTyping(true)

    const typeCommand = setInterval(() => {
      if (i < commandText.length) {
        setCurrentCommand(commandText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typeCommand)

        setTimeout(() => {
          setCurrentOutput(commands[currentCommandIndex].output)

          setTimeout(() => {
            setCurrentCommandIndex((prev) => prev + 1)
            setCurrentCommand("")
            setCurrentOutput("")
            setIsTyping(false)
          }, 1500)
        }, 500)
      }
    }, 50)

    return () => clearInterval(typeCommand)
  }, [currentCommandIndex, commands])

  return (
    <motion.div
      className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-8 ${isDark ? "bg-slate-800" : "bg-slate-200"} flex items-center px-4`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-xs font-medium text-slate-600 dark:text-slate-300">
          hack-club-terminal
        </div>
      </div>
  
      <div
        className={`h-[calc(100%-2rem)] ${isDark ? "bg-slate-900" : "bg-slate-100"} p-4 font-mono text-sm overflow-auto`}
      >
        <div className="mb-4">
          <div className={`flex items-center ${isDark ? "text-green-400" : "text-green-600"} font-bold`}>
            <Terminal className="w-4 h-4 mr-2" />
            Hack Club Terminal v1.0.0
          </div>
          <div className={`${isDark ? "text-slate-400" : "text-slate-600"} mt-1`}>
            Welcome to the Hack Club community! Type commands to get started.
          </div>
        </div>

        {commands.slice(0, currentCommandIndex).map((cmd, index) => (
          <div key={index} className="mb-4">
            <div className={`flex ${isDark ? "text-purple-400" : "text-purple-600"}`}>
              <span className="text-green-500 mr-2">$</span>
              <span>{cmd.command}</span>
            </div>
            <div className={`mt-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{cmd.output}</div>
          </div>
        ))}

        {currentCommandIndex < commands.length && (
          <div>
            <div className={`flex ${isDark ? "text-purple-400" : "text-purple-600"}`}>
              <span className="text-green-500 mr-2">$</span>
              <span>
                {currentCommand}
                {!isTyping || showCursor ? <span className="animate-pulse">|</span> : null}
              </span>
            </div>
            {currentOutput && (
              <div className={`mt-1 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{currentOutput}</div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
