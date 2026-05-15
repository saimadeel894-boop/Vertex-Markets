'use client'
import { motion } from 'framer-motion'

const regulators = [
  {
    abbr: 'FCA',
    name: 'Financial Conduct\nAuthority',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <polygon points="20,4 36,32 4,32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <line x1="20" y1="14" x2="20" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="28" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    abbr: 'ASIC',
    name: 'Australian Securities &\nInvestments Commission',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M12 28 L20 12 L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <line x1="14" y1="23" x2="26" y2="23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    abbr: 'FSCA',
    name: 'Financial Sector\nConduct Authority',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L6 10 V20 C6 30 13 37 20 39 C27 37 34 30 34 20 V10 Z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <path d="M14 20 L18 24 L26 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    abbr: 'CySEC',
    name: 'Cyprus Securities and\nExchange Commission',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M26 15 A9 9 0 1 0 26 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    abbr: 'DFSA',
    name: 'Dubai Financial\nServices Authority',
    icon: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
        <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section style={{
      background: '#0d0d0d',
      padding: '40px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
    }}>
      <div className="shimmer-line" />
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
        {/* Label */}
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          color: '#a1a1aa',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          TRUSTED BY TRADERS. REGULATED BY AUTHORITIES.
        </div>

        {/* Regulator logos */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(24px, 5vw, 72px)',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {regulators.map(r => (
            <motion.div
              key={r.abbr}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 0.65, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ opacity: 1, scale: 1.04 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'default',
                color: '#a1a1aa',
                flexShrink: 0,
              }}
            >
              {/* Icon */}
              <div style={{ color: '#a1a1aa', flexShrink: 0 }}>
                {r.icon}
              </div>
              {/* Text stack */}
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#a1a1aa', letterSpacing: '0.04em', lineHeight: 1 }}>
                  {r.abbr}
                </div>
                <div style={{
                  fontSize: 8.5,
                  fontWeight: 500,
                  color: '#a1a1aa',
                  letterSpacing: '0.03em',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                  marginTop: 3,
                  maxWidth: 140,
                }}>
                  {r.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
