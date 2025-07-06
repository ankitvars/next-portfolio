"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { personalInfo, socialLinks } from "@/constants"
import { useFadeInAnimation, useSlideInAnimation } from "@/hooks/use-animation"
import { HeroSectionProps } from "@/types"
import Image from 'next/image'

export function HeroSection({ className }: HeroSectionProps) {
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const fullText = `Hi, I'm ${personalInfo.name}`
  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.5)
  const { ref: slideRef, slideInVariants } = useSlideInAnimation("up", 0.8)

  // Auto-typing effect
  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (currentIndex === fullText.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText, isTyping])

  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      default:
        return <Mail className="w-5 h-5" />
    }
  }

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-electric-blue/10 to-neon-accent/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Circle */}
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-neon-orange/10 to-electric-blue/10 blur-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Triangle */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-neon-accent/10 to-electric-blue/10 blur-xl"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 lg:pt-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Picture */}
          <motion.div
            ref={fadeRef}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="mb-2"
          >
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-accent rounded-full blur-2xl opacity-30 animate-pulse" />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-neon-accent p-1"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ankit Varshney profile photo"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-electric-blue shadow-xl mx-auto mb-4"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Auto-typing Text */}
          <motion.div
            ref={slideRef}
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            className="mb-2"
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">
                {text}
              </span>
              {isTyping && (
                <motion.span
                  className="inline-block w-1 h-16 lg:h-20 bg-electric-blue ml-2"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {personalInfo.role} crafting digital experiences with modern technologies
            </p>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mb-2"
          >
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {personalInfo.specializations.slice(0, 3).map((spec, index) => (
                <motion.span
                  key={spec}
                  className="px-3 py-1 rounded-full text-sm bg-muted/50 text-muted-foreground border border-border/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  {spec}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center my-4 lg:my-6"
          >
            {/* Contact Button */}
            <motion.button
              onClick={handleScrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-accent text-background font-semibold rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-accent to-electric-blue"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-full overflow-hidden transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-electric-blue group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-accent border border-border/50 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.8 + index * 0.1 }}
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 focus:outline-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        aria-label="Scroll Down"
      >
        <motion.div
          className="flex flex-col items-center text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
} 