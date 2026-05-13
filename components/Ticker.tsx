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
        background: '#080a0e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        height: 52,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
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
              gap: 10,
              borderRight: i < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: '#6b7585', letterSpacing: '0.02em', lineHeight: 1 }}>{p.symbol}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{p.price}</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
              </div>
            </div>
            {/* Sparkline */}
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
              <path 
                d={p.up ? "M0,10 L6,7 L12,8 L18,3 L24,5 L32,1" : "M0,2 L6,5 L12,4 L18,9 L24,7 L32,11"} 
                stroke={p.up ? "#22c55e" : "#ef4444"} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
