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
  const result = (n + (Math.random() - 0.48) * n * 0.0002).toFixed(decimals)
  return parseFloat(result).toLocaleString('en-US', { minimumFractionDigits: decimals })
}

export default function Ticker() {
  const [pairs, setPairs] = useState(initialPairs)
  const [flash, setFlash] = useState<Record<string, 'up' | 'down' | null>>({})

  useEffect(() => {
    const id = setInterval(() => {
      setPairs(prev => prev.map(p => {
        if (Math.random() > 0.4) {
          const oldN = parseFloat(p.price.replace(/,/g, ''))
          const newStr = nudge(p.price)
          const newN = parseFloat(newStr.replace(/,/g, ''))
          const up = newN >= oldN
          setFlash(f => ({ ...f, [p.symbol]: up ? 'up' : 'down' }))
          setTimeout(() => setFlash(f => ({ ...f, [p.symbol]: null })), 400)
          return { ...p, price: newStr, up }
        }
        return p
      }))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0 }}>
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
      display: 'flex', flexDirection: 'column', gap: 10,
      borderRight: i < total - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
      padding: '24px 28px',
      background: flash === 'up' ? 'rgba(34,197,94,0.04)' : flash === 'down' ? 'rgba(239,68,68,0.04)' : 'transparent',
      transition: 'background 0.4s ease',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{p.symbol}</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
      </div>
      
      <div style={{ height: 24, display: 'flex', alignItems: 'center' }}>
        <AnimatePresence mode="popLayout">
          <motion.span 
            key={p.price} 
            initial={{ opacity: 0, y: p.up ? -4 : 4 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, transition: { duration: 0.15 } }} 
            style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}
          >
            {p.price}
          </motion.span>
        </AnimatePresence>
      </div>

      <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
        <motion.path 
          d={p.up ? 'M0,18 L15,12 L30,15 L45,8 L60,10 L75,4 L90,6 L100,0' : 'M0,0 L15,8 L30,6 L45,14 L60,12 L75,20 L90,18 L100,24'} 
          stroke={p.up ? '#2563eb' : '#3b82f6'} 
          strokeWidth="1.2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}
