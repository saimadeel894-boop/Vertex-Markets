'use client'
import { motion } from 'framer-motion'

const platforms = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20M2 12h20"/>
      </svg>
    ),
    name: 'Web Trader',
    sub: 'Access Anywhere',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    name: 'Desktop',
    sub: 'Windows & Mac',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="18" r="1"/>
      </svg>
    ),
    name: 'Mobile App',
    sub: 'iOS & Android',
  },
]

export default function Platforms() {
  return (
    <section style={{ padding: '120px 48px', background: '#080a0e', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 100,
          alignItems: 'center',
        }}
        className="lg:grid-cols-2 grid-cols-1"
      >
        {/* ── Device mockups ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 440 }}
        >
          {/* Blue glow behind */}
          <div
            style={{
              position: 'absolute', top: '25%', left: '10%', width: '70%', height: '70%',
              background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
              filter: 'blur(50px)', pointerEvents: 'none',
            }}
          />

          {/* Laptop SVG */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, width: '85%', zIndex: 10,
              borderRadius: '12px 12px 4px 4px', overflow: 'hidden',
              border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #050810, #0d1422)',
                aspectRatio: '16/10', padding: 12,
                position: 'relative', overflow: 'hidden',
              }}
            >
              <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lf-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity=".2"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[50,100,150,200].map(y => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                ))}
                {[80,160,240,320].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="250" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                ))}
                {/* Chart Area */}
                <path
                  d="M0,180 C40,170 80,140 120,130 C160,120 200,140 240,110 C280,80 320,60 400,30 L400,250 L0,250 Z"
                  fill="url(#lf-grad)"
                />
                <path
                  d="M0,180 C40,170 80,140 120,130 C160,120 200,140 240,110 C280,80 320,60 400,30"
                  fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"
                />
                {/* Sidebar mock */}
                <rect x="330" y="15" width="55" height="220" rx="4" fill="rgba(13,18,34,0.9)"/>
              </svg>
            </div>
            {/* Laptop Base */}
            <div style={{ height: 12, background: '#141824', borderTop: '1.5px solid rgba(255,255,255,0.1)' }}/>
          </div>

          {/* Mobile SVG - Overlapping */}
          <div
            style={{
              position: 'absolute', bottom: -15, right: '2%', width: '28%', zIndex: 20,
              background: '#0a0e18', borderRadius: 20, overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.15)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.95)',
              aspectRatio: '9/19',
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(180deg, #050810 0%, #0d1422 100%)',
                padding: '12px 10px',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, fontWeight: 900, color: '#2563eb' }}>V</span>
                <div style={{ width: 30, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }} />
              </div>
              <div style={{ flex: 1, marginTop: 10 }}>
                <svg viewBox="0 0 60 100" style={{ width: '100%', height: '100%' }}>
                  <path
                    d="M0,80 C10,75 20,60 30,50 C40,40 50,20 60,10"
                    fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
                  />
                </svg>
              </div>
              <div style={{ height: 40, background: 'rgba(34,197,94,0.2)', borderRadius: 6 }} />
            </div>
          </div>
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.25em', color: '#6b7585', textTransform: 'uppercase', marginBottom: 18 }}>
            POWERFUL. FLEXIBLE. ADVANCED.
          </p>
          <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            Trading Platforms<br />Built for Performance
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#a0aab8', marginBottom: 40, maxWidth: 420 }}>
            Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 44 }}>
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className="plat-opt"
                style={{ cursor: 'pointer' }}
              >
                <div className="plat-icon" style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: '#6b7585', marginTop: 2 }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-white bg-brand-primary hover:bg-blue-700 font-bold rounded-[8px] no-underline transition-all duration-200 hover:-translate-y-px"
            style={{ padding: '15px 32px', fontSize: 14.5, boxShadow: '0 10px 20px -5px rgba(37,99,235,0.4)' }}
          >
            Explore Platforms
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
