"use client"

import { motion } from "framer-motion"

export function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-electric-blue to-neon-accent rounded-xl flex items-center justify-center mx-auto mb-8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-background font-bold text-2xl">AV</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-foreground mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-electric-blue rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-muted rounded-full mt-8 mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-electric-blue to-neon-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
} 