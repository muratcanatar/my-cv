"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const percent = (scrolled / scrollHeight) * 100
      setProgress(percent)
    }

    // ❗ SSR/Hydration scroll jump fix
    // İlk frame geçtikten sonra çalıştırıyoruz:
    const timeout = setTimeout(() => {
      updateProgress()
      window.addEventListener("scroll", updateProgress)
    }, 10)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", updateProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary/20">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
