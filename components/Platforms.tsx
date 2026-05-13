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
    <section style={{ padding: '120px 48px', background: '#000000', overflow: 'hidden' }}>
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
        {/* ── 3D Mockup Asset ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center' }}
        >
          {/* Blue glow behind */}
          <div
            style={{
              position: 'absolute', top: '10%', left: '0%', width: '100%', height: '80%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
              filter: 'blur(60px)', pointerEvents: 'none',
            }}
          />
          <img 
            src="/platforms-mockup.png" 
            alt="Trading Platforms" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              position: 'relative', 
              zIndex: 10,
              filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6))'
            }} 
          />
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
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div className="plat-icon" style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            className="inline-flex items-center gap-2 text-black bg-white hover:bg-gray-100 font-bold rounded-[8px] no-underline transition-all duration-200 hover:-translate-y-px"
            style={{ padding: '15px 32px', fontSize: 14.5, boxShadow: '0 10px 20px -5px rgba(255,255,255,0.1)' }}
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
