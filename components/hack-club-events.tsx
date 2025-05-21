"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Calendar, ExternalLink } from "lucide-react"
import { NeighborhoodEvent } from "@/components/neighborhood-event"

const events = [
  {
    id: "neighborhood",
    title: "Hack Club SF Neighborhood",
    description: "Spend 100 hours on one project, spend this summer in San Francisco.",
    longDescription:
      "Join us in San Francisco for an immersive summer experience. Work on a significant project alongside other teen hackers in a supportive environment.",
    image: "/placeholder.svg?height=400&width=600",
    location: "San Francisco, CA",
    date: "Summer 2025",
    color: "from-hackclub-orange to-hackclub-orangeDark",
    link: "https://neighborhood.hackclub.com/",
  },
  {
    id: "trail",
    title: "The Trail",
    description: "A 3-week cross-country journey with teen hackers on an Amtrak train.",
    longDescription:
      "Travel across America with fellow teen hackers. Code, create, and explore as you journey through diverse landscapes and cities on this unique adventure.",
    image: "/images/trail-event.png",
    location: "Across America",
    date: "July 12-19 (Completed)",
    color: "from-hackclub-orangeLight to-hackclub-orange",
    link: "https://www.youtube.com/watch?v=ufMUJ9D1fi8",
  },
  {
    id: "scrapyard",
    title: "Scrapyard",
    description: "Build hardware projects with recycled electronics and components.",
    longDescription:
      "Get your hands dirty with hardware hacking! Learn to repurpose old electronics into new creations while developing skills in electronics and physical computing.",
    image: "/images/scrapyard-event.png",
    location: "Virtual & In-person",
    date: "March 15-16 (Completed)",
    color: "from-hackclub-red to-hackclub-redDark",
    link: "https://scrapyard.hackclub.com/",
  },
]

export function HackClubEvents() {
  const [activeEvent, setActiveEvent] = useState(events[0].id)
      
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events.map((event) => (
          <motion.button
            key={event.id}
            className={`p-4 rounded-xl text-left transition-all ${
              activeEvent === event.id
                ? "bg-gradient-to-r " + event.color + " text-white shadow-lg"
                : "bg-white border border-slate-200 hover:border-purple-300"
            }`}
            onClick={() => setActiveEvent(event.id)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className={`text-xl font-bold mb-2 ${activeEvent === event.id ? "text-white" : "text-slate-900"}`}>
              {event.title}
            </h3>
            <p className={`text-sm ${activeEvent === event.id ? "text-white/90" : "text-slate-600"}`}>
              {event.description}
            </p>
            {activeEvent === event.id && (
              <div className="mt-2 flex justify-end">
                <ChevronRight className="w-5 h-5" />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {activeEvent === "neighborhood" ? (
        <NeighborhoodEvent />
      ) : (
        events
          .filter((event) => event.id === activeEvent)
          .map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h2>
                  <p className="text-white/90 text-lg max-w-3xl">{event.longDescription}</p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <div className="text-sm text-slate-500 mb-1">Ready to join?</div>
                  <div className="text-xl font-bold text-slate-900">Applications open soon!</div>
                </div>
                <Button
                  className={`bg-gradient-to-r ${event.color} text-white px-8 py-6 rounded-full text-lg flex items-center gap-2`}
                >
                  Join Us <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))
      )}
    </div>
  )
}
