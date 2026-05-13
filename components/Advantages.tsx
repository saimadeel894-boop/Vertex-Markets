'use client'
import { motion } from 'framer-motion'

const ads = [
  {
    icon: '/icon-liquidity.png',
    title: 'Deep Liquidity',
    desc: 'Access institutional-grade liquidity from top-tier banks and dark pools for minimal slippage.',
  },
  {
    icon: '/icon-execution.png',
    title: 'Ultra-Fast Execution',
    desc: 'Execute trades in under 30ms on our high-performance low-latency trading infrastructure.',
  },
  {
    icon: '/icon-security.png',
    title: 'Secure & Regulated',
    desc: 'Your funds are kept in segregated accounts with top-tier global banks under strict regulation.',
  },
  {
    icon: '/icon-conditions.png',
    title: 'Institutional Conditions',
    desc: 'Trade with raw spreads from 0.0 pips and low commissions designed for professional traders.',
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '120px 48px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.25em', color: '#6b7585', textTransform: 'uppercase', marginBottom: 16 }}
          >
            WHY CHOOSE VERTEX
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(32px,4vw,44px)', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}
          >
            The Vertex Advantage
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
              <div
                className="icon-box"
                style={{
                  width: 64,
                  height: 64,
                  marginBottom: 32,
                  background: 'rgba(37,99,235,0.06)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(37,99,235,0.12)',
                }}
              >
                <img 
                  src={ad.icon} 
                  alt={ad.title} 
                  style={{ width: 32, height: 32, objectFit: 'contain' }} 
                />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
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
