"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Briefcase } from "lucide-react"
import { personalInfo, stats } from "@/constants"
import { useFadeInAnimation, useStaggerAnimation } from "@/hooks/use-animation"
import { AboutSectionProps } from "@/types"

export function AboutSection({ className }: AboutSectionProps) {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.3)
  const { ref: staggerRef, containerVariants, itemVariants } = useStaggerAnimation(stats, 0.2)

  // Animate counters when section comes into view
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsElement = document.querySelector('#about');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) observer.unobserve(skillsElement);
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      // Extract numeric part (including decimals)
      const match = stat.value.match(/\d+(\.\d+)?/)
      const targetValue = match ? parseFloat(match[0]) : 0
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = targetValue / steps
      let currentValue = 0

      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= targetValue) {
          currentValue = targetValue
          clearInterval(timer)
        }

        setAnimatedStats((prev) => {
          const newStats = [...prev]
          // Show decimals only if present in the original value
          newStats[index] = stat.value.includes('.') ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue)
          return newStats
        })
      }, duration / steps)
    })
  }

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Ankit_Varshney_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="about"
      className={`py-6 lg:py-10 relative ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={fadeRef}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know me better and understand my journey in the world of web development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Professional Summary */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Current Role */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-electric-blue to-neon-accent rounded-lg">
                    <Briefcase className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Current Role
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {personalInfo.currentRole}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{personalInfo.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Specializations
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.specializations.map((spec, index) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-electric-blue rounded-full" />
                      <span className="text-sm">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.button
                onClick={handleDownloadResume}
                className="group relative px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-accent text-background font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-accent to-electric-blue"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              ref={staggerRef}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {animatedStats[index]}{stat.value.replace(/^[\d\.]+/, "")}
                  </motion.div>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                What Drives Me
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                I&apos;m passionate about creating exceptional user experiences and building scalable applications that make a real impact.
                My approach combines technical expertise with creative problem-solving, ensuring every project I work on delivers
                both functionality and elegance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 