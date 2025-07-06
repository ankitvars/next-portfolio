"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CustomCursorProps } from "@/types"

export function CustomCursor({ children }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [tabindex]"
    )

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleHoverStart)
      element.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHoverStart)
        element.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [])

  // Only show custom cursor on desktop
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (!isDesktop) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-300 ${isHovering
              ? "bg-white scale-150"
              : "bg-electric-blue scale-100"
            }`}
        />
      </motion.div>

      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.3,
        }}
      >
        <div className="w-full h-full rounded-full bg-neon-accent blur-sm" />
      </motion.div>

      {/* Particle effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: mousePosition.x + (Math.random() - 0.5) * 20,
            y: mousePosition.y + (Math.random() - 0.5) * 20,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-neon-orange" />
        </motion.div>
      )}
    </>
  )
} 