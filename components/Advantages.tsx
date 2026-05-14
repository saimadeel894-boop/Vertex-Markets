'use client'
import { motion } from 'framer-motion'

const ads = [
  { 
    title: 'Advanced Analytics', 
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
        <rect x="3" y="10" width="4" height="11" rx="1" fill="url(#silver1)" />
        <rect x="10" y="5" width="4" height="16" rx="1" fill="url(#silver1)" />
        <rect x="17" y="13" width="4" height="8" rx="1" fill="url(#silver1)" />
      </svg>
    )
  },
  { 
    title: 'Ultra-Fast Speed', 
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" stroke="url(#silver2)" strokeWidth="2" />
        <path d="M12 12L16 8" stroke="url(#silver2)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="url(#silver2)" />
      </svg>
    )
  },
  { 
    title: 'Institutional Security', 
    desc: 'Segregated client funds, advanced encryption, and multi-jurisdictional oversight.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
        <path d="M12 2L4 5V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V5L12 2Z" fill="url(#silver3)" />
      </svg>
    )
  },
  { 
    title: 'Robust Infrastructure', 
    desc: 'Raw spreads from 0.0 pips and low commissions built for high performance.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silver4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="16" height="4" rx="1" fill="url(#silver4)" />
        <rect x="4" y="10" width="16" height="4" rx="1" fill="url(#silver4)" />
        <rect x="4" y="16" width="16" height="4" rx="1" fill="url(#silver4)" />
        <circle cx="7" cy="6" r="0.5" fill="black" />
        <circle cx="7" cy="12" r="0.5" fill="black" />
        <circle cx="7" cy="18" r="0.5" fill="black" />
      </svg>
    )
  },
]


export default function Advantages() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-white text-4xl lg:text-5xl font-normal text-center mb-20">
          Advantages Built for <span className="font-bold">Serious Traders</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ads.map((ad, i) => (
            <div 
              key={i} 
              className="bg-[#0d0d0d] border border-white/10 rounded-xl p-8 flex flex-col min-h-[300px] hover:border-white/20 transition-all group"
            >
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {ad.icon}
                </div>
              </div>
              <h3 className="text-white text-lg font-bold mb-4">{ad.title}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{ad.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

