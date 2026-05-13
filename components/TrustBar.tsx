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
    <section style={{ background: '#000', padding: '32px 0' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.25em', color: '#4b5563', textTransform: 'uppercase', marginBottom: 24 }}>
            Trusted by Traders — Regulated by Authorities
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(24px, 5vw, 64px)', flexWrap: 'wrap', rowGap: 20 }}>
            {regulators.map((r, i) => (
              <motion.div
                key={r.abbr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.45 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ opacity: 1, scale: 1.06 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'default' }}
              >
                <span style={{ fontSize: 'clamp(14px, 2.5vw, 20px)', fontWeight: 900, color: '#fff', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>{r.abbr}</span>
                <span style={{ fontSize: 6, fontWeight: 700, color: '#fff', opacity: 0.4, letterSpacing: '0.04em', textTransform: 'uppercase', maxWidth: 100, textAlign: 'center' }}>{r.full}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
