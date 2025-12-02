"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "const developer = {",
  '  name: "Murat Can Atar",',
  '  role: "Frontend Developer",',
  '  skills: ["React", "Next.js", "TypeScript"],',
  '  passion: "Building amazing web experiences"',
  "};",
]

export function TypingCode() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      setIsComplete(true)
      return
    }

    const line = codeLines[currentLine]

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => {
          const newCode = [...prev]
          if (!newCode[currentLine]) {
            newCode[currentLine] = ""
          }
          newCode[currentLine] += line[currentChar]
          return newCode
        })
        setCurrentChar((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
        setCurrentChar(0)
      }, 200)

      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])

  return (
    <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-primary/20 shadow-lg max-w-2xl mx-auto mb-8">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-1">
        {displayedCode.map((line, index) => (
          <div key={index} className="text-primary/90">
            {line}
            {index === currentLine && !isComplete && (
              <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
