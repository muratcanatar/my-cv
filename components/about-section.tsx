"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Code2, Trophy } from "lucide-react"

export function AboutSection() {
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

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Istanbul Technical University - Computer Engineering (2021-2026)",
    },
    {
      icon: Code2,
      title: "Specialization",
      description: "Frontend Development with React, Next.js, and TypeScript",
    },
    {
      icon: Trophy,
      title: "Experience",
      description: "Frontend Developer Intern at Adesso Turkey",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center text-balance">
              Frontend-focused Computer Engineering student with practical experience in the full software development
              lifecycle. Skilled in developing reusable components and optimizing web performance using React, Next.js,
              and TypeScript. Strong background in working within Agile environments and utilizing cloud services like
              Azure. Committed to continuous learning and delivering seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
