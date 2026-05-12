'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Instrument = {
  pair: string
  price: string
  change: string
  positive: boolean
  points: string
}

const BASE: Instrument[] = [
  { pair: 'EURUSD',  price: '1.08945',   change: '+0.47%', positive: true,  points: '0,17 15,14 30,18 50,10 68,12 90,3' },
  { pair: 'GBPUSD',  price: '1.27482',   change: '+0.35%', positive: true,  points: '0,18 20,14 38,17 55,8 72,10 90,5' },
  { pair: 'XAUUSD',  price: '2,384.65',  change: '+0.62%', positive: true,  points: '0,20 22,14 44,17 60,8 76,5 90,2' },
  { pair: 'USDJPY',  price: '156.743',   change: '-0.21%', positive: false, points: '0,5 22,9 42,7 60,15 76,12 90,17' },
  { pair: 'BTCUSD',  price: '67,842.10', change: '+1.08%', positive: true,  points: '0,18 18,14 36,10 54,14 72,6 90,2' },
  { pair: 'USOIL',   price: '78.245',    change: '-0.15%', positive: false, points: '0,6 20,10 40,14 58,11 76,16 90,19' },
]

function nudgePrice(price: string): string {
  const raw = parseFloat(price.replace(/,/g, ''))
  if (isNaN(raw)) return price
  const delta = raw * 0.00005 * (Math.random() - 0.5)
  const next = raw + delta
  const decimals = price.includes(',') ? 2 : (price.split('.')[1]?.length ?? 5)
  const formatted = next.toFixed(decimals)
  // reinsert comma if original had one
  if (raw > 999) {
    const [int, dec] = formatted.split('.')
    return parseInt(int).toLocaleString('en-US') + (dec ? '.' + dec : '')
  }
  return formatted
}

export default function Ticker() {
  const [instruments, setInstruments] = useState<Instrument[]>(BASE)

  useEffect(() => {
    const id = setInterval(() => {
      setInstruments(prev =>
        prev.map(inst => ({ ...inst, price: nudgePrice(inst.price) }))
      )
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        background: '#0a0d14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '22px 48px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
          }}
        >
          {instruments.map((inst, i) => (
            <motion.div
              key={inst.pair}
              className="ticker-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{ padding: '0 20px' }}
            >
              <div style={{ fontSize: 11.5, fontWeight: 500, color: '#a0aab8', letterSpacing: '.04em' }}>
                {inst.pair}
              </div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '3px 0',
                  fontVariantNumeric: 'tabular-nums',
                  transition: 'color 0.3s',
                }}
              >
                {inst.price}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: inst.positive ? '#22c55e' : '#ef4444',
                }}
              >
                {inst.change}
              </div>
              {/* Sparkline */}
              <svg
                viewBox="0 0 90 22"
                style={{ width: '100%', height: 22, marginTop: 8 }}
                preserveAspectRatio="none"
              >
                <polyline
                  points={inst.points}
                  fill="none"
                  stroke={inst.positive ? '#22c55e' : '#ef4444'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
