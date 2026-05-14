'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [particles, setParticles] = useState<Array<{x: number, y: number, d: number, s: number}>>([])

  // 3D mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const rotateX = useTransform(smoothY, [-1, 1], ['8deg', '-8deg'])
  const rotateY = useTransform(smoothX, [-1, 1], ['-8deg', '8deg'])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    setParticles(Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: Math.random() * 2 + 1,
      s: Math.random() * 40 + 20,
    })))
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 2 - 1
    const y = (e.clientY - rect.top) / rect.height * 2 - 1
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 68,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div className="hero-grid" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -300], x: [0, (Math.random() - 0.5) * 100], opacity: [0, 0.15, 0] }}
          transition={{ duration: p.s, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.d,
            height: p.d,
            borderRadius: '50%',
            background: '#fff',
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        className="container-padded"
        style={{ maxWidth: 1440, margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ flex: '1 1 45%', minWidth: 300, paddingRight: 'clamp(0px, 4vw, 60px)', zIndex: 10 }}>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.05,
                marginBottom: 24,
                letterSpacing: '-0.02em',
              }}
            >
              Trade Smarter.<br />Trade Vertex.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.12 }}
              style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.65, maxWidth: 460, marginBottom: 40 }}
            >
              Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.22 }}
              style={{ display: 'flex', gap: 14, marginBottom: 56, flexWrap: 'wrap' }}
            >
              <a href="#" className="btn-solid" style={{ padding: '12px 28px', fontSize: 15 }}>
                Get Started <span>→</span>
              </a>
              <a href="#" className="btn-ghost" style={{ padding: '12px 28px', fontSize: 15, background: 'transparent' }}>
                Try Demo Account
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.32 }}
              style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}
            >
              <Stat
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                }
                title="Tight Spreads"
                sub="From 0.0 pips"
              />
              <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)' }} className="hidden md:block" />
              <Stat
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                }
                title="Fast Execution"
                sub="&lt; 30ms Average"
              />
              <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)' }} className="hidden lg:block" />
              <Stat
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                }
                title="Secure & Regulated"
                sub="Global Compliance"
              />
              <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)' }} className="hidden md:block" />
              <Stat
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                }
                title="24/7 Support"
                sub="Real Traders"
              />
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            style={{
              flex: '1 1 55%',
              position: 'relative',
              minHeight: 620,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              perspective: 1500,
            }}
          >
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: 580,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glass arch panel with chart */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 40,
                  left: '50%',
                  transform: 'translateX(-50%) translateZ(-80px)',
                  width: '100%',
                  maxWidth: 540,
                  height: 480,
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.012)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '50% 50% 0 0',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                <svg width="100%" height="100%" opacity="0.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M5 85 L15 65 L25 75 L35 45 L45 55 L55 25 L65 45 L75 35 L85 65 L95 55" stroke="#fff" strokeWidth="0.5" fill="none"/>
                  <rect x="10" y="70" width="2" height="15" fill="#fff" opacity="0.4" />
                  <rect x="20" y="60" width="2" height="25" fill="#fff" opacity="0.4" />
                  <rect x="30" y="50" width="2" height="35" fill="#fff" opacity="0.4" />
                  <rect x="40" y="40" width="2" height="45" fill="#fff" opacity="0.4" />
                  <rect x="50" y="30" width="2" height="55" fill="#fff" opacity="0.4" />
                  <rect x="60" y="40" width="2" height="45" fill="#fff" opacity="0.4" />
                  <rect x="70" y="35" width="2" height="50" fill="#fff" opacity="0.4" />
                  <rect x="80" y="60" width="2" height="25" fill="#fff" opacity="0.4" />
                </svg>
              </div>

              {/* Metallic platform disc */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  x: '-50%',
                  width: '100%',
                  maxWidth: 420,
                  height: 60,
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, #777 0%, #111 70%, #000 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 0 60px rgba(255,255,255,0.08), 0 0 120px rgba(37,99,235,0.04)',
                  zIndex: 2,
                  transform: 'translateZ(0px)',
                }}
              />

              {/* Bull statue */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease }}
                style={{
                  position: 'relative',
                  zIndex: 3,
                  transform: 'translateZ(60px)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                className="bull-float"
              >
                <Image
                  src="/bull.png"
                  alt="Bull"
                  width={520}
                  height={460}
                  priority
                  style={{ height: 'auto', maxHeight: 460, width: '100%', maxWidth: 520, objectFit: 'contain' }}
                />
              </motion.div>

              {/* Floating price chips */}
              {!isMobile && (
                <>
                  <PriceChip top="18%" left="8%"   symbol="XAUUSD" price="2,384.65" change="+0.62%" up delay={0.6} tz={100} />
                  <PriceChip top="8%"  right="8%"  symbol="EURUSD" price="1.08945"  change="+0.47%" up delay={0.7} tz={80} />
                  <PriceChip top="46%" right="-4%" symbol="GBPUSD" price="1.27482"  change="+0.36%" up delay={0.8} tz={120} />
                </>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Stat item ──
function Stat({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{title}</div>
        <div style={{ fontSize: 11, color: '#6b7280', whiteSpace: 'nowrap', marginTop: 2 }}
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      </div>
    </div>
  )
}

// ── Floating price chip ──
function PriceChip({ top, left, right, symbol, price, change, up, delay, tz }: any) {
  const [val, setVal] = useState(0)
  const target = parseFloat(price.replace(/,/g, ''))

  useEffect(() => {
    let start: number
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1000, 1)
      setVal(p * target)
      if (p < 1) requestAnimationFrame(step)
    }
    const t = setTimeout(() => requestAnimationFrame(step), delay * 1000)
    return () => clearTimeout(t)
  }, [target, delay])

  const display =
    price === '2,384.65' && val > 0
      ? val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : price

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(15,15,15,0.95)' }}
      style={{
        position: 'absolute',
        top, left, right,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '10px 16px',
        borderRadius: 8,
        transform: `translateZ(${tz}px)`,
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        zIndex: 10,
        minWidth: 110,
      }}
    >
      <div style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.05em', fontWeight: 600 }}>{symbol}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{display}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: up ? '#2563eb' : '#9ca3af', display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 8 }}>{up ? '▲' : '▼'}</span> {change}
      </div>
    </motion.div>
  )
}
