'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const initialPairs = [
  { symbol: 'BTCUSD',  price: '67,842.10', change: '+1.08%', up: true  },
  { symbol: 'EURUSD',  price: '1.08945',   change: '+0.47%', up: true  },
  { symbol: 'GBPUSD',  price: '1.27482',   change: '+0.35%', up: true  },
  { symbol: 'XAUUSD',  price: '2,384.65',  change: '+0.62%', up: true  },
  { symbol: 'USOIL',   price: '78.245',    change: '-0.15%', up: false },
  { symbol: 'USDJPY',  price: '156.743',   change: '-0.21%', up: false },
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
    }, 2500)
    return () => clearInterval(id)
  }, [])

  // Duplicate pairs for seamless infinite scroll
  const scrollPairs = [...pairs, ...pairs, ...pairs]

  return (
    <div style={{ background: 'var(--bg)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
      <motion.div
        animate={{ x: [0, -1440] }} // Adjust duration and distance for smoothness based on content width
        transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {scrollPairs.map((p, i) => (
          <TickerCell key={`${p.symbol}-${i}`} p={p} flash={flash[p.symbol]} />
        ))}
      </motion.div>
    </div>
  )
}

function TickerCell({ p, flash }: any) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      borderRight: '1px solid rgba(255,255,255,0.07)',
      padding: '16px 24px',
      minWidth: 240,
      background: flash === 'up' ? 'rgba(34,197,94,0.06)' : flash === 'down' ? 'rgba(239,68,68,0.06)' : 'transparent',
      transition: 'background 0.3s ease',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      <svg width="40" height="14" viewBox="0 0 40 14" fill="none" style={{ flexShrink: 0, marginLeft: 8 }}>
        <motion.path 
          d={p.up ? 'M0,12 L8,9 L16,10 L24,4 L32,7 L40,1' : 'M0,1 L8,4 L16,3 L24,9 L32,7 L40,12'} 
          stroke={p.up ? '#22c55e' : '#ef4444'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
