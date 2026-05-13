'use client'
import { motion } from 'framer-motion'

const ads = [
  {
    icon: '/icon-liquidity.png',
    title: 'Institutional-Grade Liquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.',
  },
  {
    icon: '/icon-execution.png',
    title: 'Ultra-Fast Execution',
    desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.',
  },
  {
    icon: '/icon-security.png',
    title: 'Security You Can Trust',
    desc: 'Segregated client funds, advanced end-to-end encryption, and multi-jurisdictional regulatory oversight.',
  },
  {
    icon: '/icon-conditions.png',
    title: 'Professional Trading Conditions',
    desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for performance.',
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '120px 48px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', px: '48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 90 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(36px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            <span style={{ color: '#6b7585', fontWeight: 500 }}>Advantages Built for </span>
            <span className="text-white font-black">Serious Traders</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            style={{ height: 4, background: '#2563eb', margin: '24px auto 0', borderRadius: 2 }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ads.map((ad, i) => (
            <motion.div
              key={ad.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="adv-card group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                height: '100%',
              }}
            >
              <div className="icon-box w-full group-hover:scale-[1.02] transition-transform duration-500">
                <motion.img 
                  src={ad.icon} 
                  alt={ad.title} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  style={{ 
                    width: '95px', 
                    height: '95px', 
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))'
                  }} 
                />
                {/* Subtle internal glow */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                {ad.title}
              </h3>
              <p style={{ fontSize: 14.5, color: '#a0aab8', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                {ad.desc}
              </p>
              
              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
