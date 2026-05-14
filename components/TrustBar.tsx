'use client'
import { motion } from 'framer-motion'

const regulators = [
  { abbr: 'FCA',   full: 'Financial Conduct Authority' },
  { abbr: 'ASIC',  full: 'Australian Securities & Investments Commission' },
  { abbr: 'FSCA',  full: 'Financial Sector Conduct Authority' },
  { abbr: 'CySEC', full: 'Cyprus Securities and Exchange Commission' },
  { abbr: 'DFSA',  full: 'Dubai Financial Services Authority' },
]

export default function TrustBar() {
  return (
    <section style={{ background: '#080a0e', padding: '32px 0', position: 'relative' }}>
      <div className="shimmer-line" />
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Glass-morphism container with a subtle blue-white gradient */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0.02) 100%)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          borderRadius: 16, 
          padding: '24px 32px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.25em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Trusted by Traders — Regulated by Authorities
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(24px, 5vw, 64px)', flexWrap: 'wrap', rowGap: 20 }}>
            {regulators.map((r, i) => (
              <motion.div
                key={r.abbr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'default' }}
              >
                {/* SVG Logo placeholders for premium look */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#fff', opacity: 0.8 }}>
                  {r.abbr === 'FCA' && <path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z" />}
                  {r.abbr === 'ASIC' && <circle cx="20" cy="20" r="15" />}
                  {r.abbr === 'FSCA' && <rect x="8" y="8" width="24" height="24" rx="4" />}
                  {r.abbr === 'CySEC' && <path d="M20 5 L35 30 L5 30 Z" />}
                  {r.abbr === 'DFSA' && <path d="M10 20 Q 20 5 30 20 T 30 35 L 10 35 Z" />}
                  <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.3" />
                </svg>
                <span style={{ fontSize: 'clamp(12px, 2vw, 16px)', fontWeight: 800, color: '#fff', letterSpacing: '0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.abbr}</span>
                <span style={{ fontSize: 6, fontWeight: 700, color: '#fff', opacity: 0.4, letterSpacing: '0.04em', textTransform: 'uppercase', maxWidth: 100, textAlign: 'center', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.full}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
