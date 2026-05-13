'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const initialPairs = [
  { symbol: 'EURUSD', price: '1.08945', change: '+0.47%', up: true  },
  { symbol: 'GBPUSD', price: '1.27482', change: '+0.35%', up: true  },
  { symbol: 'XAUUSD', price: '2,384.65', change: '+0.62%', up: true  },
  { symbol: 'USDJPY', price: '156.743',  change: '-0.21%', up: false },
  { symbol: 'BTCUSD', price: '67,842.10', change: '+1.08%', up: true  },
  { symbol: 'USOIL',  price: '78.245',   change: '-0.15%', up: false },
]

function randomNudge(price: string): string {
  const n = parseFloat(price.replace(/,/g, ''))
  const delta = (Math.random() - 0.48) * n * 0.0003
  const result = (n + delta).toFixed(price.includes(',') ? 2 : price.split('.')[1]?.length ?? 3)
  return parseFloat(result).toLocaleString('en-US', { minimumFractionDigits: price.split('.')[1]?.length ?? 2 })
}

export default function Ticker() {
  const [pairs, setPairs] = useState(initialPairs)
  const [flash, setFlash] = useState<Record<string, 'up' | 'down' | null>>({})

  useEffect(() => {
    const interval = setInterval(() => {
      setPairs(prev => prev.map(p => {
        const oldPrice = parseFloat(p.price.replace(/,/g, ''))
        const newPriceStr = randomNudge(p.price)
        const newPrice = parseFloat(newPriceStr.replace(/,/g, ''))
        const up = newPrice >= oldPrice
        const diff = ((newPrice - oldPrice) / oldPrice * 100)
        const sign = diff >= 0 ? '+' : ''
        const change = `${sign}${diff.toFixed(2)}%`

        setFlash(f => ({ ...f, [p.symbol]: up ? 'up' : 'down' }))
        setTimeout(() => setFlash(f => ({ ...f, [p.symbol]: null })), 600)

        return { ...p, price: newPriceStr, change, up }
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', height: 62, display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 1440, width: '100%', margin: '0 auto', padding: '0 48px', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {pairs.map((p, i) => (
          <div
            key={p.symbol}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, borderRight: i < 5 ? '1px solid rgba(255,255,255,0.05)' : 'none', padding: '0 12px', transition: 'background 0.3s ease', background: flash[p.symbol] === 'up' ? 'rgba(34,197,94,0.04)' : flash[p.symbol] === 'down' ? 'rgba(239,68,68,0.04)' : 'transparent' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#4b5563', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>{p.symbol}</span>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={p.price}
                    initial={{ opacity: 0, y: p.up ? -8 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: p.up ? 8 : -8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif', display: 'block' }}
                  >
                    {p.price}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={p.change}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: 10, fontWeight: 800, color: p.up ? '#22c55e' : '#ef4444' }}
                  >
                    {p.change}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            {/* Sparkline */}
            <svg width="38" height="14" viewBox="0 0 38 14" fill="none" style={{ opacity: 0.7, flexShrink: 0 }}>
              <defs>
                <linearGradient id={`g${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={p.up ? '#22c55e' : '#ef4444'} stopOpacity="0.1" />
                  <stop offset="100%" stopColor={p.up ? '#22c55e' : '#ef4444'} stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d={p.up ? 'M0,12 L7,9 L14,10 L21,5 L28,7 L38,2' : 'M0,2 L7,5 L14,4 L21,9 L28,7 L38,12'} stroke={`url(#g${i})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
