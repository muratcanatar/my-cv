"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { TerminalContact } from "./terminal-contact"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "atar_muratcan07@hotmail.com",
      href: "mailto:atar_muratcan07@hotmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+90 553 325 0825",
      href: "tel:+905533250825",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sarıyer, Istanbul",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/muratcanatar",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/murat-can-atar/",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />

          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            {
              "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!"
            }
          </p>

          <div className="mb-16">
            <TerminalContact />
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex items-center justify-center gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="lg" asChild className="group bg-transparent">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>

                <Button size="lg" asChild className="group">
                  <a href="mailto:atar_muratcan07@hotmail.com">
                    Send Email
                    <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>© 2025 Murat Can Atar. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2">Istanbul Technical University • Computer Engineering</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
