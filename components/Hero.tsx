'use client'
import { motion } from 'framer-motion'
import BullSVG from './BullSVG'

const stats = [
  { icon: 'bolt',          label: 'Tight Spreads',    sub: 'From 0.0 pips' },
  { icon: 'timer',         label: 'Fast Execution',   sub: '< 30ms Average' },
  { icon: 'verified_user', label: 'Secure & Regulated', sub: 'Global Compliance' },
  { icon: 'support_agent', label: '24/7 Support',     sub: 'Real Traders' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 64, background: '#080a0e' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 70% 50%, rgba(25,45,110,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Grid texture */}
      <div
        className="grid-bg absolute inset-0 pointer-events-none"
        style={{
          maskImage:
            'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
          opacity: 0.7,
        }}
      />

      <div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center"
        style={{ padding: '80px 48px' }}
      >
        {/* ── LEFT ── */}
        <div style={{ maxWidth: 520 }}>
          <motion.h1
            {...fade(0)}
            className="font-black text-white leading-[1.04]"
            style={{ fontSize: 'clamp(44px,5.5vw,70px)', letterSpacing: '-0.025em', marginBottom: 18 }}
          >
            Trade Smarter.<br />Trade Vertex.
          </motion.h1>

          <motion.p
            {...fade(0.1)}
            className="text-brand-muted leading-relaxed"
            style={{ fontSize: 15, marginBottom: 34, maxWidth: 400 }}
          >
            Professional trading conditions, institutional-grade technology, and
            deep liquidity across global markets.
          </motion.p>

          <motion.div {...fade(0.18)} className="flex flex-wrap gap-3.5" style={{ marginBottom: 52 }}>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white bg-brand-primary hover:bg-blue-700 font-semibold rounded-[7px] no-underline transition-all duration-200 hover:-translate-y-px"
              style={{ padding: '13px 26px', fontSize: 14 }}
            >
              Get Started
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center text-white hover:bg-white/5 font-medium rounded-[7px] no-underline transition-all duration-200"
              style={{ padding: '13px 26px', fontSize: 14, border: '1px solid rgba(255,255,255,0.18)' }}
            >
              Try Demo Account
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fade(0.28)}
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32 }}
          >
            <div className="flex flex-wrap gap-8">
              {stats.map(s => (
                <div key={s.label} className="flex flex-col items-center text-center gap-1">
                  <span
                    className="material-symbols-outlined text-brand-muted"
                    style={{ fontSize: 22, marginBottom: 4 }}
                  >
                    {s.icon}
                  </span>
                  <span className="text-white font-semibold" style={{ fontSize: 12 }}>{s.label}</span>
                  <span className="text-brand-subtle" style={{ fontSize: 11 }}>{s.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT — Bull ── */}
        <motion.div
          {...fade(0.12)}
          className="relative flex items-center justify-center"
          style={{ height: 560 }}
        >
          {/* Glass panel */}
          <div
            className="glass-panel relative overflow-hidden"
            style={{ width: 520, height: 500 }}
          >
            {/* Gradient sheen */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg,rgba(255,255,255,0.055) 0%,transparent 55%,rgba(255,255,255,0.015) 100%)',
              }}
            />

            {/* Candlestick chart — top right */}
            <div
              className="absolute overflow-hidden"
              style={{ top: 0, right: 0, width: '55%', height: '45%', padding: 16 }}
            >
              <svg viewBox="0 0 180 110" style={{ width: '100%', height: '100%', opacity: 0.75 }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#2563eb" stopOpacity=".25"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[28,55,82].map(y => (
                  <line key={y} x1="0" y1={y} x2="180" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth=".6"/>
                ))}
                {/* Candles */}
                {[
                  [6,52,26,'#ef4444',45,82],[16,55,20,'#ef4444',49,79],
                  [26,42,24,'#22c55e',35,70],[36,36,22,'#22c55e',29,62],
                  [46,44,26,'#ef4444',37,74],[56,30,28,'#22c55e',23,62],
                  [66,24,26,'#22c55e',17,54],[76,18,22,'#22c55e',12,44],
                  [86,22,24,'#ef4444',16,50],[96,14,20,'#22c55e', 8,38],
                  [106,10,18,'#22c55e', 5,32],
                ].map(([x,y,h,c,ly1,ly2],i) => (
                  <g key={i}>
                    <rect x={x} y={y} width="5" height={h} rx="1" fill={c as string} opacity=".8"/>
                    <line x1={Number(x)+2.5} y1={ly1 as number} x2={Number(x)+2.5} y2={ly2 as number} stroke={c as string} strokeWidth=".8"/>
                  </g>
                ))}
                {/* Fill */}
                <path
                  d="M8.5,70 C18,68 28,54 38.5,48 C48,62 58.5,44 68.5,38 C78.5,30 88.5,36 98.5,22 C108.5,14 120,10 150,8 L150,110 L8.5,110 Z"
                  fill="url(#cg)"
                />
                {/* Trend line */}
                <polyline
                  points="8.5,70 18.5,67 28.5,52 38.5,46 48.5,60 58.5,42 68.5,36 78.5,28 88.5,34 98.5,20 108.5,13 130,9 150,6"
                  fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                />
                <circle cx="150" cy="6" r="3" fill="#3b82f6"/>
                <circle cx="150" cy="6" r="6" fill="#3b82f6" opacity=".2"/>
              </svg>
            </div>

            {/* Platform glow ring */}
            <div
              className="absolute glow-pulse"
              style={{
                bottom: '12%', left: '50%', transform: 'translateX(-50%)',
                width: 260, height: 18, borderRadius: '50%',
                background: 'radial-gradient(ellipse,rgba(37,99,235,0.5) 0%,transparent 70%)',
                filter: 'blur(8px)',
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: '13%', left: '50%', transform: 'translateX(-50%)',
                width: 200, height: 12, borderRadius: '50%',
                background: 'radial-gradient(ellipse,rgba(37,99,235,0.25) 0%,transparent 70%)',
                filter: 'blur(4px)',
              }}
            />

            {/* Bull */}
            <div className="bull-float" style={{ width: 340, height: 310 }}>
              <BullSVG />
            </div>
          </div>

          {/* Price chips */}
          <div className="price-chip" style={{ top: '18%', left: '50%', marginLeft: -10 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#6b7585', letterSpacing: '.05em', textTransform: 'uppercase' }}>EURUSD</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              1.0842 <span style={{ fontSize: 11, color: '#22c55e' }}>+0.47%</span>
            </div>
          </div>
          <div className="price-chip" style={{ top: '40%', left: '6%' }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#6b7585', letterSpacing: '.05em', textTransform: 'uppercase' }}>XAUUSD</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              2,384 <span style={{ fontSize: 11, color: '#22c55e' }}>+0.62%</span>
            </div>
          </div>
          <div className="price-chip" style={{ top: '16%', right: '2%' }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#6b7585', letterSpacing: '.05em', textTransform: 'uppercase' }}>GBPUSD</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              1.2748 <span style={{ fontSize: 11, color: '#ef4444' }}>-0.30%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
