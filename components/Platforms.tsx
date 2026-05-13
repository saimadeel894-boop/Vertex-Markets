'use client'
import { motion } from 'framer-motion'

const platforms = [
  { name: 'Web Trader', sub: 'Access Anywhere', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 010 20M2 12h20"/></svg> },
  { name: 'Desktop',    sub: 'Windows & Mac',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { name: 'Mobile App', sub: 'iOS & Android',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg> },
]

export default function Platforms() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#000', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center' }}>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '90%', height: '80%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
            <img
              src="/platforms-mockup.png"
              alt="Trading Platforms"
              style={{ width: '100%', maxWidth: 560, height: 'auto', position: 'relative', zIndex: 10, filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.25em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 16 }}>POWERFUL. FLEXIBLE. ADVANCED.</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
              Trading Platforms<br />Built for Performance
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#6b7585', marginBottom: 36, maxWidth: 420 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile — anywhere, anytime.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {platforms.map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#9ca3af' }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#4b5563', marginTop: 2 }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#fff', color: '#000', fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none', transition: 'all 0.3s ease' }}>
              Explore Platforms
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
