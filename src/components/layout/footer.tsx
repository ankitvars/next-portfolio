"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone, ExternalLink, Sparkles } from "lucide-react"
import { siteConfig, navigation, socialLinks } from "@/constants"
import { cn } from "@/lib/utils"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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

  const getSocialColor = (icon: string) => {
    switch (icon) {
      case "github":
        return "hover:bg-gray-800 hover:text-white"
      case "linkedin":
        return "hover:bg-blue-600 hover:text-white"
      default:
        return "hover:bg-electric-blue hover:text-white"
    }
  }

  const quickLinks = [
    { name: "Resume", href: "/resume.pdf", icon: ExternalLink },
    { name: "Blog", href: "https://blog.ankitvars.dev", icon: ExternalLink },
    { name: "Services", href: "#services", icon: Sparkles },
    { name: "Testimonials", href: "#testimonials", icon: Sparkles },
  ]

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/5 to-transparent" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-electric-blue/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-1 h-1 bg-neon-accent/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-accent rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(0, 123, 255, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-background font-bold text-xl">AV</span>
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Ankit Varshney
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Senior Frontend Developer
                  </motion.p>
                </div>
              </motion.div>

              <motion.p
                className="text-muted-foreground text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Passionate about creating exceptional digital experiences and building scalable web applications that make a real impact.
              </motion.p>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-muted hover:bg-accent border border-border rounded-xl transition-all duration-300 ${getSocialColor(link.icon)}`}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    aria-label={link.name}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative z-10"
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {getSocialIcon(link.icon)}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.h4
                className="text-lg font-semibold text-foreground mb-6 flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-electric-blue" />
                <span>Quick Links</span>
              </motion.h4>
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.a
                      href={item.href}
                      className="group flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-all duration-300 text-sm"
                      whileHover={{ x: 8 }}
                    >
                      <motion.div
                        className="w-1 h-1 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      <span>{item.name}</span>
                      <motion.div
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      >
                        <ArrowUp className="w-3 h-3 rotate-45" />
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h4
                className="text-lg font-semibold text-foreground mb-6 flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-5 h-5 text-neon-accent" />
                <span>Services</span>
              </motion.h4>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "API Development",
                  "Performance Optimization",
                  "Technical Consulting",
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="flex items-center space-x-2 text-muted-foreground text-sm group cursor-pointer"
                      whileHover={{ color: "var(--electric-blue)" }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-neon-accent rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      <span>{service}</span>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h4
                className="text-lg font-semibold text-foreground mb-6 flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Mail className="w-5 h-5 text-neon-orange" />
                <span>Get In Touch</span>
              </motion.h4>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center space-x-3 text-muted-foreground hover:text-electric-blue transition-all duration-300 text-sm"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="p-2 bg-muted rounded-lg group-hover:bg-electric-blue/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span className="truncate">{siteConfig.contact.email}</span>
                </motion.a>

                <motion.a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="group flex items-center space-x-3 text-muted-foreground hover:text-electric-blue transition-all duration-300 text-sm"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="p-2 bg-muted rounded-lg group-hover:bg-electric-blue/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  <span>{siteConfig.contact.phone}</span>
                </motion.a>

                <motion.div
                  className="group flex items-center space-x-3 text-muted-foreground text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="p-2 bg-muted rounded-lg group-hover:bg-electric-blue/10 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin className="w-4 h-4" />
                  </motion.div>
                  <span>{siteConfig.contact.location}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <motion.div
                className="flex items-center space-x-2 text-muted-foreground text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span>© {currentYear} Ankit Varshney. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 inline" />
                </motion.div>
                <span className="hidden sm:inline">in India</span>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={handleScrollToTop}
                className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-neon-accent/10 hover:from-electric-blue/20 hover:to-neon-accent/20 border border-electric-blue/20 hover:border-electric-blue/40 rounded-xl transition-all duration-300 text-sm font-medium"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0, 123, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
                <span>Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 