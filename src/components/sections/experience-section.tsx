"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Award } from "lucide-react"
import { experience, stats } from "@/constants"
import { useFadeInAnimation, useStaggerAnimation } from "@/hooks/use-animation"
import { ExperienceSectionProps } from "@/types"
import Image from 'next/image'

export function ExperienceSection({ className }: ExperienceSectionProps) {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.3)
  const { ref: staggerRef, containerVariants, itemVariants } = useStaggerAnimation(experience, 0.2)

  // Animate counters when career highlights section comes into view
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

    const careerHighlightsElement = document.querySelector('#career-highlights');
    if (careerHighlightsElement) {
      observer.observe(careerHighlightsElement);
    }

    return () => {
      if (careerHighlightsElement) observer.unobserve(careerHighlightsElement);
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      // Extract numeric part (including decimals and plus signs)
      const match = stat.value.match(/(\d+(\.\d+)?)/)
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

  return (
    <section
      id="experience"
      className={`py-6 lg:py-10 relative ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent" />

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
              Work <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey through different companies and roles, showcasing growth and achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            ref={staggerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-neon-accent" />

            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.duration}`}
                variants={itemVariants}
                className={`relative flex items-start mb-4 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-background z-10" />

                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                  }`}>
                  <motion.div
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-electric-blue/50"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={40}
                              height={40}
                              className="object-contain w-10 h-10 rounded-lg shadow-md bg-white dark:bg-zinc-900"
                            />
                          ) : null}
                          <Building className="w-6 h-6 text-muted-foreground hidden" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-electric-blue font-medium">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-1">
                        <Award className="w-4 h-4 text-neon-accent" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="text-sm text-muted-foreground flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achievementIndex * 0.1 }}
                          >
                            <span className="w-1.5 h-1.5 bg-neon-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md border border-border"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Summary */}
          <motion.div
            id="career-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 lg:mt-12 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div className="text-center" key={stat.label}>
                    <motion.div
                      className={`text-3xl font-bold mb-2 ${idx === 0 ? 'text-electric-blue' : idx === 1 ? 'text-neon-accent' : idx === 2 ? 'text-neon-orange' : 'text-foreground'}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                    >
                      {animatedStats[idx]}{stat.value.replace(/^[\d\.]+/, "")}
                    </motion.div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 