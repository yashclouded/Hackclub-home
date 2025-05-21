"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    let i = 0
    const typeCode = setInterval(() => {
      if (i < code.length) {
        setDisplayedCode(code.substring(0, i + 1))
        i++
      } else {
        clearInterval(typeCode)
        setIsTyping(false)
      }
    }, 20)

    return () => clearInterval(typeCode)
  }, [code])

  const highlightSyntax = (text: string) => {
    const keywords = ["function", "const", "let", "var", "return", "if", "else", "for", "while", "console"]
    let highlighted = text

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g")
      highlighted = highlighted.replace(regex, `<span class="text-purple-600 dark:text-purple-400">${keyword}</span>`)
    })

    highlighted = highlighted.replace(
      /(['"`])(.*?)(['"`])/g,
      '<span class="text-green-600 dark:text-green-400">$1$2$3</span>',
    )

    highlighted = highlighted.replace(/\/\/(.*)/g, '<span class="text-slate-500 dark:text-slate-400">//$1</span>')

    highlighted = highlighted.replace(/(\w+)(\()/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>$2')

    return highlighted
  }

  return (
    <motion.div
      className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={`h-10 ${isDark ? "bg-slate-800" : "bg-slate-200"} flex items-center justify-between px-4`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs font-medium text-slate-600 dark:text-slate-300">{language}.js</div>
        <div className="text-xs text-slate-500">{isTyping ? "typing..." : "ready"}</div>
      </div>

      <div className={`p-4 font-mono text-sm overflow-auto ${isDark ? "bg-slate-900" : "bg-white"} max-h-[400px]`}>
        <pre className="text-slate-800 dark:text-slate-200">
          <code dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedCode) }} />
          {isTyping && <span className="animate-pulse">|</span>}
        </pre>
      </div>
    </motion.div>
  )
}
