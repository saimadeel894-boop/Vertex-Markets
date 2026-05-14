'use client'
import { motion } from 'framer-motion'

const pairs = [
  { symbol: 'EURUSD', price: '1.08945', change: '+0.47%', up: true },
  { symbol: 'GBPUSD', price: '1.27482', change: '+0.35%', up: true },
  { symbol: 'XAUUSD', price: '2,384.65', change: '+0.62%', up: true },
  { symbol: 'USDJPY', price: '156.743', change: '-0.21%', up: false },
  { symbol: 'BTCUSD', price: '67,842.10', change: '+1.08%', up: true },
  { symbol: 'USOIL', price: '78.245', change: '-0.15%', up: false },
]

export default function Ticker() {
  return (
    <div className="bg-black border-y border-white/10 w-full overflow-hidden py-4">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {pairs.map((pair, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-[10px] font-bold tracking-widest">{pair.symbol}</span>
                <span className={`text-[10px] font-bold ${pair.up ? 'text-green-500' : 'text-red-500'}`}>
                  {pair.change}
                </span>
              </div>
              <div className="text-white font-bold text-sm">{pair.price}</div>
              {/* Blue Sparkline */}
              <div className="h-[20px] w-full opacity-60">
                <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path 
                    d={`M 0 ${10 + Math.random()*8} L 20 ${5 + Math.random()*10} L 40 ${12 + Math.random()*5} L 60 ${3 + Math.random()*12} L 80 ${8 + Math.random()*8} L 100 ${5 + Math.random()*10}`}
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

