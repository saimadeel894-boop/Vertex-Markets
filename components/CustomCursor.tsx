'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only activate on desktop pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const tick = () => {
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(tick)
    }

    const expand   = () => ring.classList.add('expanded')
    const collapse = () => ring.classList.remove('expanded')

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', collapse)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
