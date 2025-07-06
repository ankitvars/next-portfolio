"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Code, Star, ArrowRight, CheckCircle } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { projects } from "@/constants"
import { useFadeInAnimation, useStaggerAnimation } from "@/hooks/use-animation"
import { ProjectsSectionProps } from "@/types"

export function ProjectsSection({ className }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState(0)
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({})
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" })

  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.3)
  const { ref: staggerRef, containerVariants, itemVariants } = useStaggerAnimation(projects, 0.2)

  // Handle image loading states
  const handleImageLoad = (projectTitle: string) => {
    setImageLoading(prev => ({ ...prev, [projectTitle]: false }))
  }

  const handleImageError = (projectTitle: string) => {
    setImageLoading(prev => ({ ...prev, [projectTitle]: false }))
  }

  // Initialize loading states
  useEffect(() => {
    const loadingStates: Record<string, boolean> = {}
    projects.forEach(project => {
      loadingStates[project.title] = true
    })
    setImageLoading(loadingStates)
  }, [])

  return (
    <section
      id="projects"
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
              Featured <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work, demonstrating technical skills and creative problem-solving
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {projects.map((project, index) => (
                <motion.button
                  key={project.title}
                  onClick={() => setSelectedProject(index)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedProject === index
                      ? "text-background"
                      : "text-muted-foreground hover:text-foreground bg-muted"
                    }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {/* Active Background */}
                  <AnimatePresence>
                    {selectedProject === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-accent rounded-xl"
                        layoutId="activeProject"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">{project.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              ref={staggerRef}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className={`${selectedProject === index ? "block" : "hidden"}`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Project Image */}
                    <div className="relative group">
                      {/* Loading Skeleton */}
                      <AnimatePresence>
                        {imageLoading[project.title] && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-muted to-muted/50 rounded-xl animate-pulse"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <motion.div
                                className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-neon-accent/20 rounded-xl border border-border overflow-hidden shadow-lg">
                        <img
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onLoad={() => handleImageLoad(project.title)}
                          onError={() => handleImageError(project.title)}
                        />
                      </div>

                      {/* Enhanced Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"
                        initial={false}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            className="flex items-center justify-between"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <div className="text-white">
                              <h4 className="font-semibold text-lg">{project.title}</h4>
                              <p className="text-sm text-gray-300">{project.description}</p>
                            </div>
                            <div className="flex space-x-2">
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-electric-blue rounded-full text-background hover:bg-electric-blue/80 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-5 h-5" />
                              </motion.a>
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Github className="w-5 h-5" />
                              </motion.a>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div>
                        <motion.h3
                          className="text-3xl font-bold text-foreground mb-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {project.title}
                        </motion.h3>
                      </div>

                      {/* Features */}
                      <div>
                        <motion.h4
                          className="text-xl font-semibold text-foreground mb-2 flex items-center space-x-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <CheckCircle className="w-5 h-5 text-neon-accent" />
                          <span>Key Features</span>
                        </motion.h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              className="flex items-center space-x-3 text-sm text-muted-foreground bg-muted/50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + featureIndex * 0.1 }}
                              whileHover={{ x: 5, backgroundColor: "rgba(var(--electric-blue), 0.1)" }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-neon-accent rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                              />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <motion.h4
                          className="text-xl font-semibold text-foreground mb-2 flex items-center space-x-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Code className="w-5 h-5 text-electric-blue" />
                          <span>Technologies Used</span>
                        </motion.h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-4 py-2 bg-gradient-to-r from-electric-blue/10 to-neon-accent/10 text-sm text-foreground rounded-full border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: 0.9 + techIndex * 0.05 }}
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                                backgroundColor: "rgba(var(--electric-blue), 0.2)"
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-accent text-background font-semibold rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10 flex items-center space-x-2">
                            <Eye className="w-5 h-5" />
                            <span>Live Demo</span>
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neon-accent to-electric-blue"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="relative z-10"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-xl hover:bg-electric-blue hover:text-background transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Project Carousel for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:hidden mt-8"
          >
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((project, index) => (
                  <div key={project.title} className="embla__slide flex-[0_0_100%]">
                    <div className="bg-card border border-border rounded-xl p-6 mx-2">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-electric-blue text-background text-sm rounded-md"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-electric-blue text-electric-blue text-sm rounded-md"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Project Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">
                    {projects.length}
                  </div>
                  <div className="text-muted-foreground">Featured Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-accent mb-2">
                    {projects.reduce((sum, project) => sum + project.features.length, 0)}
                  </div>
                  <div className="text-muted-foreground">Features Implemented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-orange mb-2">
                    {projects.reduce((sum, project) => sum + project.technologies.length, 0)}
                  </div>
                  <div className="text-muted-foreground">Technologies Used</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 