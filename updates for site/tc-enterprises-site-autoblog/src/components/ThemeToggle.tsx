'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const d = saved ? saved === 'dark' : false
    setIsDark(d)
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    const theme = next ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <button onClick={toggle} className="ml-3 px-3 py-2 rounded-md border text-sm border-primary text-primary hover:bg-primary hover:text-white transition">
      {isDark ? 'Dark ✓' : 'Dark'}
    </button>
  )
}