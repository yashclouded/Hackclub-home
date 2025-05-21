"use client"

import { motion } from "framer-motion"
import { Slack, Github, Flag, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FindYourHome() {
  const cards = [
    {
      title: "Join Our Slack",
      description: "Connect with other technical teenagers on Slack and hack on things together.",
      icon: <Slack className="w-8 h-8 text-white" />,
      link: "https://hackclub.com/slack",
      gradient: "from-blue-500 to-blue-700",
      image: "/images/hardware2.png",
      delay: 0,
    },
    {
      title: "Explore Our Open Source Tools",
      description: "We're currently building a game engine, daily streak system, graphing game, and more!",
      icon: <Github className="w-8 h-8 text-white" />,
      link: "https://github.com/hackclub",
      gradient: "from-purple-500 to-purple-800",
      image: "/images/hardware3.png",
      delay: 0.1,
    },
    {
      title: "Start A Club",
      description: "Build an in-person community of high school hackers, and we're here to help.",
      icon: <Flag className="w-8 h-8 text-white" />,
      link: "https://hackclub.com/clubs/",
      gradient: "from-hackclub-red to-hackclub-redDark",
      image: "/images/hardware4.png",
      delay: 0.2,
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 opacity-10 rotate-12 hidden md:block"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 0.1, rotate: 12 }}
        transition={{ duration: 1 }}
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

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-sm uppercase tracking-wider text-slate-500 mb-2">
          We've got a lot going on - let's recap
        </div>
        <h2 className="text-4xl md:text-6xl font-bold">
          Find your second home at{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-hackclub-red via-hackclub-orange to-purple-600">
            Hack Club
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-xl cursor-link group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.delay }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}></div>

            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 opacity-20 rotate-12"
              initial={{ rotate: 0, scale: 0.8 }}
              whileHover={{ rotate: 25, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt="Hardware decoration"
                width={150}
                height={150}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <Link href={card.link} className="block p-8 h-full relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/30 transition-all">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/90 mb-8">{card.description}</p>
              <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/40 transition-all">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
