'use client'
import { motion } from 'framer-motion'

const pairs = [
  { symbol: 'EURUSD', price: '1.08945', change: '+0.47%', up: true },
  { symbol: 'GBPUSD', price: '1.27482', change: '+0.35%', up: true },
  { symbol: 'XAUUSD', price: '2,384.65', change: '+0.62%', up: true },
  { symbol: 'USDJPY', price: '156.743',  change: '-0.21%', up: false },
  { symbol: 'BTCUSD', price: '67,842.10', change: '+1.08%', up: true },
  { symbol: 'USOIL',  price: '78.245',   change: '-0.15%', up: false },
]

export default function Ticker() {
  return (
    <div
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        height: 56,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          width: '100%',
          margin: '0 auto',
          padding: '0 48px',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
        }}
      >
        {pairs.map((p, i) => (
          <div
            key={p.symbol}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              borderRight: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              padding: '0 10px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 10, fontWeight: 800, color: '#6b7585', letterSpacing: '0.05em', lineHeight: 1 }}>{p.symbol}</span>
                <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{p.price}</span>
                <span style={{ fontSize: 10, fontWeight: 800, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
              </div>
            </div>
            {/* High-fidelity Sparkline */}
            <svg width="40" height="14" viewBox="0 0 40 14" fill="none" className="opacity-80">
              <defs>
                <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={p.up ? "#22c55e" : "#ef4444"} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={p.up ? "#22c55e" : "#ef4444"} stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path 
                d={p.up ? "M0,12 L8,9 L16,10 L24,4 L32,6 L40,2" : "M0,2 L8,5 L16,4 L24,10 L32,8 L40,12"} 
                stroke={`url(#grad-${i})`}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
