"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, AlertCircle, CheckCircle } from "lucide-react"
import { siteConfig, socialLinks } from "@/constants"
import { useFadeInAnimation, useSlideInAnimation } from "@/hooks/use-animation"
import { ContactSectionProps, ContactFormData } from "@/types"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export function ContactSection({ className }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [apiErrors, setApiErrors] = useState<Record<string, string>>({})

  const { ref: fadeRef, fadeInVariants } = useFadeInAnimation(0.3)
  const { ref: slideRef, slideInVariants } = useSlideInAnimation("up", 0.5)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    setApiErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        reset()
        // Show success message for 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")

        // Handle API validation errors
        if (result.errors && Array.isArray(result.errors)) {
          const fieldErrors: Record<string, string> = {}
          result.errors.forEach((error: any) => {
            if (error.path && error.path[0]) {
              const fieldName = error.path[0] as string
              fieldErrors[fieldName] = error.message
              setError(fieldName as keyof ContactFormSchema, {
                type: "server",
                message: error.message,
              })
            }
          })
          setApiErrors(fieldErrors)
        }

        // Handle general error message
        if (result.message) {
          setErrorMessage(result.message)
        } else {
          setErrorMessage("Something went wrong. Please try again.")
        }
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      case "external-link":
        return <ExternalLink className="w-5 h-5" />
      default:
        return <Mail className="w-5 h-5" />
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.contact.location,
      href: "#",
    },
  ]

  return (
    <section
      id="contact"
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
              Get In <span className="bg-gradient-to-r from-electric-blue to-neon-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start a project or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              ref={slideRef}
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 lg:space-y-6"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${errors.name
                      ? "border-destructive focus:border-destructive"
                      : "border-border focus:border-electric-blue"
                      } bg-background text-foreground placeholder:text-muted-foreground`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${errors.email
                      ? "border-destructive focus:border-destructive"
                      : "border-border focus:border-electric-blue"
                      } bg-background text-foreground placeholder:text-muted-foreground`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${errors.subject
                      ? "border-destructive focus:border-destructive"
                      : "border-border focus:border-electric-blue"
                      } bg-background text-foreground placeholder:text-muted-foreground`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${errors.message
                      ? "border-destructive focus:border-destructive"
                      : "border-border focus:border-electric-blue"
                      } bg-background text-foreground placeholder:text-muted-foreground resize-none`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-accent text-background font-semibold rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive"
                  >
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium mb-1">Error sending message</p>
                        <p className="text-sm">{errorMessage}</p>
                        {Object.keys(apiErrors).length > 0 && (
                          <div className="mt-2 text-sm">
                            <p className="font-medium mb-1">Please fix the following issues:</p>
                            <ul className="list-disc list-inside space-y-1">
                              {Object.entries(apiErrors).map(([field, message]) => (
                                <li key={field} className="text-destructive/80">
                                  {field.charAt(0).toUpperCase() + field.slice(1)}: {message}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 lg:space-y-8"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 lg:mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-2 text-sm lg:text-base">
                  Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and collaborations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-200 hover:border-electric-blue/50"
                      whileHover={{ y: -2, scale: 1.02 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="p-2 bg-gradient-to-br from-electric-blue to-neon-accent rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-background" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-sm lg:text-base">{info.label}</p>
                        <p className="text-muted-foreground text-sm lg:text-base truncate">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 lg:mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-3 lg:space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 lg:p-3 bg-muted hover:bg-accent border border-border rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      aria-label={link.name}
                    >
                      {getSocialIcon(link.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-card border border-border rounded-xl p-4 lg:p-6"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2 lg:mb-3">
                  Let's Work Together
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a specific project in mind or just want to explore possibilities,
                  I'd love to hear from you and discuss how we can bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 