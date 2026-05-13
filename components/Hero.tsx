'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { icon: 'bolt',          label: 'Tight Spreads',    sub: 'From 0.0 pips' },
  { icon: 'timer',         label: 'Fast Execution',   sub: '< 30ms Average' },
  { icon: 'verified_user', label: 'Secure & Regulated', sub: 'Global Compliance' },
  { icon: 'support_agent', label: '24/7 Support',     sub: 'Real Traders' },
]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const bullY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const glassY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 64, background: '#080a0e' }}
    >
      {/* Grid texture - Premiumized */}
      <div
        className="grid-bg absolute inset-0 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)',
          opacity: 0.3,
        }}
      />

      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center"
        style={{ padding: '80px 48px' }}
      >
        {/* ── LEFT ── */}
        <motion.div 
          style={{ maxWidth: 580, opacity }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Institutional Trading Infrastructure</span>
          </div>

          <h1
            className="font-black text-white leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(48px, 6vw, 76px)', marginBottom: 24 }}
          >
            Trade Smarter.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Trade Vertex.</span>
          </h1>

          <p
            className="text-brand-muted leading-relaxed"
            style={{ fontSize: 16, marginBottom: 40, maxWidth: 460 }}
          >
            Experience institutional-grade execution, deep liquidity, and professional trading conditions on the world's most advanced markets.
          </p>

          <div className="flex flex-wrap gap-4" style={{ marginBottom: 60 }}>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-[10px] no-underline transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
              style={{ padding: '16px 36px', fontSize: 15 }}
            >
              Get Started Now
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center text-white hover:bg-white/5 font-semibold rounded-[10px] no-underline transition-all duration-300"
              style={{ padding: '16px 36px', fontSize: 15, border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Try Demo
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/5">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-white font-bold text-[13px]">{s.label}</span>
                <span className="text-brand-muted text-[11px] font-medium">{s.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{ height: 680 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass Panel */}
          <motion.div
            style={{
              width: 520,
              height: 520,
              background: 'rgba(5,7,12,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 32,
              position: 'relative',
              overflow: 'hidden',
              y: glassY
            }}
          >
            {/* Visual Flair in Glass */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)]" />
              <svg viewBox="0 0 500 500" className="w-full h-full p-12">
                <motion.path 
                  d="M0,400 Q125,350 250,380 T500,320" 
                  fill="none" stroke="#2563eb" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Bull Container */}
          <motion.div 
            style={{
              position: 'absolute',
              bottom: '0', left: '0', right: '0', top: '0',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              zIndex: 20, paddingBottom: '30px',
              y: bullY
            }}
          >
            <motion.img
              src="/bull.png"
              alt="Bull"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '88%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                filter: 'drop-shadow(0 30px 100px rgba(0,0,0,1)) contrast(1.05)',
              }}
            />
          </motion.div>

          {/* Price Chips - Enhanced */}
          <PriceChip top="18%" right="12%" symbol="EURUSD" price="1.0842" change="+0.47%" up={true} delay={0.4} />
          <PriceChip top="38%" left="8%" symbol="XAUUSD" price="2,384.65" change="+0.62%" up={true} delay={0.5} />
          <PriceChip top="68%" right="6%" symbol="GBPUSD" price="1.2748" change="-0.30%" up={false} delay={0.6} />
        </motion.div>
      </div>
    </section>
  )
}

function PriceChip({ top, left, right, symbol, price, change, up, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="price-chip"
      style={{ top, left, right, zIndex: 30, padding: '12px 20px', borderRadius: 14 }}
    >
      <div style={{ fontSize: 10, fontWeight: 800, color: '#6b7585', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>{symbol}</div>
      <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
        {price} <span style={{ fontSize: 11, fontWeight: 800, color: up ? '#22c55e' : '#ef4444' }}>{change}</span>
      </div>
    </motion.div>
  )
}
