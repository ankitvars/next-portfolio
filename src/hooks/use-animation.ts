"use client"

import { useInView } from "react-intersection-observer"
import { useAnimation, easeOut } from "framer-motion"
import { useEffect } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls, inView }
}

export function useStaggerAnimation(
  items: any[],
  staggerDelay = 0.1,
  threshold = 0.1
) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  }

  return { ref, controls, inView, containerVariants, itemVariants }
}

export function useParallaxAnimation(speed = 0.5) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const parallaxVariants = {
    hidden: { y: 0 },
    visible: {
      y: (i: number) => i * speed,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  }

  return { ref, inView, parallaxVariants }
}

export function useHoverAnimation() {
  const hoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeOut,
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: easeOut,
      }
    }
  }

  return { hoverVariants }
}

export function useFadeInAnimation(delay = 0) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: easeOut,
      },
    },
  }

  return { ref, inView, fadeInVariants }
}

export function useSlideInAnimation(direction: "left" | "right" | "up" | "down" = "up", delay = 0) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -50, opacity: 0 }
      case "right":
        return { x: 50, opacity: 0 }
      case "up":
        return { y: 50, opacity: 0 }
      case "down":
        return { y: -50, opacity: 0 }
      default:
        return { y: 50, opacity: 0 }
    }
  }

  const slideInVariants = {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: easeOut,
      },
    },
  }

  return { ref, inView, slideInVariants }
} 