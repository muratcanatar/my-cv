"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "EtkinLink",
      subtitle: "Student Event Platform",
      description:
        "A campus-focused event platform where users can browse upcoming student activities, see event details, and track events of interest. Features polished UI designed for university email accounts.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Flask", "MySQL", "shadcn/ui"],
      liveUrl: "https://etkinlinknew.vercel.app",
      stats: "Full-stack event management system",
    },
    {
      title: "NBA Stats Hub 2023-24",
      subtitle: "Sports Statistics Platform",
      description:
        "A modern frontend site delivering comprehensive statistics for the 2023-24 NBA season with interactive navigation and player performance data.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "MySQL"],
      liveUrl: "https://nba-frontend-last.vercel.app/",
      stats: "450+ players • 30 teams • 1,230 games",
    },
    {
      title: "Tesla Checker",
      subtitle: "Stock Monitoring Bot",
      description:
        "A Python-based stock monitoring bot that checks Tesla Turkey Model Y stock page and sends notifications via Telegram when new stock is detected.",
      technologies: ["Python", "Selenium", "Telegram API"],
      githubUrl: "https://github.com/muratcanatar/Tesla_Checker",
      stats: "Automated stock tracking",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  const handleMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 transition-all duration-300 bg-card/50 backdrop-blur group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget as HTMLDivElement)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget as HTMLDivElement)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-mono text-accent mb-3">{project.stats}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="group/btn">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
