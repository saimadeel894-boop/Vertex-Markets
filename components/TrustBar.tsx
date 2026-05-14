'use client'
import { motion } from 'framer-motion'

const regulators = ['FCA', 'ASIC', 'FSCA', 'CySEC', 'DFSA']

export default function TrustBar() {
  return (
    <section style={{ background: '#0d0d0d', padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
      <div className="shimmer-line" />
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#6b7280', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          TRUSTED BY TRADERS. REGULATED BY AUTHORITIES.
        </div>
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap' }}
        >
          {regulators.map(r => (
            <motion.div 
              key={r} 
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 0.6, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'default', filter: 'brightness(200%) grayscale(100%)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#fff' }}>
                {r === 'FCA' && <path d="M12 2L2 22h20L12 2z" />}
                {r === 'ASIC' && <rect x="3" y="3" width="18" height="18" rx="2" />}
                {r === 'FSCA' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                {r === 'CySEC' && <circle cx="12" cy="12" r="10" />}
                {r === 'DFSA' && <path d="M4 4h16v16H4z M12 8v8 M8 12h8" />}
              </svg>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{r}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
