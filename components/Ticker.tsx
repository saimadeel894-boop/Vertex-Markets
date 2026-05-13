'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const initialPairs = [
  { symbol: 'EURUSD',  price: '1.08945',   change: '+0.47%', up: true  },
  { symbol: 'GBPUSD',  price: '1.27482',   change: '+0.35%', up: true  },
  { symbol: 'XAUUSD',  price: '2,384.65',  change: '+0.62%', up: true  },
  { symbol: 'USDJPY',  price: '156.743',   change: '-0.21%', up: false },
  { symbol: 'BTCUSD',  price: '67,842.10', change: '+1.08%', up: true  },
  { symbol: 'USOIL',   price: '78.245',    change: '-0.15%', up: false },
]

function nudge(price: string): string {
  const n = parseFloat(price.replace(/,/g, ''))
  const decimals = price.split('.')[1]?.length ?? 2
  const result = (n + (Math.random() - 0.48) * n * 0.0003).toFixed(decimals)
  return parseFloat(result).toLocaleString('en-US', { minimumFractionDigits: decimals })
}

export default function Ticker() {
  const [pairs, setPairs] = useState(initialPairs)
  const [flash, setFlash] = useState<Record<string, 'up' | 'down' | null>>({})

  useEffect(() => {
    const id = setInterval(() => {
      setPairs(prev => prev.map(p => {
        const oldN = parseFloat(p.price.replace(/,/g, ''))
        const newStr = nudge(p.price)
        const newN = parseFloat(newStr.replace(/,/g, ''))
        const up = newN >= oldN
        const pct = ((newN - oldN) / oldN * 100)
        setFlash(f => ({ ...f, [p.symbol]: up ? 'up' : 'down' }))
        setTimeout(() => setFlash(f => ({ ...f, [p.symbol]: null })), 600)
        return { ...p, price: newStr, change: `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`, up }
      }))
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Desktop: 6-column grid */}
      <div className="hidden md:grid" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px', height: 62, gridTemplateColumns: 'repeat(6,1fr)', alignItems: 'center' }}>
        {pairs.map((p, i) => (
          <TickerCell key={p.symbol} p={p} i={i} flash={flash[p.symbol]} total={6} />
        ))}
      </div>

      {/* Tablet: 3-column grid */}
      <div className="hidden sm:grid md:hidden" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px', gridTemplateColumns: 'repeat(3,1fr)', borderTop: 'none' }}>
        {pairs.map((p, i) => (
          <TickerCell key={p.symbol} p={p} i={i} flash={flash[p.symbol]} total={3} py={14} />
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex sm:hidden" style={{ overflowX: 'auto', scrollbarWidth: 'none', padding: '12px 20px', gap: 20, alignItems: 'center' }}>
        {pairs.map((p) => (
          <div key={p.symbol} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: '#4b5563', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.symbol}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <AnimatePresence mode="popLayout">
                <motion.span key={p.price} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }} style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
                  {p.price}
                </motion.span>
              </AnimatePresence>
              <span style={{ fontSize: 10, fontWeight: 700, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TickerCell({ p, i, flash, total, py = 0 }: any) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      borderRight: i < total - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: `${py}px 12px`,
      background: flash === 'up' ? 'rgba(34,197,94,0.04)' : flash === 'down' ? 'rgba(239,68,68,0.04)' : 'transparent',
      transition: 'background 0.3s ease',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#4b5563', letterSpacing: '0.08em' }}>{p.symbol}</span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', display: 'inline-block' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <AnimatePresence mode="popLayout">
            <motion.span key={p.price} initial={{ opacity: 0, y: p.up ? -7 : 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', display: 'block' }}>
              {p.price}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            <motion.span key={p.change} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} style={{ fontSize: 10, fontWeight: 800, color: p.up ? '#22c55e' : '#ef4444' }}>
              {p.change}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <svg width="36" height="13" viewBox="0 0 36 13" fill="none" style={{ opacity: 0.65, flexShrink: 0 }}>
        <path d={p.up ? 'M0,11 L7,8 L14,9 L21,4 L28,6 L36,1' : 'M0,1 L7,4 L14,3 L21,8 L28,6 L36,11'} stroke={p.up ? '#22c55e' : '#ef4444'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
