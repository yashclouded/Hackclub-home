"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CoolCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const handleLinkHoverEvents = () => {
      const handleLinkMouseOver = () => {
        setLinkHovered(true)
      }

      const handleLinkMouseOut = () => {
        setLinkHovered(false)
      }

      document.querySelectorAll("a, button, .cursor-link").forEach((el) => {
        el.addEventListener("mouseover", handleLinkMouseOver)
        el.addEventListener("mouseout", handleLinkMouseOut)
      })

      return () => {
        document.querySelectorAll("a, button, .cursor-link").forEach((el) => {
          el.removeEventListener("mouseover", handleLinkMouseOver)
          el.removeEventListener("mouseout", handleLinkMouseOut)
        })
      }
    }

    addEventListeners()
    const cleanupLinkEvents = handleLinkHoverEvents()

    return () => {
      removeEventListeners()
      cleanupLinkEvents()
    }
  }, [])

  const cursorVariants = {
    default: {
      opacity: isVisible ? 1 : 0,
      height: 32,
      width: 32,
      fontSize: "16px",
      backgroundColor: "rgba(236, 55, 80, 0.2)",
      x: position.x - 16,
      y: position.y - 16,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 30,
      },
    },
    link: {
      opacity: isVisible ? 1 : 0,
      height: 64,
      width: 64,
      fontSize: "32px",
      backgroundColor: "rgba(138, 43, 226, 0)",
      x: position.x - 32,
      y: position.y - 32,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 30,
      },
    },
    clicked: {
      opacity: isVisible ? 1 : 0,
      height: 24,
      width: 24,
      fontSize: "16px",
      backgroundColor: "rgba(236, 55, 80, 0.4)",
      x: position.x - 12,
      y: position.y - 12,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 30,
      },
    },
  }

  const cursorTrailVariants = {
    default: {
      opacity: isVisible ? 0.3 : 0,
      height: 12,
      width: 12,
      x: position.x - 6,
      y: position.y - 6,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 200,
        damping: 30,
        delay: 0.05,
      },
    },
    link: {
      opacity: isVisible ? 0.5 : 0,
      height: 24,
      width: 24,
      x: position.x - 12,
      y: position.y - 12,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 200,
        damping: 30,
        delay: 0.05,
      },
    },
  }

  const cursorTrailVariants2 = {
    default: {
      opacity: isVisible ? 0.2 : 0,
      height: 8,
      width: 8,
      x: position.x - 4,
      y: position.y - 4,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 100,
        damping: 30,
        delay: 0.1,
      },
    },
    link: {
      opacity: isVisible ? 0.3 : 0,
      height: 16,
      width: 16,
      x: position.x - 8,
      y: position.y - 8,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 100,
        damping: 30,
        delay: 0.1,
      },
    },
  }

  return (
    <div className="hidden md:block">
      <motion.div
        className="cursor-main fixed top-0 left-0 z-[9999] pointer-events-none rounded-full flex items-center justify-center mix-blend-difference"
        variants={cursorVariants}
        animate={clicked ? "clicked" : linkHovered ? "link" : "default"}
      >
        {linkHovered && <span className="text-white">✨</span>}
      </motion.div>
      <motion.div
        className="cursor-trail fixed top-0 left-0 z-[9998] pointer-events-none rounded-full bg-hackclub-red mix-blend-difference"
        variants={cursorTrailVariants}
        animate={linkHovered ? "link" : "default"}
      />
      <motion.div
        className="cursor-trail-2 fixed top-0 left-0 z-[9997] pointer-events-none rounded-full bg-hackclub-orange mix-blend-difference"
        variants={cursorTrailVariants2}
        animate={linkHovered ? "link" : "default"}
      />
    </div>
  )
}
