"use client"

import type React from "react"

import { useState } from "react"

export function TerminalContact() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to Murat Can Atar's contact terminal",
    "Type 'help' to see available commands",
    "",
  ])

  const commands: Record<string, string> = {
    help: "Available commands: email, github, linkedin, location, clear",
    email: "Email: atar_muratcan07@hotmail.com",
    github: "GitHub: github.com/muratcanatar",
    linkedin: "LinkedIn: linkedin.com/in/murat-can-atar",
    location: "Location: Istanbul, Turkey",
    clear: "CLEAR_SCREEN",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = command.toLowerCase().trim()

    if (cmd === "clear") {
      setOutput([])
    } else if (commands[cmd]) {
      setOutput((prev) => [...prev, `$ ${command}`, commands[cmd], ""])
    } else if (cmd) {
      setOutput((prev) => [
        ...prev,
        `$ ${command}`,
        `Command not found: ${cmd}. Type 'help' for available commands.`,
        "",
      ])
    }

    setCommand("")
  }

  return (
    <div className="bg-black/90 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-primary/30 shadow-2xl max-w-3xl mx-auto">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="h-64 overflow-y-auto mb-4 space-y-1 text-green-400">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-green-400"
          placeholder="Type a command..."
        />
      </form>
    </div>
  )
}
