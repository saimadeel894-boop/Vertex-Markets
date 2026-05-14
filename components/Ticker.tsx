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
        
        // Randomly skip updates to make it feel natural
        if (Math.random() > 0.5) {
          setFlash(f => ({ ...f, [p.symbol]: up ? 'up' : 'down' }))
          setTimeout(() => setFlash(f => ({ ...f, [p.symbol]: null })), 400)
          return { ...p, price: newStr, change: `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`, up }
        }
        return p
      }))
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
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
      display: 'flex', flexDirection: 'column', gap: 8,
      borderRight: i < total - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
      padding: '16px 20px',
      background: flash === 'up' ? 'rgba(34,197,94,0.08)' : flash === 'down' ? 'rgba(239,68,68,0.08)' : 'transparent',
      transition: 'background 0.3s ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{p.symbol}</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, height: 20 }}>
        <AnimatePresence mode="popLayout">
          <motion.span 
            key={p.price} 
            initial={{ opacity: 0, y: p.up ? -5 : 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, transition: { duration: 0.1 } }} 
            transition={{ duration: 0.3 }} 
            style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}
          >
            {p.price}
          </motion.span>
        </AnimatePresence>
        <span style={{ fontSize: 11, fontWeight: 600, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
      </div>

      <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none">
        <motion.path 
          d={p.up ? 'M0,12 L20,8 L40,10 L60,4 L80,6 L100,0' : 'M0,0 L20,4 L40,2 L60,10 L80,8 L100,12'} 
          stroke={p.up ? '#22c55e' : '#ef4444'} 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
