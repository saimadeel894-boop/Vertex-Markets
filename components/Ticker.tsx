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
    <div style={{ background: 'var(--bg)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      {/* Layout: static 6-column grid */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, alignItems: 'center' }}>
          {pairs.map((p, i) => (
            <TickerCell key={p.symbol} p={p} i={i} flash={flash[p.symbol]} total={pairs.length} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TickerCell({ p, i, flash, total }: any) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      borderRight: i < total - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
      padding: '16px 12px',
      background: flash === 'up' ? 'rgba(34,197,94,0.06)' : flash === 'down' ? 'rgba(239,68,68,0.06)' : 'transparent',
      transition: 'background 0.3s ease',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#6b7585', letterSpacing: '0.08em' }}>{p.symbol}</span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.up ? '#22c55e' : '#ef4444', boxShadow: `0 0 5px ${p.up ? '#22c55e' : '#ef4444'}`, display: 'inline-block' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <AnimatePresence mode="popLayout">
            <motion.span key={p.price} initial={{ opacity: 0, y: p.up ? -7 : 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', display: 'block' }}>
              {p.price}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            <motion.span key={p.change} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ fontSize: 10, fontWeight: 800, color: p.up ? '#22c55e' : '#ef4444' }}>
              {p.change}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <svg width="36" height="13" viewBox="0 0 36 13" fill="none" style={{ flexShrink: 0 }}>
        <motion.path 
          d={p.up ? 'M0,11 L7,8 L14,9 L21,4 L28,6 L36,1' : 'M0,1 L7,4 L14,3 L21,8 L28,6 L36,11'} 
          stroke={p.up ? '#22c55e' : '#ef4444'} 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
