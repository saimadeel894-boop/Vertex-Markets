'use client'
import { motion } from 'framer-motion'

const ads = [
  { 
    title: 'Institutional-Grade Liquidity',     
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.',
    icon: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="silver-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#a0a0a0" />
            <stop offset="100%" stopColor="#c8c8c8" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.6"/>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <rect x="20" y="70" width="16" height="30" fill="url(#silver-grad)" />
          <rect x="42" y="50" width="16" height="50" fill="url(#silver-grad)" />
          <rect x="64" y="30" width="16" height="70" fill="url(#silver-grad)" />
          <rect x="86" y="10" width="16" height="90" fill="url(#silver-grad)" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Ultra-Fast Execution',              
    desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.',
    icon: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          <circle cx="60" cy="60" r="45" fill="none" stroke="url(#silver-grad)" strokeWidth="8" />
          <path d="M30 60 A 30 30 0 0 1 90 60" fill="none" stroke="url(#silver-grad)" strokeWidth="4" strokeDasharray="4 8" />
          <circle cx="60" cy="60" r="6" fill="#fff" />
          <line x1="60" y1="60" x2="40" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Security You Can Trust',            
    desc: 'Segregated client funds, advanced end-to-end encryption, and multi-jurisdictional regulatory oversight.',
    icon: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          <path d="M60 10 L20 25 V55 C20 80 40 95 60 110 C80 95 100 80 100 55 V25 L60 10 Z" fill="url(#silver-grad)" />
          <path d="M60 20 L30 32 V55 C30 75 45 85 60 95 C75 85 90 75 90 55 V32 L60 20 Z" fill="#000" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Professional Trading Conditions',   
    desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for performance.',
    icon: (
      <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          <rect x="20" y="20" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <rect x="20" y="50" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <rect x="20" y="80" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <circle cx="85" cy="30" r="3" fill="#000" />
          <circle cx="85" cy="60" r="3" fill="#000" />
          <circle cx="85" cy="90" r="3" fill="#000" />
        </g>
      </svg>
    )
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '120px 0', background: '#000000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 400, color: '#fff' }}>
            <span style={{ color: '#9ca3af' }}>Advantages Built for </span>
            <span style={{ fontWeight: 700 }}>Serious Traders</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}
        >
          {ads.map((ad, i) => (
            <motion.div 
              key={ad.title}
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="feature-card"
              style={{
                background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
                padding: 32, minHeight: 320, display: 'flex', flexDirection: 'column'
              }}
            >
              <motion.div 
                className="feature-icon"
                initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}
              >
                {ad.icon}
              </motion.div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{ad.title}</h3>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.6 }}>{ad.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
