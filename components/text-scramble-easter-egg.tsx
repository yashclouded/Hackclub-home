"use client"

import { useState, useEffect, useRef } from "react"

export function TextScrambleEasterEgg() {
  const [isActive, setIsActive] = useState(false)
  const textElements = useRef<NodeListOf<Element> | null>(null)
  const originalTexts = useRef<Map<Element, string>>(new Map())
  const isScrambling = useRef(false)

  useEffect(() => {
    textElements.current = document.querySelectorAll("h1, h2, h3, p:not(.no-scramble)")

    textElements.current.forEach((el) => {
      originalTexts.current.set(el, el.textContent || "")
    })

    const checkInterval = setInterval(() => {
      if (Math.random() < 0.005 && window.scrollY > 100 && !isActive && !isScrambling.current) {
        activateScramble()
      }
    }, 30000)

    return () => clearInterval(checkInterval)
  }, [isActive])

  const activateScramble = () => {
    if (!textElements.current || isScrambling.current) return

    isScrambling.current = true
    setIsActive(true)

    textElements.current.forEach((el) => {
      const originalText = originalTexts.current.get(el) || ""
      scrambleText(el as HTMLElement, originalText)
    })

    setTimeout(() => {
      if (textElements.current) {
        textElements.current.forEach((el) => {
          const originalText = originalTexts.current.get(el) || ""
          el.textContent = originalText
        })
      }
      setIsActive(false)
      isScrambling.current = false
    }, 2000)
  }

  const scrambleText = (element: HTMLElement, originalText: string) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________"
    const duration = 1000
    const frameRate = 30

    let frame = 0
    const frames = duration / frameRate

    const update = () => {
      let output = ""
      const progress = frame / frames

      for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i]

        if (char === " ") {
          output += " "
          continue
        }

        if (progress >= i / originalText.length) {
          output += char
        } else {
          output += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      element.textContent = output

      if (frame < frames) {
        frame++
        requestAnimationFrame(update)
      }
    }

    update()
  }

  return null
}
