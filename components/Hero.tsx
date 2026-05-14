'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { title: 'Tight Spreads', sub: 'From 0.0 pips' },
  { title: 'Fast Execution', sub: '<30ms Average' },
  { title: 'Secure & Regulated', sub: 'Global Compliance' },
  { title: '24/7 Support', sub: 'Real Traders' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-black flex items-center">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT COLUMN - 45% */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-6xl lg:text-[64px] font-bold leading-tight m-0">
                Trade Smarter.<br />
                Trade Vertex.
              </h1>
              <p className="text-[#9ca3af] text-lg max-w-md leading-relaxed">
                Professional trading conditions, institutional-grade 
                technology, and deep liquidity across global markets.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2563EB] text-white px-8 py-4 rounded font-bold text-base hover:bg-blue-700 transition-colors flex items-center gap-2">
                Get Started <span>→</span>
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded font-bold text-base hover:bg-white/10 transition-colors">
                Try Demo Account
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                  <div>
                    <div className="text-white text-sm font-bold">{stat.title}</div>
                    <div className="text-gray-500 text-xs">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - BULL COMPOSITION - 55% */}
          <div className="w-full lg:w-[55%] relative flex items-center justify-center min-h-[500px]">
            
            {/* 3. Curved glass panel BEHIND the bull */}
            <div className="glass-panel absolute w-[440px] h-[440px] bottom-10 left-1/2 -translate-x-1/2 overflow-hidden">
               {/* Faint candlestick chart */}
               <div className="absolute inset-0 opacity-10 pointer-events-none p-10">
                  <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {[...Array(12)].map((_, i) => (
                      <g key={i}>
                        <line x1={15 + i*15} y1={20 + Math.random()*60} x2={15 + i*15} y2={40 + Math.random()*40} stroke="white" strokeWidth="1" />
                        <rect x={12 + i*15} y={30 + Math.random()*30} width="6" height={10 + Math.random()*20} fill={Math.random() > 0.5 ? "#22c55e" : "#ef4444"} />
                      </g>
                    ))}
                  </svg>
               </div>
            </div>

            {/* 1. Large circular chrome platform */}
            <div className="pedestal absolute bottom-0 left-1/2 -translate-x-1/2" />

            {/* 2. Bull image centered ON the platform */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[350px] animate-float">
              <Image 
                src="/bull.png" 
                alt="Vertex Bull" 
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* 4. THREE floating price cards */}
            {/* TOP-LEFT */}
            <motion.div 
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[15%] left-[10%] z-20"
            >
              <PriceCard symbol="XAUUSD" price="2,384.65" change="+0.62%" up={true} />
            </motion.div>

            {/* TOP-RIGHT */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-[10%] right-[15%] z-20"
            >
              <PriceCard symbol="EURUSD" price="1.08945" change="+0.47%" up={true} />
            </motion.div>

            {/* FAR-RIGHT */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-[45%] -right-[5%] z-20"
            >
              <PriceCard symbol="GBPUSD" price="1.27482" change="-0.30%" up={false} />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

function PriceCard({ symbol, price, change, up }: { symbol: string, price: string, change: string, up: boolean }) {
  return (
    <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-2xl min-w-[140px]">
      <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">{symbol}</div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-white font-bold text-sm">{price}</span>
        <span className={`text-[10px] font-bold ${up ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
      </div>
    </div>
  )
}

