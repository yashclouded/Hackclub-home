"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slack, Users, MessageSquare, Hash, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function OnlineCommunity() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="relative w-full h-[600px] md:h-[700px]">
        <Image
          src="https://hackclub.com/home/slack_ama.webp"
          alt="Hack Club Slack community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-hackclub-red/80" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                Our <span className="text-hackclub-orange">Online</span> Community
              </h2>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Coding doesn't have to be a solitary activity. At Hack Club, we make remarkable things together, and in
                our Slack you'll find awesome people to hang out with too. Code together, find your programming
                community, dream up something wild, or just #lounge.
              </p>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Occasionally we invite someone we really want to speak to (like Sal Khan, George Hotz, and Lady Ada) and
                host an AMA with them.
              </p>
              <Button
                size="lg"
                className="bg-hackclub-red hover:bg-hackclub-redDark text-white rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg flex items-center gap-2 cursor-link shadow-lg"
              >
                <Slack className="w-5 h-5" />
                <Link href="https://hackclub.com/slack">Join our Slack</Link>
              </Button>
            </motion.div>
          </div>

          <div className="mt-8 md:mt-0 z-10">
            <motion.div
              className="grid grid-cols-2 gap-3 md:gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatCard
                icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-hackclub-orange" />}
                value="1,667"
                label="Currently Online"
                delay={0}
              />
              <StatCard
                icon={<Hash className="w-6 h-6 md:w-8 md:h-8 text-hackclub-orange" />}
                value="14,540"
                label="Total Channels"
                delay={0.1}
              />
              <StatCard
                icon={<MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-hackclub-orange" />}
                value="69,583"
                label="Daily Messages"
                delay={0.2}
              />
              <StatCard
                icon={<Star className="w-6 h-6 md:w-8 md:h-8 text-hackclub-orange" />}
                value="66,549"
                label="Total Members"
                delay={0.3}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 -right-10 md:bottom-10 md:right-10 w-32 h-32 md:w-48 md:h-48 opacity-30 md:opacity-40 rotate-12"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: [0, 0.3, 0.4], rotate: 12 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hardware1.png"
                alt="Hardware decoration"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <AnimatedDots />
      </div>
    </div>
  )
}

function StatCard({
  icon,
  value,
  label,
  delay,
}: { icon: React.ReactNode; value: string; label: string; delay: number }) {
  return (
    <motion.div
      className="bg-white/15 backdrop-blur-md rounded-xl p-4 md:p-6 flex flex-col items-center text-center shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="mb-2">{icon}</div>
      <div className="text-2xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs md:text-sm text-gray-300">{label}</div>
    </motion.div>
  )
}

function AnimatedDots() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-hackclub-orange rounded-full opacity-30 dark:opacity-20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
