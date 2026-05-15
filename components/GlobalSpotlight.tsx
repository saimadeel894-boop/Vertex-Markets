'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GlobalSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Use a smooth spring to make the spotlight lag slightly behind the cursor for a premium feel
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        background: `
          radial-gradient(400px circle at var(--x) var(--y), rgba(30, 111, 255, 0.05), transparent 80%),
          radial-gradient(800px circle at var(--x) var(--y), rgba(255, 255, 255, 0.015), transparent 60%)
        `
      }}
      ref={(el) => {
        if (!el) return;
        const unsubX = smoothX.on("change", (v) => el.style.setProperty("--x", `${v}px`));
        const unsubY = smoothY.on("change", (v) => el.style.setProperty("--y", `${v}px`));
        return () => { unsubX(); unsubY(); };
      }}
    />
  )
}
