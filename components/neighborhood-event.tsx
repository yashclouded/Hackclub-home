"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function NeighborhoodEvent() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-xl">
      <div className="absolute inset-0 w-full h-full">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://neighborhood.hackclub.com/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Summer 2025
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              San Francisco, CA
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Hack Club SF Neighborhood</h2>

          <p className="text-xl text-white/90 mb-6 max-w-2xl">
            Spend 100 hours on one project, spend this summer in San Francisco. Join us for an immersive summer
            experience where you'll work on a significant project alongside other teen hackers in a supportive
            environment.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-hackclub-red to-hackclub-orange hover:from-hackclub-redDark hover:to-hackclub-orangeDark text-white shadow-lg rounded-full px-6 py-6 text-base flex items-center gap-2"
            >
              <Link href="https://neighborhood.hackclub.com/">Apply Now</Link> <ExternalLink className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-6 py-6 text-base"
            >
              <Link href="https://neighborhood.hackclub.com/">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
