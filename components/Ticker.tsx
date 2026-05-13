'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const pairs = [
  { symbol: 'EURUSD', price: '1.0842', change: '+0.47%', up: true },
  { symbol: 'GBPUSD', price: '1.2748', change: '-0.30%', up: false },
  { symbol: 'XAUUSD', price: '2384.65', change: '+0.62%', up: true },
  { symbol: 'USDJPY', price: '156.42', change: '+0.12%', up: true },
  { symbol: 'BTCUSD', price: '66248.50', change: '+1.45%', up: true },
  { symbol: 'USOIL',  price: '78.42',   change: '-0.85%', up: false },
]

export default function Ticker() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        background: '#080a0e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        height: 48,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap' }}
      >
        {[...pairs, ...pairs, ...pairs, ...pairs].map((p, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 32px',
              height: 48,
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 800, color: '#6b7585', letterSpacing: '0.05em' }}>{p.symbol}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{p.price}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
            {/* Small sparkline SVG */}
            <svg width="40" height="14" viewBox="0 0 40 14" fill="none">
              <path 
                d={p.up ? "M0,12 L8,8 L16,10 L24,4 L32,6 L40,2" : "M0,2 L8,6 L16,4 L24,10 L32,8 L40,12"} 
                stroke={p.up ? "#22c55e" : "#ef4444"} 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
