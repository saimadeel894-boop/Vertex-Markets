'use client'
import { motion } from 'framer-motion'

const regulators = [
  {
    abbr: 'FCA',
    full: 'Financial Conduct Authority',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h4.5L12 18l4.5-14H21M2 20h20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    abbr: 'ASIC',
    full: 'Australian Securities & Investments Commission',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-10z"/>
      </svg>
    ),
  },
  {
    abbr: 'FSCA',
    full: 'Financial Sector Conduct Authority',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 20h20z"/>
      </svg>
    ),
  },
  {
    abbr: 'CySEC',
    full: 'Cyprus Securities and Exchange Commission',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-10z" opacity=".8"/>
        <path d="M12 6L6 12l6 6 6-6z"/>
      </svg>
    ),
  },
  {
    abbr: 'DFSA',
    full: 'Dubai Financial Services Authority',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 22h20z"/>
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: '#080a0e',
        padding: '26px 48px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '.2em',
            color: '#6b7585',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Trusted by Traders. Regulated by Authorities.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 52,
            flexWrap: 'wrap',
          }}
        >
          {regulators.map((r, i) => (
            <motion.div
              key={r.abbr}
              className="reg-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.45, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ opacity: 0.85 }}
            >
              {r.icon}
              <div>
                <div style={{ fontSize: 17, fontWeight: 900, letterSpacing: '.06em', color: '#fff' }}>
                  {r.abbr}
                </div>
                {r.abbr === 'FCA' && (
                  <div style={{ fontSize: 6.5, color: '#fff', letterSpacing: '.06em', maxWidth: 72, lineHeight: 1.3, textTransform: 'uppercase' }}>
                    {r.full}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
