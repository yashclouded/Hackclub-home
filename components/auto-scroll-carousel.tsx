"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const events = [
  {
    year: "2023",
    title: "Outernet",
    description: "A global network of teen-led hackathons",
    longDescription:
      "Join thousands of teens across the world in a synchronized hackathon experience. Build projects, make friends, and win prizes!",
    image: "/images/event1.png",
    location: "Worldwide",
    attendees: "5,000+",
    date: "October 13-15, 2023",
    link: "#outernet",
  },
  {
    year: "2022",
    title: "The Trail",
    description: "A 3-week cross-country journey with teen hackers on an Amtrak train.",
    longDescription:
      "Travel across America with fellow teen hackers. Code, create, and explore as you journey through diverse landscapes and cities on this unique adventure.",
    image: "/images/trail-event.png",
    location: "Across America",
    attendees: "200+",
    date: "Spring 2025",
    link: "#trail",
  },
  {
    year: "2021",
    title: "Scrapyard",
    description: "Build hardware projects with recycled electronics and components.",
    longDescription:
      "Get your hands dirty with hardware hacking! Learn to repurpose old electronics into new creations while developing skills in electronics and physical computing.",
    image: "/images/scrapyard-event.png",
    location: "Virtual & In-person",
    attendees: "1,500+",
    date: "Fall 2025",
    link: "#scrapyard",
  },
  {
    year: "2020",
    title: "Summer of Making",
    description: "A summer-long hardware hacking event",
    longDescription:
      "Get free hardware and build physical projects all summer long. Share your progress and get feedback from mentors and peers.",
    image: "/images/event4.png",
    location: "Virtual",
    attendees: "3,000+",
    date: "June-August 2020",
    link: "#summer-of-making",
  },
  {
    year: "2019",
    title: "Flagship Summit",
    description: "First annual gathering of Hack Club leaders",
    longDescription:
      "A weekend retreat for Hack Club leaders to share ideas, learn from each other, and plan for the future of their clubs.",
    image: "/images/event5.png",
    location: "San Francisco, CA",
    attendees: "200+",
    date: "August 2-4, 2019",
    link: "#summit",
  },
]

export function AutoScrollCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(carouselRef)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (inView && !isPaused) {
      controls.start({
        x: [0, -1500],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }

    return () => {
      controls.stop()
    }
  }, [controls, inView, isPaused])

  const allEvents = [...events, ...events]

  return (
    <div className="relative overflow-hidden w-full" ref={carouselRef}>
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

      <motion.div className="flex gap-6 py-4" animate={controls} style={{ width: "fit-content" }}>
        {allEvents.map((event, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] md:min-w-[350px]"
            onHoverStart={() => {
              setIsPaused(true)
              setActiveIndex(index)
            }}
            onHoverEnd={() => {
              setIsPaused(false)
              setActiveIndex(null)
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.4,
                delay: index * 0.05
              }
            }}
          >
            <Card className="h-full bg-white border-slate-200 overflow-hidden group">
              <div className="relative h-44 w-full">
                <Image
                  src={event.image || "/placeholder.svg?height=192&width=400"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <div className="text-sm font-bold text-hackclub-orange mb-1 flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-slate-700 mb-4 text-sm md:text-base">
                  {event.description}
                </p>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {event.location}
                  </span>
                  <span className="text-slate-600">{event.attendees} attendees</span>
                </div>
              </CardContent>

              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-hackclub-red/95 to-hackclub-orange/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="text-white space-y-4">
                  <p className="text-lg">{event.longDescription}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-white text-hackclub-red hover:bg-white/90 flex items-center justify-center gap-2"
                    size="sm"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
