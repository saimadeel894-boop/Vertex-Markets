'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/* ── Stagger container variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const stats = [
  { label: 'Tight Spreads',     sub: 'From 0.0 pips',    end: 0.0 },
  { label: 'Execution Speed',   sub: '< 30ms Average',   end: 30   },
  { label: 'Client Countries',  sub: 'Global Reach',      end: 180  },
]

/* ── Count-up hook ── */
function useCountUp(end: number, duration = 1600) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  return { value, ref }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth  - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16,
      })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <section
      ref={containerRef}
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#000', paddingTop: 88, fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '60px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%' }}>

        {/* ── LEFT: Staggered Fade-Up ── */}
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 99, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#9ca3af', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #fff' }} />
              Institutional Grade Infrastructure
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{ fontSize: 64, fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Trade Smarter.<br />Trade Vertex.
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 18, color: '#6b7585', lineHeight: 1.65, marginBottom: 44, maxWidth: 480, fontWeight: 400 }}>
            Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}>
            {/* Primary CTA */}
            <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', background: '#fff', color: '#000', fontWeight: 800, fontSize: 15, borderRadius: 12, textDecoration: 'none', letterSpacing: '-0.01em', transition: 'all 0.3s ease' }}>
              Open Account
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            {/* Ghost CTA */}
            <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 36px', background: 'transparent', color: '#9ca3af', fontWeight: 700, fontSize: 15, borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s ease' }}>
              Try Demo
            </a>
          </motion.div>

          {/* ── Count-up Stats ── */}
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {stats.map(s => <StatCounter key={s.label} {...s} />)}
          </motion.div>

        </motion.div>

        {/* ── RIGHT: Display Case ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 720, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1800 }}
        >
          {/* Curved Glass Panel — museum display case */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 90, width: 460, height: 480,
              background: 'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1.5px solid rgba(255,255,255,0.12)',
              borderRadius: '52% 52% 0 0 / 44% 44% 0 0',
              backdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 20px 40px rgba(255,255,255,0.04)',
              rotateY: mousePos.x * 0.4,
              rotateX: -mousePos.y * 0.4,
            }}
          >
            {/* Internal reflection */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
          </motion.div>

          {/* Chrome Pedestal */}
          <div style={{ position: 'absolute', bottom: 28, width: 380, height: 80, background: 'linear-gradient(to bottom, #3a3a3a 0%, #1a1a1a 40%, #080808 100%)', borderTop: '2px solid rgba(255,255,255,0.4)', borderRadius: '50%', boxShadow: '0 30px 80px rgba(0,0,0,0.95), inset 0 4px 12px rgba(255,255,255,0.2)', transform: 'rotateX(68deg)', zIndex: 5 }} />

          {/* THE BULL — Float + Glow */}
          <motion.div
            style={{ position: 'absolute', bottom: 60, width: 400, zIndex: 20, rotateY: mousePos.x * 0.3 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/bull.png" alt="The Bull" className="bull-float" style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center bottom' }} />
          </motion.div>

          {/* Floating Price Chips */}
          <PriceChip top="8%"  left="50%" translateX="-50%" symbol="EURUSD" price="1.08945" change="+0.47%" up zIndex={40} delay={0.6} mousePos={mousePos} />
          <PriceChip top="42%" right="-2%"                   symbol="GBPUSD" price="1.27482" change="+0.30%" up zIndex={40} delay={0.7} mousePos={mousePos} />
          <PriceChip top="45%" left="-2%"                    symbol="XAUUSD" price="2,384.65" change="+0.62%" up zIndex={40} delay={0.8} mousePos={mousePos} />
        </motion.div>

      </div>
    </section>
  )
}

/* ── Count-up Stat ── */
function StatCounter({ label, sub, end }: { label: string; sub: string; end: number }) {
  const { value, ref } = useCountUp(end)
  return (
    <div ref={ref}>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
        {end === 0.0 ? '0.0' : value}
        <span style={{ fontSize: 14, fontWeight: 500, marginLeft: 2, color: '#6b7585' }}>
          {label === 'Execution Speed' ? 'ms' : label === 'Client Countries' ? '+' : ''}
        </span>
      </div>
      <div style={{ fontSize: 11, color: '#4b5563', marginTop: 6, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{sub}</div>
    </div>
  )
}

/* ── Price Chip (animated) ── */
function PriceChip({ top, left, right, bottom, translateX, symbol, price, change, up, zIndex, delay, mousePos }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute', top, left, right, bottom, zIndex,
        background: 'rgba(10,10,10,0.88)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 18,
        padding: '12px 20px',
        transform: `translate(${translateX || '0px'}, 0) translateZ(30px) rotateY(${mousePos.x * 0.3}deg)`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 0 8px rgba(255,255,255,0.04)',
        transition: 'transform 0.12s ease-out',
        minWidth: 140,
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 800, color: '#4b5563', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 }}>{symbol}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>{price}</span>
        <span style={{ fontSize: 11, fontWeight: 800, color: up ? '#22c55e' : '#ef4444', background: up ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', padding: '2px 7px', borderRadius: 6 }}>{change}</span>
      </div>
    </motion.div>
  )
}
