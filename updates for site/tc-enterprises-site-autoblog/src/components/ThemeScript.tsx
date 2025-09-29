'use client'

import { useEffect } from 'react'

export default function ThemeScript() {
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', saved === 'dark')
  }, [])
  return null
}