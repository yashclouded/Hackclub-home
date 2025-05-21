"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function BeginnerFriendlyBanner() {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5 rounded-xl p-4 md:p-8 border border-purple-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-2/3">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
            New to coding? <span className="text-hackclub-red">Perfect!</span>
          </h3>
          <p className="text-slate-700 mb-4">
            Hack Club is where beginners become builders. No experience needed—just curiosity and creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-hackclub-red to-hackclub-orange p-2 rounded-full mr-3 shadow-md">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Learn by doing</h4>
                <p className="text-sm text-slate-700">Build real projects from day one</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-hackclub-red to-hackclub-orange p-2 rounded-full mr-3 shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Supportive community</h4>
                <p className="text-sm text-slate-700">Get help from peers and mentors</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-hackclub-red to-hackclub-orange p-2 rounded-full mr-3 shadow-md">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Beginner workshops</h4>
                <p className="text-sm text-slate-700">Step-by-step guides to get started</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-hackclub-red to-hackclub-orange p-2 rounded-full mr-3 shadow-md">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Hardware & software</h4>
                <p className="text-sm text-slate-700">Explore both digital and physical projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200 rotate-3 mb-4">
            <div className="text-4xl mb-2">🚀</div>
            <p className="font-bold text-slate-900">50% of Hack Clubbers start with zero coding experience</p>
          </div>
          <Button className="bg-gradient-to-r from-hackclub-red to-hackclub-orange hover:from-hackclub-redDark hover:to-hackclub-orangeDark text-white shadow-lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
