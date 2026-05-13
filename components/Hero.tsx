'use client'
import { motion } from 'framer-motion'

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

        {/* ── RIGHT — 3D Scene ── */}
        <motion.div
          {...fade(0.12)}
          className="relative flex items-center justify-center"
          style={{ height: 620 }}
        >
          {/* Base / Floor */}
          <div
            style={{
              position: 'absolute', bottom: '10%', width: 600, height: 200,
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 80%)',
              borderRadius: '50%', transform: 'rotateX(75deg)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          />

          {/* Curved Glass Display */}
          <div
            className="absolute z-0"
            style={{
              width: 500, height: 450,
              bottom: '15%', left: '50%', transform: 'translateX(-50%)',
              borderRadius: '250px 250px 40px 40px / 120px 120px 40px 40px',
              border: '1.5px solid rgba(255,255,255,0.12)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(10px)',
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          >
             {/* Glass reflections */}
             <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)' }} />
          </div>

          {/* Bull */}
          <div 
            className="bull-float" 
            style={{ 
              position: 'absolute',
              bottom: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 420, 
              height: 380,
              zIndex: 10
            }}
          >
            <img 
              src="/bull.png" 
              alt="Bull" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.9)) brightness(1.1)',
              }}
            />
            {/* Reflection on floor */}
            <div 
              style={{
                position: 'absolute', bottom: '-5%', left: '10%', right: '10%', height: '30%',
                background: 'linear-gradient(to top, rgba(25,45,110,0.15), transparent)',
                filter: 'blur(20px)', zIndex: -1
              }}
            />
          </div>

          {/* Price chips — Exactly like screenshot */}
          <div className="price-chip" style={{ top: '15%', right: '15%', transform: 'rotate(2deg)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#6b7585', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 2 }}>EURUSD</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              1.0842 <span style={{ fontSize: 10, color: '#22c55e' }}>+0.47%</span>
            </div>
          </div>

          <div className="price-chip" style={{ top: '35%', left: '5%', transform: 'rotate(-3deg)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#6b7585', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 2 }}>XAUUSD</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              2,384.65 <span style={{ fontSize: 10, color: '#22c55e' }}>+0.62%</span>
            </div>
          </div>

          <div className="price-chip" style={{ top: '65%', right: '5%', transform: 'rotate(-1deg)' }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#6b7585', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 2 }}>GBPUSD</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
              1.2748 <span style={{ fontSize: 10, color: '#ef4444' }}>-0.30%</span>
            </div>
          </div>

          {/* Chart overlays in the glass */}
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ zIndex: 5 }}>
            <svg viewBox="0 0 500 400" className="w-full h-full">
              <path d="M100,300 L150,280 L200,320 L250,250 L300,270 L350,200 L400,210" fill="none" stroke="#2563eb" strokeWidth="1" />
              <circle cx="400" cy="210" r="2" fill="#2563eb" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
