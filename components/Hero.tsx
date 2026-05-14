'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [particles, setParticles] = useState<Array<{x: number, y: number, d: number, s: number}>>([])

  // 3D tracking
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
    setParticles(Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: Math.random() * 3 + 1,
      s: Math.random() * 30 + 15
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
      style={{ minHeight: '100vh', background: '#000000', display: 'flex', alignItems: 'center', paddingTop: 84, position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Elements */}
      <div className="hero-grid" />
      {particles.map((p, i) => (
        <motion.div key={i}
          animate={{ y: [0, -200], x: [0, Math.random() * 100 - 50], opacity: [0, 0.15, 0] }}
          transition={{ duration: p.s, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.d, height: p.d, borderRadius: '50%', background: '#fff', pointerEvents: 'none' }}
        />
      ))}

      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* LEFT COLUMN 45% */}
          <div style={{ flex: '1 1 45%', minWidth: 300, paddingRight: 'clamp(0px, 4vw, 40px)', zIndex: 10 }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
              style={{ fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: 24 }}
            >
              Trade Smarter.<br />Trade Vertex.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.12 }}
              style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.6, maxWidth: 500, marginBottom: 40 }}
            >
              Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.22 }}
              style={{ display: 'flex', gap: 16, marginBottom: 60, flexWrap: 'wrap' }}
            >
              <a href="#" className="btn-solid">Get Started <span>→</span></a>
              <a href="#" className="btn-ghost">Try Demo Account</a>
            </motion.div>

            {/* Stats Row - Horizontal Line */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.32 }}
              style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
            >
              <Stat icon="◎" title="Tight Spreads" sub="From 0.0 pips" />
              <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.12)' }} className="hidden sm:block" />
              <Stat icon="⚡" title="Fast Execution" sub="< 30ms Average" />
              <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.12)' }} className="hidden lg:block" />
              <Stat icon="🛡️" title="Secure & Regulated" sub="Global Compliance" />
              <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.12)' }} className="hidden sm:block" />
              <Stat icon="🎧" title="24/7 Support" sub="Real Traders" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN 55% */}
          <div style={{ flex: '1 1 55%', position: 'relative', minHeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', perspective: 1000 }}>
            
            <motion.div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 550, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', rotateX, rotateY, transformStyle: 'preserve-3d' }}>
              
              {/* Curved Glass Panel BEHIND Bull */}
              <div style={{
                position: 'absolute', bottom: 25, left: '50%', transform: 'translateX(-50%) translateZ(-50px)',
                width: '100%', maxWidth: 500, height: 450,
                backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '50% 50% 0 0',
                overflow: 'hidden'
              }}>
                <svg width="100%" height="100%" opacity="0.15" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M10 80v-20 M10 70h2v-10h-2z M20 60v-30 M20 50h2v-15h-2z M30 70v-40 M30 50h2v-10h-2z M40 30v-20 M40 25h2v-10h-2z M50 50v-30 M50 40h2v-15h-2z" stroke="#fff" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>

              {/* Chrome Platform */}
              <motion.div 
                animate={{ opacity: [0.5, 1.0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', bottom: 0, left: '50%', x: '-50%',
                  width: '100%', maxWidth: 380, height: 50, transform: 'translateZ(0px)',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, #777 0%, #1a1a1a 100%)',
                  boxShadow: '0 0 80px rgba(120,120,120,0.35), 0 0 160px rgba(120,120,120,0.15)',
                  zIndex: 2
                }} 
              />

              {/* Bull Statue */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease }}
                style={{ position: 'relative', zIndex: 3, transform: 'translateZ(50px)', width: '100%', display: 'flex', justifyContent: 'center' }}
                className="bull-float"
              >
                <Image src="/bull.png" alt="Bull" width={500} height={450} priority style={{ height: 'auto', maxHeight: 450, width: '100%', maxWidth: 500, objectFit: 'contain' }} />
              </motion.div>

              {/* Price Chips */}
              {!isMobile && (
                <>
                  <PriceChip top="15%" left="15%" symbol="XAUUSD" price="2,384.65" change="+0.62%" up delay={0.6} tz={60} />
                  <PriceChip top="8%" right="15%" symbol="EURUSD" price="1.08945" change="+0.47%" up delay={0.7} tz={40} />
                  <PriceChip top="45%" right="-2%" symbol="GBPUSD" price="1.27482" change="-0.30%" up={false} delay={0.8} tz={80} />
                </>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, title, sub }: { icon: string, title: string, sub: string }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>{title}</div>
        <div style={{ fontSize: 11, color: '#9ca3af', whiteSpace: 'nowrap' }}>{sub}</div>
      </div>
    </div>
  )
}

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

  const display = price === '2,384.65' && val > 0 
    ? val.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) 
    : price

  return (
    <motion.div
      initial={{ opacity: 0, x: left ? -20 : 20 }}
      animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
      transition={{ 
        opacity: { duration: 0.6, delay, ease },
        x: { duration: 0.6, delay, ease },
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
      style={{
        position: 'absolute', top, left, right,
        background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)', padding: '8px 14px', borderRadius: 8,
        transform: `translateZ(${tz}px) rotateX(8deg)`,
        cursor: 'default', display: 'flex', flexDirection: 'column', gap: 4
      }}
    >
      <div style={{ fontSize: 9, color: '#9ca3af', letterSpacing: '0.05em', fontWeight: 600 }}>{symbol}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{display}</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: up ? '#22c55e' : '#ef4444' }}>{change}</div>
    </motion.div>
  )
}
