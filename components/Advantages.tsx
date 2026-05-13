'use client'
import { motion } from 'framer-motion'

const ads = [
  {
    icon: '/icon-liquidity.png',
    title: 'Institutional-Grade Liquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
  },
  {
    icon: '/icon-execution.png',
    title: 'Ultra-Fast Execution',
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
  },
  {
    icon: '/icon-security.png',
    title: 'Security You Can Trust',
    desc: 'Segregated client funds, advanced encryption, and global regulatory oversight.',
  },
  {
    icon: '/icon-conditions.png',
    title: 'Professional Trading Conditions',
    desc: 'Raw spreads, flexible leverage, and low commissions built for serious performance.',
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '100px 48px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(30px,4.5vw,42px)', lineHeight: 1.15 }}
          >
            <span style={{ color: '#6b7585', fontWeight: 400 }}>Advantages Built for </span>
            <span style={{ color: '#fff', fontWeight: 800 }}>Serious Traders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ads.map((ad, i) => (
            <motion.div
              key={ad.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="adv-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                height: '100%',
              }}
            >
              <div className="icon-box">
                <img 
                  src={ad.icon} 
                  alt={ad.title} 
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1
                  }} 
                />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.3 }}>
                {ad.title}
              </h3>
              <p style={{ fontSize: 14, color: '#a0aab8', lineHeight: 1.6, margin: 0 }}>
                {ad.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
