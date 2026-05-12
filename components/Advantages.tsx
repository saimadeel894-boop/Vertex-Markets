'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Institutional-Grade\nLiquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: 52, height: 52 }} fill="none">
        <defs>
          <linearGradient id="barSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.28)"/>
            <stop offset="100%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <rect x="6"  y="24" width="7" height="22" rx="2" fill="#6b7585"/>
        <rect x="6"  y="24" width="7" height="22" rx="2" fill="url(#barSheen)" opacity=".6"/>
        <rect x="17" y="16" width="7" height="30" rx="2" fill="#7a8494"/>
        <rect x="17" y="16" width="7" height="30" rx="2" fill="url(#barSheen)" opacity=".5"/>
        <rect x="28" y="8"  width="7" height="38" rx="2" fill="#8a9098"/>
        <rect x="28" y="8"  width="7" height="38" rx="2" fill="url(#barSheen)" opacity=".45"/>
        <rect x="39" y="28" width="7" height="18" rx="2" fill="#5a6372" opacity=".5"/>
      </svg>
    ),
  },
  {
    title: 'Ultra-Fast\nExecution',
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: 52, height: 52 }} fill="none">
        <circle cx="26" cy="26" r="18" stroke="#6b7585" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="12" stroke="#5a6372" strokeWidth="1" opacity=".4"/>
        <line x1="26" y1="12" x2="26" y2="26" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26" y1="26" x2="36" y2="26" stroke="#6b7585" strokeWidth="2"   strokeLinecap="round" opacity=".6"/>
        <circle cx="26" cy="26" r="2.5" fill="#9ca3af"/>
        <line x1="26"  y1="8"    x2="26"   y2="10.5" stroke="#8a9098" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="40"  y1="26"   x2="42.5" y2="26"   stroke="#8a9098" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12"  y1="26"   x2="9.5"  y2="26"   stroke="#8a9098" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="35.7" y1="16.3" x2="33.9" y2="18.1" stroke="#8a9098" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="16.3" y1="16.3" x2="18.1" y2="18.1" stroke="#8a9098" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Security You\nCan Trust',
    desc: 'Segregated client funds, advanced encryption, and global regulatory oversight.',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: 52, height: 52 }} fill="none">
        <path d="M26 4 L42 10 L42 24 C42 34 35 42 26 46 C17 42 10 34 10 24 L10 10 Z"
          stroke="#7a8494" strokeWidth="1.5" fill="rgba(90,99,114,0.14)"/>
        <path d="M26 10 L36 14 L36 24 C36 30 32 35 26 38 C20 35 16 30 16 24 L16 14 Z"
          fill="rgba(100,112,128,0.12)" stroke="#6b7585" strokeWidth="1" opacity=".45"/>
        <polyline points="18,25 23,30 34,20"
          stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Professional\nTrading Conditions',
    desc: 'Raw spreads, flexible leverage, and low commissions built for serious performance.',
    icon: (
      <svg viewBox="0 0 52 52" style={{ width: 52, height: 52 }} fill="none">
        <defs>
          <linearGradient id="srvSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)"/>
            <stop offset="100%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <rect x="8" y="10" width="36" height="9" rx="2" fill="#6b7585"/>
        <rect x="8" y="10" width="36" height="9" rx="2" fill="url(#srvSheen)"/>
        <rect x="8" y="22" width="36" height="9" rx="2" fill="#555f6e" opacity=".75"/>
        <rect x="8" y="22" width="36" height="9" rx="2" fill="url(#srvSheen)" opacity=".6"/>
        <rect x="8" y="34" width="36" height="9" rx="2" fill="#404855" opacity=".55"/>
        <rect x="8" y="34" width="36" height="9" rx="2" fill="url(#srvSheen)" opacity=".4"/>
        <circle cx="14" cy="14.5" r="2.2" fill="#9ca3af"/>
        <circle cx="14" cy="26.5" r="2.2" fill="#8a9098" opacity=".7"/>
        <circle cx="14" cy="38.5" r="2.2" fill="#6b7585" opacity=".5"/>
        <rect x="20" y="12.5" width="18" height="3" rx="1" fill="rgba(255,255,255,0.12)"/>
        <rect x="20" y="24.5" width="14" height="3" rx="1" fill="rgba(255,255,255,0.08)"/>
        <rect x="20" y="36.5" width="16" height="3" rx="1" fill="rgba(255,255,255,0.06)"/>
      </svg>
    ),
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '96px 48px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', fontSize: 32, marginBottom: 58, lineHeight: 1.2 }}
        >
          <span style={{ color: '#a0aab8', fontWeight: 300 }}>Advantages Built for </span>
          <strong style={{ color: '#fff', fontWeight: 700 }}>Serious Traders</strong>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
          className="lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="adv-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon box */}
              <div className="icon-box">
                <div style={{ position: 'relative', zIndex: 1 }}>{card.icon}</div>
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: 10,
                  lineHeight: 1.3,
                  whiteSpace: 'pre-line',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: '#6b7585' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
