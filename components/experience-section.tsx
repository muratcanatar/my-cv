"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
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

  const experiences = [
    {
      company: "Adesso Turkey",
      role: "Frontend Developer Intern",
      period: "July 2025 - Aug 2025",
      description:
        'Played an active role in the development lifecycle of the live commercial platform "Algida İle Kazan", creating responsive interfaces for a high-traffic, customer-facing environment.',
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Azure DevOps"],
    },
    {
      company: "Parkera",
      role: "Web Development Intern",
      period: "July 2024 - Aug 2024",
      description:
        "Collaborated with the creative team to contribute to modern web design and development processes. Worked on improving user experience and maintaining web applications.",
      technologies: ["HTML", "CSS", "JavaScript"],
      current: false,
    },
    {
      company: "Atalan UAV Project Team",
      role: "Head of Software Department",
      period: "Feb 2024 - May 2025",
      description:
        "Designing a fighting unmanned aerial vehicle for the Teknofest competition. Leading both autonomous flight and image processing teams.",
      technologies: ["Python", "Computer Vision", "Autonomous Systems"],
      current: false,
    },
    {
      company: "Derspresso.com",
      role: "Freelance Content Creator",
      period: "Jan 2022 - June 2022",
      description:
        "Provided students with free and ad-free access to mathematics topics and sample questions. Contributed to content preparation and design.",
      technologies: ["Content Creation", "Web Design", "Education"],
      current: false,
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-16" />

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur relative overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
