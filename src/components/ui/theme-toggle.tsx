"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-muted-foreground animate-pulse" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative w-10 h-10 rounded-full border border-border bg-background",
        "flex items-center justify-center transition-all duration-300",
        "hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-5 h-5"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-neon-orange" />
        ) : (
          <Moon className="w-5 h-5 text-electric-blue" />
        )}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-accent/20 opacity-0"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          repeat: 0,
        }}
      />
    </motion.button>
  )
} 