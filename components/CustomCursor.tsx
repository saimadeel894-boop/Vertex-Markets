'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot snaps instantly
      dot.style.left = mouseX + 'px'
      dot.style.top  = mouseY + 'px'
      // Ring follows with lag
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => ring.classList.add('hovered')
    const onLeave = () => ring.classList.remove('hovered')

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    // Enlarge ring on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ position: 'fixed', zIndex: 99999, pointerEvents: 'none', borderRadius: '50%', width: 6, height: 6, background: '#fff', transform: 'translate(-50%,-50%)' }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed', zIndex: 99998, pointerEvents: 'none', borderRadius: '50%', width: 32, height: 32, border: '1.5px solid rgba(255,255,255,0.5)', transform: 'translate(-50%,-50%)', transition: 'width 0.3s, height 0.3s, border-color 0.3s' }} />
    </>
  )
}
