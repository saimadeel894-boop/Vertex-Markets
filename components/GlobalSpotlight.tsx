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
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // Render on top but pointer-events: none lets clicks pass through
        background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.03), transparent 40%)'
      }}
      animate={{
        '--x': `${smoothX.get()}px`,
        '--y': `${smoothY.get()}px`,
      } as any}
      transition={{ type: 'tween', ease: 'linear', duration: 0 }}
    />
  )
}
