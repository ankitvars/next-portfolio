"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Server, Zap, TrendingUp, Target } from "lucide-react"
import { skills } from "@/constants"
import { useFadeInAnimation, useStaggerAnimation } from "@/hooks/use-animation"
import { SkillsSectionProps, Skill } from "@/types"

export function SkillsSection({ className }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "devops">("frontend")
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})
  const [hasAnimated, setHasAnimated] = useState(false)

  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.3)
  const { ref: staggerRef, containerVariants, itemVariants } = useStaggerAnimation(
    skills[activeCategory],
    0.1
  )

  const categories = [
    { key: "frontend", label: "Frontend", icon: Code, color: "from-electric-blue to-blue-500" },
    { key: "backend", label: "Backend", icon: Server, color: "from-neon-accent to-green-500" },
    { key: "devops", label: "DevOps", icon: Database, color: "from-neon-orange to-orange-500" },
  ]

  // Animate progress bars when section comes into view
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            animateProgressBars();
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.querySelector('#skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) observer.unobserve(skillsElement);
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateProgressBars = () => {
    const currentSkills = skills[activeCategory];
    currentSkills.forEach((skill) => {
      const duration = 1500; // 1.5 seconds
      const steps = 60;
      const increment = skill.level / steps;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= skill.level) {
          currentValue = skill.level;
          clearInterval(timer);
        }

        setAnimatedSkills((prev) => ({
          ...prev,
          [skill.name]: Math.floor(currentValue)
        }));
      }, duration / steps);
    });
  };

  // Reset animations when category changes
  useEffect(() => {
    setAnimatedSkills({});
    setHasAnimated(false);
  }, [activeCategory]);

  const getSkillIcon = (skillName: string) => {
    const colors = [
      "bg-electric-blue",
      "bg-neon-accent",
      "bg-neon-orange",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
    ]
    const colorIndex = skillName.length % colors.length
    return colors[colorIndex]
  }

  const getProficiencyIcon = (level: number) => {
    if (level >= 90) return <Target className="w-4 h-4 text-green-500" />
    if (level >= 75) return <TrendingUp className="w-4 h-4 text-blue-500" />
    return <Zap className="w-4 h-4 text-orange-500" />
  }

  return (
    <section
      id="skills"
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
              Technical <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-muted rounded-lg p-1">
              {categories.map((category, index) => {
                const Icon = category.icon
                const isActive = activeCategory === category.key
                return (
                  <motion.button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key as any)}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {/* Active Background */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-md`}
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <motion.div
                        animate={{
                          rotate: isActive ? 360 : 0,
                          scale: isActive ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <span>{category.label}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              ref={staggerRef}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:border-electric-blue/50 overflow-hidden"
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 2
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Skill Header */}
                  <div className="flex items-center space-x-3 mb-4 relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={`/tech/${skill.icon}.svg`}
                        alt={skill.name + " logo"}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-8 h-8 rounded-full ${getSkillIcon(skill.name)}"></div>`;
                          }
                        }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg">{skill.name}</h3>
                      <div className="flex items-center space-x-2">
                        {getProficiencyIcon(skill.level)}
                        <p className="text-sm text-muted-foreground">
                          {skill.level}% proficiency
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3 relative z-10">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <motion.span
                        className="text-electric-blue font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {animatedSkills[skill.name] || 0}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-electric-blue to-neon-accent rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.3 + index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1 + index * 0.1
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-center"
          >
            <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                Technology evolves rapidly, and I'm committed to staying at the forefront of web development.
                I regularly explore new frameworks, tools, and best practices to ensure I deliver cutting-edge solutions
                that meet modern standards and user expectations.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">
                    {skills.frontend.length + skills.backend.length + skills.devops.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-accent mb-1">
                    {Math.round(
                      (skills.frontend.reduce((sum, skill) => sum + skill.level, 0) +
                        skills.backend.reduce((sum, skill) => sum + skill.level, 0) +
                        skills.devops.reduce((sum, skill) => sum + skill.level, 0)) /
                      (skills.frontend.length + skills.backend.length + skills.devops.length)
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-orange mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 