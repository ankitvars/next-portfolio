"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, ExternalLink, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { navigation, socialLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { HeaderProps } from "@/types"

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      case "mail":
        return <Mail className="w-5 h-5" />
      case "external-link":
        return <ExternalLink className="w-5 h-5" />
      default:
        return <ExternalLink className="w-5 h-5" />
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-neon-accent/5"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("#home")}
          >
            <motion.div
              className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-electric-blue to-neon-accent rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-background font-bold text-lg lg:text-xl">
                AV
              </span>
            </motion.div>
            <div className="hidden sm:block">
              <motion.h1
                className="text-sm sm:text-lg lg:text-xl font-bold text-foreground"
                whileHover={{ color: "var(--electric-blue)" }}
                transition={{ duration: 0.3 }}
              >
                Ankit Varshney
              </motion.h1>
              <motion.p
                className="text-xs lg:text-sm text-muted-foreground"
                whileHover={{ color: "var(--neon-accent)" }}
                transition={{ duration: 0.3 }}
              >
                Senior Frontend Developer
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    isActive
                      ? "text-electric-blue"
                      : "text-foreground hover:text-electric-blue"
                  )}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-accent rounded-full"
                      layoutId="activeNav"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  {...(link.url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-accent transition-all duration-300 border border-border/50 hover:border-electric-blue/50"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-muted/50 hover:bg-accent transition-all duration-300 border border-border/50"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-3 sm:py-4 space-y-3 sm:space-y-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 font-medium relative overflow-hidden text-sm sm:text-base",
                          isActive
                            ? "bg-gradient-to-r from-electric-blue/20 to-neon-accent/20 text-electric-blue border border-electric-blue/30"
                            : "hover:bg-accent"
                        )}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue to-neon-accent"
                            layoutId="mobileActiveNav"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    )
                  })}
                </nav>

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-3 sm:px-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      {...(link.url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      className="p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-accent transition-all duration-300 border border-border/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      aria-label={link.name}
                    >
                      {getSocialIcon(link.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 