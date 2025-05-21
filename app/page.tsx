"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Github, Instagram, MessageSquare, Rocket, Slack, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { TerminalWindow } from "@/components/terminal-window"
import { CodeBlock } from "@/components/code-block"
import { ParticleBackground } from "@/components/particle-background"
import { MatrixRain } from "@/components/matrix-rain"
import { GlitchText } from "@/components/glitch-text"
import { ScrollProgress } from "@/components/scroll-progress"
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"
import { EmojiReactions } from "@/components/emoji-reactions"
import { FloatingElements } from "@/components/floating-elements"
import { EasterEgg } from "@/components/easter-egg"
import { Navbar } from "@/components/navbar"
import { BeginnerFriendlyBanner } from "@/components/beginner-friendly-banner"
import { OnlineCommunity } from "@/components/online-community"
import { FindYourHome } from "@/components/find-your-home"
import { CoolCursor } from "@/components/cool-cursor"
import { NewsletterSection } from "@/components/newsletter-section"
import { HackClubEvents } from "@/components/hack-club-events"
import { ProgramsSection } from "@/components/programs-section"
import Image from "next/image"

import { RandomGoodVibes } from "@/components/random-good-vibes"
import { KonamiCodeEasterEgg } from "@/components/konami-code-easter-egg"
import { HiddenClickableEasterEgg } from "@/components/hidden-clickable-easter-egg"
import { ScrollRevealSection } from "@/components/scroll-reveal-section"
import { ParallaxSection } from "@/components/parallax-section"
import { TextScrambleEasterEgg } from "@/components/text-scramble-easter-egg"
import { FigmaIcon, MastodonIcon } from "@/components/social-icons"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"

export default function HomePage() {
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)
  const communityRef = useRef<HTMLDivElement>(null)
  const onlineRef = useRef<HTMLDivElement>(null)
  const programsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const terminalCommands = [
    { command: "npm install @hackclub/community", output: "Installing the future of coding..." },
    { command: "cd ./hackclub", output: "Navigating to your new digital home..." },
    { command: "git clone https://github.com/hackclub/sprig.git", output: "Cloning repository... Done!" },
    { command: "npm start", output: "Starting the Hack Club experience... Ready!" },
  ]

  const sampleCode = `function createHacker(name) {
  const skills = [];
  const projects = [];
  
  return {
    name,
    learn: (skill) => {
      skills.push(skill);
      console.log(\`\${name} learned \${skill}!\`);
    },
    build: (project) => {
      projects.push(project);
      return \`\${name} built \${project}!\`;
    },
    share: () => projects.map(p => \`${name}'s project: \${p}\`)
  };
}

// Create your hacker profile!
const you = createHacker("YourNameHere");
you.learn("JavaScript");
you.build("Personal Website");
console.log(you.share());`

  useEffect(() => {
    // weird effect on page load
    const confetti = () => {
      const colors = ["#ec3750", "#ff8c37", "#f1c40f", "#10B981"]
      const confettiCount = 100

      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti"
        confetti.style.left = Math.random() * 100 + "vw"
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"
        document.body.appendChild(confetti)

        setTimeout(() => {
          confetti.remove()
        }, 5000)
      }
    }

    confetti()
  }, [])

  // Hack Club projects data
  const hackClubProjects = [
    {
      id: "sprig",
      title: "Sprig",
      description: "A beginner-friendly game engine and console for making retro-style games",
      longDescription:
        "Sprig is a handheld gaming device and game creation engine designed for beginners. Build games with a simple JavaScript API and share them with the community.",
      image: "/images/sprig.png",
      link: "https://sprig.hackclub.com",
      tags: ["Games", "JavaScript", "Beginner-Friendly"],
      year: 2022,
    },
    {
      id: "scrapbook",
      title: "Scrapbook",
      description: "A daily diary for Hack Clubbers to share what they're working on",
      longDescription:
        "Scrapbook is a platform for Hack Clubbers to post daily updates about what they're building, learning, and doing. It's like a social media platform for makers.",
      image: "/images/scrapbook.png",
      link: "https://scrapbook.hackclub.com",
      tags: ["Community", "Social", "Projects"],
      year: 2020,
    },
    {
      id: "bank",
      title: "Hack Club Bank",
      description: "The financial platform for student hackathons and nonprofits",
      longDescription:
        "Hack Club Bank is a financial platform for student organizations. It provides nonprofit status, banking, and financial tools to student-led initiatives.",
      image: "/images/bank.png",
      link: "https://bank.hackclub.com",
      tags: ["Finance", "Nonprofit", "Tools"],
      year: 2019,
    },
    {
      id: "workshops",
      title: "Workshops",
      description: "Step-by-step coding tutorials created by teens",
      longDescription:
        "Workshops are step-by-step coding tutorials created by teens for teens. Learn to build websites, games, apps, and more with these beginner-friendly guides.",
      image: "/images/workshops.png",
      link: "https://workshops.hackclub.com",
      tags: ["Learning", "Tutorials", "Coding"],
      year: 2018,
    },
    {
      id: "scrapyard",
      title: "Scrapyard",
      description: "A collection of hardware projects and electronic experiments",
      longDescription:
        "Scrapyard is a collection of hardware projects and electronic experiments created by Hack Clubbers. Learn about circuits, microcontrollers, and physical computing.",
      image: "/images/scrapyard.png",
      link: "https://scrapyard.hackclub.com",
      tags: ["Hardware", "Electronics", "Physical Computing"],
      year: 2021,
    },
    {
      id: "hackathons",
      title: "Hackathons",
      description: "Student-led coding events supported by Hack Club",
      longDescription:
        "Hack Club supports student-led hackathons around the world. These events bring together students to build projects, learn new skills, and meet other young makers.",
      image: "/images/hackathons.png",
      link: "https://hackathons.hackclub.com",
      tags: ["Events", "Community", "Competition"],
      year: 2017,
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900 transition-colors duration-300">
      <CoolCursor />

      <Navbar />

      <ScrollProgress />

      <RandomGoodVibes />
      <KonamiCodeEasterEgg />
      <HiddenClickableEasterEgg />
      <TextScrambleEasterEgg />

      <div className="hidden md:block">
        <EmojiReactions position="bottom-right" />
      </div>

      <FloatingElements />

      <EasterEgg />

      <ParallaxSection className="min-h-screen">
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12 overflow-hidden pt-20"
        >
          <div className="absolute inset-0 -z-10">
            <ParticleBackground />
          </div>

          <motion.div
            className="absolute top-20 right-10 w-32 h-32 opacity-10 rotate-12 hidden md:block"
            initial={{ opacity: 0, rotate: 0, y: -50 }}
            animate={{ opacity: 0.1, rotate: 12, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              src="/images/hardware1.png"
              alt="Hardware decoration"
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div
            className="z-10 w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
              <GlitchText
                text="We are 66,472 teen hackers"
                className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-hackclub-red to-hackclub-orange"
              />
              <h1 className="text-3xl md:text-6xl font-bold mt-2">from around the world who code together</h1>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Join the movement. Build the future.{" "}
              <span className="font-bold text-hackclub-red">No coding experience required!</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-hackclub-red to-hackclub-orange hover:from-hackclub-redDark hover:to-hackclub-orangeDark text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 cursor-link shadow-lg"
              >
                <Link href="https://hackclub.com/slack">Join Slack</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-hackclub-red text-hackclub-red hover:bg-red-50 font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 cursor-link"
              >
                <Link href="https://hackclub.com/clubs/">Explore Clubs</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TerminalWindow commands={terminalCommands} />
          </motion.div>
        </section>
      </ParallaxSection>

      <ScrollRevealSection className="py-12 md:py-16 px-4 md:px-12">
        <BeginnerFriendlyBanner />
      </ScrollRevealSection>

      <ScrollRevealSection className="py-16 md:py-24 px-0 md:px-12 bg-gradient-to-b from-white to-slate-100">
        <ProgramsSection />
      </ScrollRevealSection>

      <ScrollRevealSection
        className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-slate-100 to-white"
        direction="right"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Connect with{" "}
              <span className="bg-red-500 text-white px-4 py-1 rounded-lg inline-block transform -rotate-1">
                builders
              </span>{" "}
              from around the world
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              We gather both online and in-person to share our love of code and make things together!
            </p>
          </motion.div>

          <HackClubEvents />
        </div>
      </ScrollRevealSection>

      <ParallaxSection className="min-h-screen" speed={0.3}>
        <section
          ref={storyRef}
          className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 md:py-24"
        >
          <div className="absolute right-0 top-0 w-full md:w-1/3 h-full opacity-10 pointer-events-none">
            <MatrixRain />
          </div>

          <ScrollRevealSection className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Discover the joy of <span className="text-hackclub-red">code</span>, together.
            </h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Every day, thousands of Hack Clubbers gather online and in-person to make things with code. Whether you're
              a beginner programmer or have years of experience, there's a place for you at Hack Club.
            </p>
            <Button
              variant="outline"
              className="border-hackclub-red text-hackclub-red hover:bg-red-50 transition-all cursor-link"
            >
              <Link href="https://hackclub.com/philosophy">Read about our hacker ethic</Link>
            </Button>
          </ScrollRevealSection>

          <div className="mt-12 md:mt-16 w-full max-w-6xl">
            <CodeBlock code={sampleCode} language="javascript" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 w-full max-w-6xl">
            {[
              {
                icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-hackclub-red" />,
                title: "Learn by Building",
                description: "We believe in learning through creating real projects, not following tutorials.",
              },
              {
                icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-hackclub-orange" />,
                title: "Supportive Community",
                description: "Ask questions, share your work, and collaborate with peers who share your passion.",
              },
              {
                icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-hackclub-red" />,
                title: "Launch Your Ideas",
                description: "From hackathons to Slack, we provide the platforms to bring your ideas to life.",
              },
            ].map((item, index) => (
              <ScrollRevealSection key={index} delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 cursor-link relative"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </section>
      </ParallaxSection>

      <ScrollRevealSection className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white">
        <EnhancedProjectsSection />
      </ScrollRevealSection>

      <ScrollRevealSection className="py-16 md:py-24 px-4 md:px-12" direction="left">
        <OnlineCommunity />
      </ScrollRevealSection>

      <ScrollRevealSection
        className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white"
        direction="right"
      >
        <FindYourHome />

        {/* Newsletter Signup */}
        <div className="w-full max-w-6xl mx-auto mt-16 md:mt-24">
          <NewsletterSection />
        </div>
      </ScrollRevealSection>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-600 py-12 px-4 md:px-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Hack Club</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://hackclub.com/philosophy/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/team/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Our Team & Board
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/jobs/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/brand/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/press/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Press Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/philanthropy/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://events.hackclub.com/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="https://jams.hackclub.com/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Jams
                </Link>
              </li>
              <li>
                <Link
                  href="https://toolbox.hackclub.com/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Toolbox
                </Link>
              </li>
              <li>
                <Link
                  href="https://directory.hackclub.com/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Clubs Directory
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackclub.com/conduct/"
                  className="hover:text-hackclub-red transition-colors cursor-link"
                >
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-slate-900 font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://hackclub.com/slack"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <Slack className="w-6 h-6" />
                <span className="sr-only">Slack</span>
              </Link>
              <Link
                href="https://twitter.com/hackclub"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/hackclub"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://figma.com/@hackclub"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <FigmaIcon className="w-6 h-6" />
                <span className="sr-only">Figma</span>
              </Link>
              <Link
                href="https://social.dino.icu/@hackclub"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <MastodonIcon className="w-6 h-6" />
                <span className="sr-only">Mastodon</span>
              </Link>
              <Link
                href="https://www.youtube.com/c/HackClubHQ"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.instagram.com/starthackclub"
                className="text-slate-600 hover:text-hackclub-red transition-colors cursor-link"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>

            <p className="text-sm">1-855-625-HACK (call toll-free)</p>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:team@hackclub.com" className="text-hackclub-red hover:underline">
                team@hackclub.com
              </a>
            </p>
            <p className="text-sm mt-6">© 2025 Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: fall linear forwards;
          z-index: 1000;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        /* Custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-thumb-purple-500::-webkit-scrollbar-thumb {
          background: #ec3750;
          border-radius: 4px;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
        
        /* Hide default cursor when custom cursor is active */
        @media (min-width: 768px) {
          body {
            cursor: none;
          }
          
          a, button, .cursor-link {
            cursor: none;
          }
          
          input, textarea, select {
            cursor: text;
          }
        }
      `}</style>
    </main>
  )
}
