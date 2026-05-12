'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Institutional-Grade\nLiquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
    icon: <img src="/icon-liquidity.png" alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />,
  },
  {
    title: 'Ultra-Fast\nExecution',
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
    icon: <img src="/icon-execution.png" alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />,
  },
  {
    title: 'Security You\nCan Trust',
    desc: 'Segregated client funds, advanced encryption, and global regulatory oversight.',
    icon: <img src="/icon-security.png" alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />,
  },
  {
    title: 'Professional\nTrading Conditions',
    desc: 'Raw spreads, flexible leverage, and low commissions built for serious performance.',
    icon: <img src="/icon-conditions.png" alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />,
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
