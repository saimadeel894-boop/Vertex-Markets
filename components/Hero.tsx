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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 80, background: '#000000', fontFamily: 'Inter, sans-serif' }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* ── LEFT ── */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
            <span className="text-[11px] font-bold text-white tracking-[0.2em] uppercase">Institutional Grade</span>
          </div>

          <h1
            className="font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: '64px', marginBottom: 24 }}
          >
            Trade Smarter.<br />
            Trade Vertex.
          </h1>

          <p className="text-[#a0aab8] text-lg leading-relaxed mb-10 max-w-lg">
            Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <a
              href="#"
              className="group relative px-10 py-5 bg-white text-black font-bold rounded-xl no-underline overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/10 to-black/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                OPEN ACCOUNT
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="px-10 py-5 text-white font-bold rounded-xl no-underline border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              TRY DEMO
            </a>
          </div>

          <div className="flex gap-12 pt-10 border-t border-white/10">
            {stats.slice(0, 3).map(s => (
              <div key={s.label}>
                <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                <div className="text-[#6b7585] text-[11px] font-bold tracking-wider uppercase">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — THE DISPLAY CASE COMPOSITION ── */}
        <div 
          className="relative flex items-center justify-center"
          style={{ height: 750, perspective: '2000px' }}
        >
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              rotateY: mousePos.x * 0.3,
              rotateX: -mousePos.y * 0.3,
            }}
          >
            {/* Curved Glass Panel (Wraps Behind) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '80px',
                width: '460px',
                height: '460px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: '50% 50% 0 0 / 40% 40% 0 0', // Dome-like curve
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                boxShadow: 'inset 0 20px 60px rgba(255,255,255,0.05)',
                transform: 'translateZ(-100px)', // Pushed back
                zIndex: 10,
              }}
            >
               {/* Reflection highlights */}
               <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Circular Chrome Pedestal */}
            <div 
              style={{
                position: 'absolute',
                bottom: '20px',
                width: '400px',
                height: '100px',
                background: 'linear-gradient(to bottom, #333 0%, #111 50%, #000 100%)',
                borderTop: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '50%',
                boxShadow: '0 40px 100px rgba(0,0,0,0.9), inset 0 5px 15px rgba(255,255,255,0.3)',
                transform: 'rotateX(70deg) translateZ(0px)',
                zIndex: 15,
              }}
            />

            {/* THE BULL - Centerpiece */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '50px', // Sits on pedestal
                width: '380px',
                zIndex: 30, // In front of glass
                transformStyle: 'preserve-3d',
                transform: 'translateZ(50px)', // Pulled forward slightly
              }}
            >
              <img 
                src="/bull.png" 
                alt="The Bull" 
                style={{
                  width: '100%', height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'center bottom',
                  filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.05))',
                }}
              />
            </motion.div>

            {/* 3D Price Chips - Floating on/near the glass panel */}
            <ThreeDPriceChip 
              top="10%" left="50%" translateX="-50%"
              symbol="EURUSD" price="1.08945" change="+0.47%" up={true} 
              z={20} mousePos={mousePos}
              zIndex={40}
            />
            <ThreeDPriceChip 
              top="40%" right="-5%" 
              symbol="GBPUSD" price="1.27482" change="+0.30%" up={true} 
              z={40} mousePos={mousePos}
              zIndex={40}
            />
            <ThreeDPriceChip 
              top="45%" left="-5%" 
              symbol="XAUUSD" price="2,384.65" change="+0.62%" up={true} 
              z={60} mousePos={mousePos}
              zIndex={40}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ThreeDPriceChip({ top, left, right, bottom, translateX, symbol, price, change, up, z, zIndex, mousePos }: any) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top, left, right, bottom,
        zIndex,
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 16,
        padding: '12px 20px',
        transform: `translateX(${translateX || '0px'}) translateZ(${z}px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.05)',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, color: '#6b7585', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>{symbol}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 10, letterSpacing: '-0.01em', fontFamily: 'Inter, sans-serif' }}>
        {price} 
        <span style={{ fontSize: 11, fontWeight: 700, color: up ? '#22c55e' : '#ef4444' }}>
          {change}
        </span>
      </div>
    </motion.div>
  )
}
