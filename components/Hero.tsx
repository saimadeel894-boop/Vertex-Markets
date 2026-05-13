'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { icon: 'bolt',          label: 'Tight Spreads',    sub: 'From 0.0 pips' },
  { icon: 'timer',         label: 'Fast Execution',   sub: '< 30ms Average' },
  { icon: 'verified_user', label: 'Secure & Regulated', sub: 'Global Compliance' },
  { icon: 'support_agent', label: '24/7 Support',     sub: 'Real Traders' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const bullY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const springBullY = useSpring(bullY, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 80, background: '#05070a' }}
    >
      {/* 3D Grid Floor - Volumetric */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
        style={{
          perspective: '1000px',
          background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.05))',
        }}
      >
        <div 
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            transform: 'rotateX(60deg) translateY(-100px)',
            transformOrigin: 'top',
            maskImage: 'linear-gradient(to bottom, transparent, black 80%)',
          }}
        />
      </div>

      {/* Atmospheric Caustics / Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] width-[40%] height-[60%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] width-[40%] height-[60%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* ── LEFT ── */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[11px] font-black text-blue-400 tracking-[0.2em] uppercase">Institutional Grade</span>
          </div>

          <h1
            className="font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(56px, 7vw, 92px)', marginBottom: 32 }}
          >
            THE NEW ERA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">OF TRADING.</span>
          </h1>

          <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-lg opacity-80">
            Precision engineering meets institutional liquidity. Experience the world's most powerful trading environment.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <a
              href="#"
              className="group relative px-10 py-5 bg-blue-600 text-white font-black rounded-xl no-underline overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                OPEN ACCOUNT
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="px-10 py-5 text-white font-bold rounded-xl no-underline border border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              TRY DEMO
            </a>
          </div>

          <div className="flex gap-12 pt-10 border-t border-white/5">
            {stats.slice(0, 3).map(s => (
              <div key={s.label}>
                <div className="text-white font-black text-sm mb-1">{s.label}</div>
                <div className="text-brand-muted text-[11px] font-bold tracking-wider uppercase opacity-60">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — THE 3D CORE ── */}
        <div 
          className="relative flex items-center justify-center"
          style={{ height: 750, perspective: '2000px' }}
        >
          {/* Glass Pillar / Pedestal */}
          <motion.div
            style={{
              width: 540, height: 560,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 40,
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              rotateY: mousePos.x,
              rotateX: -mousePos.y,
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8), inset 0 0 50px rgba(255,255,255,0.05)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner Refraction / Light Caustics */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <motion.div 
                animate={{ 
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  rotate: [0, 360]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_60%)]"
              />
            </div>

            {/* Float Depth Elements */}
            <div className="absolute inset-0 p-12 opacity-30" style={{ transform: 'translateZ(50px)' }}>
               <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path d="M0,350 Q100,300 200,330 T400,280" stroke="#2563eb" strokeWidth="4" fill="none" />
                  <path d="M0,300 Q100,250 200,280 T400,230" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.3" />
               </svg>
            </div>
          </motion.div>

          {/* THE BULL - With extreme shadow depth */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '5%',
              width: '95%',
              zIndex: 50,
              transformStyle: 'preserve-3d',
              y: springBullY,
              rotateY: mousePos.x * 0.5,
              rotateX: -mousePos.y * 0.5,
            }}
          >
            <img 
              src="/bull.png" 
              alt="The Bull" 
              style={{
                width: '100%', height: 'auto',
                filter: 'drop-shadow(0 40px 120px rgba(0,0,0,1)) brightness(1.1) contrast(1.1)',
                transform: 'translateZ(120px)',
              }}
            />
          </motion.div>

          {/* 3D Price Chips - With Depth */}
          <ThreeDPriceChip 
            top="12%" right="5%" 
            symbol="EURUSD" price="1.0842" change="+0.47%" up={true} 
            z={180} mousePos={mousePos}
          />
          <ThreeDPriceChip 
            top="35%" left="0%" 
            symbol="XAUUSD" price="2,384.65" change="+0.62%" up={true} 
            z={220} mousePos={mousePos}
          />
          <ThreeDPriceChip 
            top="65%" right="0%" 
            symbol="GBPUSD" price="1.2748" change="-0.30%" up={false} 
            z={200} mousePos={mousePos}
          />
        </div>
      </div>
    </section>
  )
}

function ThreeDPriceChip({ top, left, right, symbol, price, change, up, z, mousePos }: any) {
  return (
    <motion.div
      className="price-chip-3d"
      style={{
        position: 'absolute',
        top, left, right,
        zIndex: 100,
        background: 'rgba(10,12,18,0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 20,
        padding: '16px 24px',
        transform: `translateZ(${z}px) rotateY(${mousePos.x * 0.8}deg) rotateX(${-mousePos.y * 0.8}deg)`,
        boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.05)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 900, color: '#6b7585', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 6 }}>{symbol}</div>
      <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '-0.02em' }}>
        {price} 
        <span style={{ fontSize: 12, fontWeight: 900, color: up ? '#22c55e' : '#ef4444', background: up ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', padding: '2px 8px', borderRadius: 6 }}>
          {change}
        </span>
      </div>
    </motion.div>
  )
}
