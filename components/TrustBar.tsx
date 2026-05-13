'use client'
import { motion } from 'framer-motion'

const regulators = [
  {
    abbr: 'FCA',
    full: 'FINANCIAL CONDUCT AUTHORITY',
    logo: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" opacity=".4"/>
        <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    abbr: 'ASIC',
    full: 'Australian Securities & Investments Commission',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" opacity=".5"/>
        <path d="M12 6l-5 3v6l5 3 5-3V9l-5-3z"/>
      </svg>
    ),
  },
  {
    abbr: 'FSCA',
    full: 'Financial Sector Conduct Authority',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 3l9 16H3L12 3z" opacity=".5"/>
        <path d="M12 8l5 9H7l5-9z"/>
      </svg>
    ),
  },
  {
    abbr: 'CySEC',
    full: 'Cyprus Securities and Exchange Commission',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L2 12l10 10 10-10L12 2z" opacity=".5"/>
        <path d="M12 7l-5 5 5 5 5-5-5-5z"/>
      </svg>
    ),
  },
  {
    abbr: 'DFSA',
    full: 'Dubai Financial Services Authority',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L2 22h20L12 2z" opacity=".5"/>
        <rect x="10" y="12" width="4" height="6" fill="white"/>
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#000000',
        padding: '20px 48px 40px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: '24px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '.25em',
              color: '#6b7585',
              textTransform: 'uppercase',
              marginBottom: 24,
              opacity: 0.8
            }}
          >
            TRUSTED BY TRADERS. REGULATED BY AUTHORITIES.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 64,
              flexWrap: 'wrap',
            }}
          >
            {regulators.map((r, i) => (
              <motion.div
                key={r.abbr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'default' }}
              >
                {r.logo}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '0.02em', lineHeight: 1 }}>{r.abbr}</span>
                  <span style={{ fontSize: 6, fontWeight: 700, color: '#fff', letterSpacing: '0.04em', opacity: 0.4, maxWidth: 100, marginTop: 3, textTransform: 'uppercase' }}>
                    {r.full}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

