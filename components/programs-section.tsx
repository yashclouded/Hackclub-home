"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Flag, Users, DollarSign, Calendar, Star, Github } from "lucide-react"
import Link from "next/link"

// upcoming hackathons data
const upcomingHackathons = [
  {
    name: "Cedaru",
    date: "April 14",
    logo: "🌲",
  },
  {
    name: "FusionHacks 1",
    date: "April 20",
    logo: "🔄",
  },
  {
    name: "Cool as Hack",
    date: "May 24",
    logo: "❄️",
  },
  {
    name: "Milpitas Hacks",
    date: "May 26",
    logo: "🚀",
  },
]

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("clubs")

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Find your <span className="text-hackclub-red">IRL community</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mt-3 max-w-3xl mx-auto px-4">
          Empowering the next generation of coders and creators
        </p>
      </motion.div>

      <div className="flex md:hidden mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-hackclub-red scrollbar-track-transparent pb-2 px-4">
        <button
          onClick={() => setActiveTab("clubs")}
          className={`px-4 py-2 rounded-full whitespace-nowrap mr-3 font-medium transition-all ${
            activeTab === "clubs"
              ? "bg-gradient-to-r from-hackclub-red to-hackclub-orange text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 shadow-sm"
          }`}
        >
          Coding Clubs
        </button>
        <button
          onClick={() => setActiveTab("hackathons")}
          className={`px-4 py-2 rounded-full whitespace-nowrap mr-3 font-medium transition-all ${
            activeTab === "hackathons"
              ? "bg-gradient-to-r from-hackclub-red to-hackclub-orange text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 shadow-sm"
          }`}
        >
          Hackathons
        </button>
        <button
          onClick={() => setActiveTab("hcb")}
          className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
            activeTab === "hcb"
              ? "bg-gradient-to-r from-hackclub-red to-hackclub-orange text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 shadow-sm"
          }`}
        >
          HCB
        </button>
      </div>

      <div className="space-y-8 md:space-y-16 px-4 md:px-0">
        <div className={activeTab === "clubs" ? "block" : "hidden md:block"}>
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image src="/images/coding-club.jpg" alt="Hack Club Coding Club" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
              <div className="max-w-2xl">
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-r from-hackclub-red to-hackclub-orange rounded-full p-2 shadow-lg">
                    <Flag className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    400+ Clubs Worldwide
                  </span>
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A Network of Coding Clubs
                </motion.h3>

                <motion.p
                  className="text-lg text-white/90 mb-4 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Join or start a Hack Club and be part of a network of high quality coding clubs where you learn to
                  code entirely through building things.
                </motion.p>

                <motion.p
                  className="text-lg text-white/90 mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  You can start with no experience and build and ship a project every meeting.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-hackclub-red to-hackclub-orange hover:from-hackclub-redDark hover:to-hackclub-orangeDark text-white shadow-lg rounded-full px-6 py-6 text-base"
                  >
                    <Link href="https://apply.hackclub.com/">Start a Club</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={activeTab === "hackathons" ? "block" : "hidden md:block"}>
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] md:h-[550px] w-full">
              <Image src="/images/hackathons.jpg" alt="High School Hackathons" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-10 md:pb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div className="mb-8 md:mb-0 md:max-w-2xl">
                  <motion.div
                    className="flex items-center space-x-2 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-yellow-400 rounded-full p-1.5 shadow-lg">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">157</span>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 ml-2">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    High School Hackathons
                  </motion.h3>

                  <motion.p
                    className="text-lg text-white/90 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    We support the largest network of high school hackathons in the world. From an online community of
                    organizers to free stickers and more!
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg rounded-full px-6 py-6 text-base flex items-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <Link href="https://hackathons.hackclub.com/">Attend a hackathon</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 rounded-full px-6 py-6 text-base flex items-center gap-2"
                    >
                      <Users className="w-5 h-5" />
                      <Link href="https://hackclub.com/hackathons">Organizer? Learn more</Link>
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 w-full md:w-auto shadow-lg border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-bold mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    Upcoming Hackathons
                  </h4>
                  <div className="space-y-3">
                    {upcomingHackathons.map((hackathon, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-lg shadow-md">
                          {hackathon.logo}
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-blue-300 transition-colors">
                            {hackathon.name}
                          </div>
                          <div className="text-white/70 text-sm">{hackathon.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={activeTab === "hcb" ? "block" : "hidden md:block"}>
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAxMGgyMHYyMGgtMjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDEwYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwem0wIDJjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6bTAgM2MuNTUyIDAgMSAuNDQ4IDEgMXY0aDRjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDFoLTRsLS4wMDEgNGMwIC41NTItLjQ0OCAxLTEgMS0uNTUzIDAtMS0uNDQ4LTEtMXYtNGgtNGMtLjU1MyAwLTEtLjQ0OC0xLTFzLjQ0Ny0xIDEtMWg0di00YzAtLjU1Mi40NDctMSAxLTF6Ii8+PC9nPjwvc3ZnPg==')",
                }}
              ></div>
            </div>

            <div className="relative h-[500px] md:h-[550px] w-full">
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-10">
                <div className="md:max-w-xl mb-10 md:mb-0">
                  <motion.div
                    className="bg-gradient-to-r from-green-400 to-green-500 px-4 py-2 rounded-full text-white text-sm inline-flex items-center mb-4 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="font-bold">$32,724,194.11 raised</span>
                  </motion.div>

                  <motion.h3
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-hackclub-red">HCB</span>
                  </motion.h3>

                  <motion.p
                    className="text-xl text-white/90 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Become a 501(c)3 nonprofit and join 700+ teams using HCB to run world-class events.
                  </motion.p>

                  <motion.p
                    className="text-xl text-white/90 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    This platform is built and maintained by the Hack Club team.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg rounded-full px-8 py-6 text-lg flex items-center gap-2"
                    >
                      <DollarSign className="w-5 h-5" />
                      <Link href="https://hackclub.com/hcb">Start fundraising!</Link>
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="relative w-full md:w-1/2 h-[300px] md:h-[400px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/laptop.png"
                    alt="HCB Dashboard"
                    fill
                    className="object-contain"
                    style={{ filter: "drop-shadow(0 0 30px rgba(59,130,246,0.5))" }}
                  />

                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-green-400 text-xl"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0,
                      }}
                      animate={{
                        y: [null, -50],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: i * 0.8,
                      }}
                    >
                      $
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
