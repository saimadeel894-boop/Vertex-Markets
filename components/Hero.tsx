'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const stats = [
  { label: 'Min Spread',    sub: 'From 0.0 pips',  end: 0 },
  { label: 'Execution',     sub: '< 30ms Average',  end: 30 },
  { label: 'Countries',     sub: 'Global Reach',    end: 180 },
]

function useCountUp(end: number, duration = 1600) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])
  useEffect(() => {
    if (!started || end === 0) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])
  return { value, ref }
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const h = (e: MouseEvent) => setMousePos({
      x: (e.clientX / window.innerWidth  - 0.5) * 14,
      y: (e.clientY / window.innerHeight - 0.5) * 14,
    })
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [isMobile])

  return (
    <section style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', background: '#000', fontFamily: 'Inter, sans-serif', overflow: 'hidden', paddingTop: 84 }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', paddingTop: 40, paddingBottom: 60 }}>

        {/* ── GRID: Stack on mobile, side-by-side on desktop ── */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 60 : 80, alignItems: 'center' }}>

          {/* ── LEFT ── */}
          <motion.div variants={container} initial="hidden" animate="show">

            <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#6b7585', textTransform: 'uppercase' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                Institutional Grade Infrastructure
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Trade Smarter.<br />Trade Vertex.
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: isMobile ? 16 : 18, color: '#6b7585', lineHeight: 1.65, marginBottom: 40, maxWidth: 480, fontWeight: 400 }}>
              Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: isMobile ? 48 : 60 }}>
              <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: isMobile ? '14px 28px' : '16px 36px', background: '#fff', color: '#000', fontWeight: 800, fontSize: isMobile ? 14 : 15, borderRadius: 12, textDecoration: 'none', letterSpacing: '-0.01em', transition: 'all 0.3s ease', flexShrink: 0 }}>
                Open Account
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', padding: isMobile ? '14px 28px' : '16px 36px', background: 'transparent', color: '#9ca3af', fontWeight: 600, fontSize: isMobile ? 14 : 15, borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s ease' }}>
                Try Demo
              </a>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: isMobile ? 28 : 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
              {stats.map(s => <StatCounter key={s.label} {...s} />)}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Display Case ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: isMobile ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', height: isMobile ? 420 : 680, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1600 }}
          >
            {/* Curved Glass Panel */}
            <motion.div style={{
              position: 'absolute',
              bottom: isMobile ? 60 : 90,
              width: isMobile ? '85%' : 440,
              height: isMobile ? 320 : 450,
              background: 'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1.5px solid rgba(255,255,255,0.12)',
              borderRadius: '52% 52% 0 0 / 44% 44% 0 0',
              backdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 20px 40px rgba(255,255,255,0.04)',
              rotateY: isMobile ? 0 : mousePos.x * 0.3,
              rotateX: isMobile ? 0 : -mousePos.y * 0.3,
            }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
            </motion.div>

            {/* Chrome Pedestal */}
            <div style={{ position: 'absolute', bottom: isMobile ? 16 : 28, width: isMobile ? 240 : 340, height: isMobile ? 56 : 72, background: 'linear-gradient(to bottom, #3a3a3a 0%, #1a1a1a 40%, #080808 100%)', borderTop: '2px solid rgba(255,255,255,0.4)', borderRadius: '50%', boxShadow: '0 30px 80px rgba(0,0,0,0.95), inset 0 4px 12px rgba(255,255,255,0.2)', transform: 'rotateX(68deg)', zIndex: 5 }} />

            {/* Bull */}
            <motion.div
              style={{ position: 'absolute', bottom: isMobile ? 40 : 60, width: isMobile ? '78%' : '360px', zIndex: 20 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/bull.png" alt="The Bull" className="bull-float" style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center bottom' }} />
            </motion.div>

            {/* Price Chips — hidden on smallest screens, shown on sm+ */}
            {!isMobile && (
              <>
                <PriceChip top="8%"  left="50%" tx="-50%" symbol="EURUSD" price="1.08945" change="+0.47%" up delay={0.5} mx={mousePos.x} />
                <PriceChip top="44%" right="-2%"           symbol="GBPUSD" price="1.27482" change="+0.30%" up delay={0.65} mx={mousePos.x} />
                <PriceChip top="47%" left="-2%"            symbol="XAUUSD" price="2,384.65" change="+0.62%" up delay={0.8} mx={mousePos.x} />
              </>
            )}
          </motion.div>
        </div>

        {/* Mobile Price Chips Row */}
        {isMobile && (
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8, marginTop: 32, scrollbarWidth: 'none' }}>
            {[
              { symbol: 'EURUSD', price: '1.08945', change: '+0.47%', up: true },
              { symbol: 'GBPUSD', price: '1.27482', change: '+0.30%', up: true },
              { symbol: 'XAUUSD', price: '2,384.65', change: '+0.62%', up: true },
            ].map(c => (
              <div key={c.symbol} style={{ flexShrink: 0, background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '10px 16px', minWidth: 130 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: '#4b5563', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{c.symbol}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{c.price}</span>
                  <span style={{ fontSize: 10, fontWeight: 800, color: c.up ? '#22c55e' : '#ef4444' }}>{c.change}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function StatCounter({ label, sub, end }: { label: string; sub: string; end: number }) {
  const { value, ref } = useCountUp(end)
  return (
    <div ref={ref}>
      <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
        {end === 0 ? '0.0' : value}
        <span style={{ fontSize: 13, fontWeight: 500, marginLeft: 2, color: '#4b5563' }}>
          {label === 'Execution' ? 'ms' : label === 'Countries' ? '+' : ''}
        </span>
      </div>
      <div style={{ fontSize: 10, color: '#4b5563', marginTop: 6, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{sub}</div>
    </div>
  )
}

function PriceChip({ top, left, right, tx, symbol, price, change, up, delay, mx }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'absolute', top, left, right, zIndex: 40, background: 'rgba(8,8,8,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '11px 18px', transform: `translate(${tx || '0px'}, 0) rotateY(${mx * 0.3}deg)`, boxShadow: '0 20px 40px rgba(0,0,0,0.7)', minWidth: 138, transition: 'transform 0.12s ease-out' }}
    >
      <div style={{ fontSize: 9, fontWeight: 800, color: '#4b5563', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{symbol}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{price}</span>
        <span style={{ fontSize: 10, fontWeight: 800, color: up ? '#22c55e' : '#ef4444', background: up ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', padding: '2px 6px', borderRadius: 5 }}>{change}</span>
      </div>
    </motion.div>
  )
}
