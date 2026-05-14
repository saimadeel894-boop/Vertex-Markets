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
    setParticles(Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      d: Math.random() * 2 + 1,
      s: Math.random() * 40 + 20
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
          animate={{ y: [0, -300], x: [0, (Math.random() - 0.5) * 100], opacity: [0, 0.2, 0] }}
          transition={{ duration: p.s, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.d, height: p.d, borderRadius: '50%', background: '#fff', pointerEvents: 'none' }}
        />
      ))}

      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* LEFT COLUMN 45% */}
          <div style={{ flex: '1 1 45%', minWidth: 300, paddingRight: 'clamp(0px, 4vw, 60px)', zIndex: 10 }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
              style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.05, marginBottom: 28 }}
            >
              Trade Smarter.<br />Trade Vertex.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.12 }}
              style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.6, maxWidth: 520, marginBottom: 44 }}
            >
              Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.22 }}
              style={{ display: 'flex', gap: 16, marginBottom: 64, flexWrap: 'wrap' }}
            >
              <a href="#" className="btn-solid">Get Started <span>→</span></a>
              <a href="#" className="btn-ghost">Try Demo Account</a>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.32 }}
              style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}
            >
              <Stat icon="◎" title="Tight Spreads" sub="From 0.0 pips" />
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} className="hidden md:block" />
              <Stat icon="⚡" title="Fast Execution" sub="< 30ms Average" />
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} className="hidden lg:block" />
              <Stat icon="🛡️" title="Secure & Regulated" sub="Global Compliance" />
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} className="hidden md:block" />
              <Stat icon="🎧" title="24/7 Support" sub="Real Traders" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN 55% */}
          <div style={{ flex: '1 1 55%', position: 'relative', minHeight: 650, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', perspective: 1500 }}>
            
            <motion.div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', rotateX, rotateY, transformStyle: 'preserve-3d' }}>
              
              {/* Glass Arch Panel (Refined size/blur) */}
              <div style={{
                position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%) translateZ(-80px)',
                width: '100%', maxWidth: 540, height: 500,
                backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '50% 50% 0 0',
                overflow: 'hidden', zIndex: 1
              }}>
                <svg width="100%" height="100%" opacity="0.12" preserveAspectRatio="none" viewBox="0 0 100 100">
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

              {/* Metallic Platform Disc (Refined gradient/rim) */}
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', bottom: 10, left: '50%', x: '-50%',
                  width: '100%', maxWidth: 420, height: 60, transform: 'translateZ(0px)',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, #777 0%, #111 70%, #000 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 0 60px rgba(255,255,255,0.1), 0 0 120px rgba(37,99,235,0.05)',
                  zIndex: 2
                }} 
              />

              {/* Bull Statue (Large size) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease }}
                style={{ position: 'relative', zIndex: 3, transform: 'translateZ(60px)', width: '100%', display: 'flex', justifyContent: 'center' }}
                className="bull-float"
              >
                <Image src="/bull.png" alt="Bull" width={520} height={460} priority style={{ height: 'auto', maxHeight: 460, width: '100%', maxWidth: 520, objectFit: 'contain' }} />
              </motion.div>

              {/* Price Chips (Precise positioning) */}
              {!isMobile && (
                <>
                  <PriceChip top="18%" left="12%" symbol="XAUUSD" price="2,384.65" change="+0.62%" up delay={0.6} tz={100} />
                  <PriceChip top="10%" right="12%" symbol="EURUSD" price="1.08945" change="+0.47%" up delay={0.7} tz={80} />
                  <PriceChip top="48%" right="-5%" symbol="GBPUSD" price="1.27482" change="-0.30%" up={false} delay={0.8} tz={120} />
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
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, border: '1px solid rgba(255,255,255,0.1)' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{title}</div>
        <div style={{ fontSize: 12, color: '#9ca3af', whiteSpace: 'nowrap', marginTop: 2 }}>{sub}</div>
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ 
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }
      }}
      whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(15,15,15,0.95)' }}
      style={{
        position: 'absolute', top, left, right,
        background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)', padding: '10px 16px', borderRadius: 8,
        transform: `translateZ(${tz}px)`,
        cursor: 'default', display: 'flex', flexDirection: 'column', gap: 4,
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        zIndex: 10
      }}
    >
      <div style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.05em', fontWeight: 600 }}>{symbol}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{display}</div>
      <div style={{ fontSize: 11, fontWeight: 600, color: up ? '#22c55e' : '#ef4444', display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 8 }}>{up ? '▲' : '▼'}</span> {change}
      </div>
    </motion.div>
  )
}
