"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink, Code, Cpu, Palette, GamepadIcon } from "lucide-react"

export function EnhancedProjectsSection() {
  const projects = [
    {
      id: "blot",
      title: "Blot",
      description: "Program generative art in JavaScript. Draw it on a machine by Hack Club.",
      longDescription:
        "Blot is a plotter bot that lets you create generative art with JavaScript and draw it on a physical machine. Get creative with code and see your digital art come to life on paper!",
      mainImage: "https://blot.hackclub.com/assets/blot-clear-bg.webp",
      bgImage:
        "https://raw.githubusercontent.com/hackclub/blot/main/art/MountainSunset--AlbertM/snapshots/Mountain1.png",
      link: "https://blot.hackclub.com/",
      tags: ["Hardware", "JavaScript", "Art"],
      color: "from-indigo-500 to-purple-600",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "sinerider",
      title: "SineRider",
      description: "A game about love and graphing, powered by teenage hackers of all kinds.",
      longDescription:
        "SineRider is a game where you use mathematical functions to help characters traverse beautiful landscapes. Perfect for math enthusiasts and creative problem solvers!",
      mainImage: "https://cloud-9cei11221-hack-club-bot.vercel.app/0logo_text_2.png",
      bgImage: "https://hackclub.com/home/sinerider-bg.webp",
      link: "https://sinerider.com/",
      tags: ["Game", "Math", "Graphing"],
      color: "from-purple-500 to-pink-600",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "workshops",
      title: "Workshops",
      description: "100+ community-contributed, self-guided coding tutorials and ideas.",
      longDescription:
        "Learn to code by building, one project at a time. Our workshops are step-by-step guides to creating everything from games to websites to art.",
      mainImage: "https://hackclub.com/home/workshops/splatter_paint.png",
      secondaryImage: "https://hackclub.com/home/workshops/particle_physics.png",
      bgImage: "linear-gradient(to right, #3b82f6, #10b981)",
      link: "https://workshops.hackclub.com/",
      workshopLinks: [
        {
          name: "Splatter Paint",
          description: "Crazy colorful splatter paint in your browser with Paper.js",
          image: "https://hackclub.com/home/workshops/splatter_paint.png",
          link: "https://workshops.hackclub.com/splatter_paint/",
        },
        {
          name: "Particle Physics",
          description: "Create a particle physics simulation with p5.js",
          image: "https://hackclub.com/home/workshops/particle_physics.png",
          link: "https://workshops.hackclub.com/particle_physics",
        },
      ],
      tags: ["Tutorials", "Coding", "Projects"],
      color: "from-blue-500 to-green-500",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "sprig-console",
      title: "Sprig Console",
      description: "Join hundreds of teenagers with Sprigs! Build and play your own games.",
      longDescription:
        "Play your own Sprig games on this console, which you can assemble and disassemble. Each kit includes parts needed for getting started with hardware engineering and embedded systems programming.",
      mainImage: "https://hackclub.com/home/sprig-console.webp",
      bgImage: "https://sprig.hackclub.com/pcb.svg",
      link: "https://sprig.hackclub.com/console",
      tags: ["Hardware", "Gaming", "Engineering"],
      color: "from-green-600 to-green-800",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: "sprig",
      title: "Sprig",
      description: "Draw, make music, and craft games in our web-based JavaScript game editor.",
      longDescription:
        "Sprig is a beginner-friendly game engine and editor for making retro-style games. Build games with a simple JavaScript API and share them with the community.",
      mainImage: "https://hackclub.com/home/sprig-logo.webp",
      bgImage: "https://hackclub.com/home/sprig-bg.webp",
      link: "https://sprig.hackclub.com",
      tags: ["Games", "JavaScript", "Beginner-Friendly"],
      color: "from-yellow-400 to-yellow-600",
      icon: <GamepadIcon className="w-5 h-5" />,
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div className="w-full max-w-7xl mx-auto" ref={containerRef}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <GlitchText text="What You Can Build" className="text-3xl md:text-5xl font-bold text-slate-900" />
        <p className="text-lg md:text-xl text-slate-700 mt-4 max-w-3xl mx-auto">
          From hardware to games to art, Hack Clubbers build incredible things. Here's just a sample of what you can
          create.
        </p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-hackclub-red to-hackclub-orange hover:from-hackclub-redDark hover:to-hackclub-orangeDark text-white rounded-full px-8 py-6 text-lg inline-flex items-center gap-2"
        >
          <Link href="https://toolbox.hackclub.com/">Find more in our toolbox</Link>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function GlitchText({ text, className }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    setIsGlitching(true)
    const timeout = setTimeout(() => setIsGlitching(false), 2000)

    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 2000)
    }, 10000)

    return () => {
      clearTimeout(timeout)
      clearInterval(glitchInterval)
    }
  }, [])

  return (
    <div className="relative">
      <motion.h2
        className={`relative z-10 ${className}`}
        animate={{
          x: isGlitching ? [0, -2, 3, -1, 0] : 0,
        }}
        transition={{ duration: 0.5, repeat: isGlitching ? 2 : 0 }}
      >
        {text}
      </motion.h2>

      {isGlitching && (
        <>
          <motion.h2
            className={`absolute top-0 left-0 text-red-500 opacity-70 ${className}`}
            animate={{
              x: [-2, 2, -1, 0],
              opacity: [0.7, 0.5, 0.7, 0],
            }}
            transition={{ duration: 0.5, repeat: 2 }}
            aria-hidden="true"
          >
            {text}
          </motion.h2>
          <motion.h2
            className={`absolute top-0 left-0 text-blue-500 opacity-70 ${className}`}
            animate={{
              x: [2, -2, 1, 0],
              opacity: [0.7, 0.5, 0.7, 0],
            }}
            transition={{ duration: 0.5, repeat: 2 }}
            aria-hidden="true"
          >
            {text}
          </motion.h2>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

      // For Sprig Console 3d effect
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (project.id === "sprig-console" && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * 5 // Max 5 degrees
      const rotateY = ((centerX - x) / centerX) * 5 // Max 5 degrees

      setRotation({ x: rotateX, y: rotateY })
    }
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden shadow-xl ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:flex-row items-center`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        resetRotation()
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 w-full h-full">
        {project.bgImage.includes("gradient") ? (
          <div className="w-full h-full" style={{ background: project.bgImage }}></div>
        ) : (
          <Image
            src={project.bgImage || "/placeholder.svg"}
            alt={`${project.title} background`}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className={`relative z-10 p-8 md:p-12 md:w-1/2 text-white ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
      >
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4 ${index % 2 === 0 ? "" : "md:ml-auto"}`}
        >
          {project.icon}
          <span className="ml-2 text-sm font-medium">{project.tags.join(" • ")}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
        <p className="text-lg text-white/90 mb-6">{project.longDescription}</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className={`bg-gradient-to-r ${project.color} hover:brightness-110 text-white px-6 py-3 rounded-full text-lg inline-flex items-center gap-2`}
          >
            <Link href={project.link}>Explore {project.title}</Link>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>

      <div
        className={`relative z-10 p-8 md:w-1/2 flex items-center justify-center ${project.id === "workshops" ? "flex-col" : ""}`}
      >
        {project.id === "workshops" ? (
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {project.workshopLinks.map((workshop: any, i: number) => (
              <Link href={workshop.link} key={i}>
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-slate-900">{workshop.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{workshop.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : project.id === "sprig-console" ? (
          <motion.div
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isHovered ? "none" : "transform 0.5s ease-out",
            }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src={project.mainImage || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Image
              src={project.mainImage || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
