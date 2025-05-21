"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  link: string
  tags: string[]
  year: number
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-[350px] perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full overflow-hidden bg-white border-slate-200">
            <div className="relative h-[200px] w-full">
              <Image
                src={project.image || "/placeholder.svg?height=200&width=400"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-slate-900/70 text-white px-2 py-1 rounded text-sm">
                {project.year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
              <p className="text-slate-700 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="bg-red-100 text-hackclub-red text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded-full">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <Card className="w-full h-full overflow-hidden bg-white border-slate-200 flex flex-col">
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold mb-3 text-slate-900">{project.title}</h3>
              <p className="text-slate-700 text-sm mb-4">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-red-100 text-hackclub-red text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-slate-200">
              <Button className="w-full bg-hackclub-red hover:bg-hackclub-redDark text-white">Explore Project</Button>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )
}
