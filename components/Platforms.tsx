'use client'
import { motion } from 'framer-motion'

const platforms = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    name: 'Web Trader',
    sub: 'Access Anywhere',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    name: 'Desktop',
    sub: 'Windows & Mac',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
      </svg>
    ),
    name: 'Mobile App',
    sub: 'iOS & Android',
  },
]

export default function Platforms() {
  return (
    <section style={{ padding: '96px 48px', background: '#080a0e', overflow: 'hidden' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
        className="lg:grid-cols-2 grid-cols-1"
      >
        {/* ── Device mockups ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 420 }}
        >
          {/* Blue glow behind */}
          <div
            style={{
              position: 'absolute', top: '30%', left: '10%', width: '60%', height: '60%',
              background: 'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)',
              filter: 'blur(40px)', pointerEvents: 'none',
            }}
          />

          {/* Laptop */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, width: '80%', zIndex: 10,
              borderRadius: '12px 12px 4px 4px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.85)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg,#050810,#0d1422)',
                aspectRatio: '16/10', padding: 10,
                position: 'relative', overflow: 'hidden',
              }}
            >
              <svg viewBox="0 0 360 200" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lf" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#2563eb" stopOpacity=".18"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Grid */}
                {[50,100,150].map(y => (
                  <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.035)" strokeWidth="1"/>
                ))}
                {[90,180,270].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                ))}
                {/* Area fill */}
                <path
                  d="M0,155 C25,148 50,132 80,118 C110,104 135,112 165,94 C195,76 220,62 255,42 C285,25 315,18 360,12 L360,200 L0,200 Z"
                  fill="url(#lf)"
                />
                {/* Trend line */}
                <path
                  d="M0,155 C25,148 50,132 80,118 C110,104 135,112 165,94 C195,76 220,62 255,42 C285,25 315,18 360,12"
                  fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
                />
                {/* Candles */}
                {[
                  [18,118,22,'#22c55e'],[30,124,16,'#ef4444'],[42,108,22,'#22c55e'],
                  [54,100,26,'#22c55e'],[66,112,18,'#ef4444'],[78,92,24,'#22c55e'],
                  [90,84,22,'#22c55e'],[102,76,26,'#ef4444'],[114,68,20,'#22c55e'],
                  [126,60,22,'#22c55e'],[138,52,24,'#22c55e'],[150,44,18,'#ef4444'],
                ].map(([x,y,h,c],i) => (
                  <rect key={i} x={x} y={y} width="5" height={h} rx="1" fill={c as string} opacity=".82"/>
                ))}
                {/* Sidebar */}
                <rect x="292" y="10" width="58" height="182" rx="3" fill="rgba(13,18,34,0.88)"/>
                <rect x="298" y="18" width="46" height="10" rx="2" fill="rgba(37,99,235,0.6)"/>
                <rect x="298" y="34" width="40" height="5" rx="1" fill="rgba(255,255,255,0.08)"/>
                <rect x="298" y="44" width="44" height="5" rx="1" fill="rgba(255,255,255,0.06)"/>
                <rect x="298" y="54" width="36" height="5" rx="1" fill="rgba(255,255,255,0.05)"/>
                <rect x="298" y="68" width="42" height="5" rx="1" fill="rgba(255,255,255,0.04)"/>
              </svg>
            </div>
            {/* Base */}
            <div style={{ height: 10, background: '#141824', borderTop: '1px solid rgba(255,255,255,0.05)' }}/>
          </div>

          {/* Mobile */}
          <div
            style={{
              position: 'absolute', bottom: -10, right: '4%', width: '25%', zIndex: 20,
              background: '#0a0e18', borderRadius: 16, overflow: 'hidden',
              border: '1.5px solid rgba(255,255,255,0.12)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
              aspectRatio: '9/19',
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(180deg,#050810 0%,#0d1422 100%)',
                padding: '8px 7px',
                display: 'flex', flexDirection: 'column', gap: 5,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: '#2563eb' }}>V</span>
                <span style={{ fontSize: 7, color: '#6b7585', fontWeight: 600 }}>$10,482</span>
              </div>
              <div>
                <div style={{ fontSize: 7, color: '#6b7585' }}>BTCUSD</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>67,842</div>
                <div style={{ fontSize: 7, color: '#22c55e', fontWeight: 600 }}>+1.08%</div>
              </div>
              <div style={{ flex: 1 }}>
                <svg viewBox="0 0 55 45" style={{ width: '100%', height: '100%' }}>
                  <path
                    d="M0,38 C6,35 12,30 18,24 C24,18 30,15 36,10 C42,5 48,3 55,1"
                    fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"
                  />
                  <path
                    d="M0,38 C6,35 12,30 18,24 C24,18 30,15 36,10 C42,5 48,3 55,1 L55,45 L0,45 Z"
                    fill="rgba(37,99,235,0.14)"
                  />
                </svg>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div style={{ flex:1, background:'#22c55e', borderRadius:4, padding:'4px', textAlign:'center', fontSize:7, fontWeight:700, color:'#fff' }}>BUY</div>
                <div style={{ flex:1, background:'#ef4444', borderRadius:4, padding:'4px', textAlign:'center', fontSize:7, fontWeight:700, color:'#fff' }}>SELL</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', color: '#6b7585', textTransform: 'uppercase', marginBottom: 14 }}>
            POWERFUL. FLEXIBLE. ADVANCED.
          </p>
          <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, marginBottom: 16 }}>
            Trading Platforms<br />Built for Performance
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#a0aab8', marginBottom: 34, maxWidth: 380 }}>
            Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 34 }}>
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                className="plat-opt"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div className="plat-icon">{p.icon}</div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: '#fff' }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: '#6b7585' }}>{p.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-white bg-brand-primary hover:bg-blue-700 font-semibold rounded-[7px] no-underline transition-all duration-200 hover:-translate-y-px"
            style={{ padding: '13px 26px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            Explore Platforms
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
