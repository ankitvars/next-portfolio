export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    linkedin: string
    portfolio: string
  }
  contact: {
    email: string
    phone: string
    location: string
  }
}

export interface PersonalInfo {
  name: string
  role: string
  location: string
  experience: string
  currentRole: string
  summary: string
  specializations: string[]
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface Skills {
  frontend: Skill[]
  backend: Skill[]
  devops: Skill[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  logo?: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  github: string
  live: string
  features: string[]
}

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Stat {
  label: string
  value: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ThemeToggleProps {
  className?: string
}

export interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
}

export interface AnimatedSectionProps extends SectionProps {
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export interface SkillCardProps {
  skill: Skill
  index: number
}

export interface ProjectCardProps {
  project: Project
  index: number
}

export interface ExperienceCardProps {
  experience: Experience
  index: number
}

export interface CustomCursorProps {
  children: React.ReactNode
}

export interface HeaderProps {
  className?: string
}

export interface HeroSectionProps {
  className?: string
}

export interface AboutSectionProps {
  className?: string
}

export interface SkillsSectionProps {
  className?: string
}

export interface ExperienceSectionProps {
  className?: string
}

export interface ProjectsSectionProps {
  className?: string
}

export interface ContactSectionProps {
  className?: string
} 