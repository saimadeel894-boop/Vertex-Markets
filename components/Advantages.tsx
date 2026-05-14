'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

const ads = [
  { 
    title: 'Institutional-Grade Liquidity',     
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.9))' }}>
        <defs>
          <linearGradient id="chrome-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#444444" />
          </linearGradient>
        </defs>
        <rect x="25" y="65" width="20" height="55" rx="2" fill="url(#chrome-grad-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <rect x="50" y="35" width="20" height="85" rx="2" fill="url(#chrome-grad-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <rect x="75" y="50" width="20" height="70" rx="2" fill="url(#chrome-grad-1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      </svg>
    )
  },
  { 
    title: 'Ultra-Fast Execution',              
    desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.9))' }}>
        <defs>
          <linearGradient id="chrome-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#999999" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="50" fill="none" stroke="url(#chrome-grad-2)" strokeWidth="6" />
        <path d="M25 75 A 40 40 0 0 1 95 75" fill="none" stroke="#666" strokeWidth="4" strokeDasharray="3 6" />
        <circle cx="60" cy="60" r="8" fill="#fff" />
        <line x1="60" y1="60" x2="40" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    )
  },
  { 
    title: 'Security You Can Trust',            
    desc: 'Segregated client funds, advanced end-to-end encryption, and global regulatory oversight.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.9))' }}>
        <defs>
          <linearGradient id="chrome-grad-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#777777" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
        </defs>
        <path d="M60 10 L20 28 V55 C20 85 40 105 60 115 C80 105 100 85 100 55 V28 L60 10 Z" fill="none" stroke="url(#chrome-grad-3)" strokeWidth="8" strokeLinejoin="round" />
        <path d="M60 22 L32 35 V55 C32 78 45 92 60 102 C75 92 88 78 88 55 V35 L60 22 Z" fill="rgba(255,255,255,0.05)" />
      </svg>
    )
  },
  { 
    title: 'Professional Trading Conditions',   
    desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for serious performance.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.9))' }}>
        <defs>
          <linearGradient id="chrome-grad-4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
        </defs>
        <rect x="10" y="25" width="100" height="22" rx="4" fill="url(#chrome-grad-4)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <rect x="10" y="55" width="100" height="22" rx="4" fill="url(#chrome-grad-4)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <rect x="10" y="85" width="100" height="22" rx="4" fill="url(#chrome-grad-4)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <circle cx="92" cy="36" r="3" fill="#000" />
        <circle cx="92" cy="66" r="3" fill="#000" />
        <circle cx="92" cy="96" r="3" fill="#000" />
        <circle cx="80" cy="36" r="3" fill="#000" />
        <circle cx="80" cy="66" r="3" fill="#000" />
        <circle cx="80" cy="96" r="3" fill="#000" />
      </svg>
    )
  },
]

function TiltCard({ ad, index }: { ad: typeof ads[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="feature-card"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: '#0d0d0d',
          border: '1px solid',
          borderColor: isHovered ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.08)',
          boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.6), 0 0 40px rgba(37,99,235,0.1)' : 'none',
          borderRadius: 12,
          padding: 32,
          minHeight: 340,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
        }}
        animate={{ y: isHovered ? -10 : 0 }}
      >
        {/* Glow overlay */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.07) 0%, transparent 80%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none'
          }}
          animate={{
            '--mouse-x': `${(x.get() + 0.5) * 100}%`,
            '--mouse-y': `${(y.get() + 0.5) * 100}%`
          } as any}
        />

        <motion.div 
          className="feature-icon"
          style={{ minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d', marginBottom: 20 }}
          animate={{ rotateY: isHovered ? 18 : 0, rotateX: isHovered ? -8 : 0 }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.1 + 0.2 },
            scale: { duration: 0.5, delay: index * 0.1 + 0.2 },
            rotateY: { duration: 0.4 },
            rotateX: { duration: 0.4 }
          }}
        >
          <div style={{ transform: 'translateZ(40px)' }}>
            {ad.icon}
          </div>
        </motion.div>
        
        <h3 style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 14, transform: 'translateZ(30px)', letterSpacing: '0.01em' }}>{ad.title}</h3>
        <p style={{ fontSize: 14.5, color: '#9ca3af', lineHeight: 1.6, transform: 'translateZ(20px)' }}>{ad.desc}</p>

      </motion.div>
    </motion.div>
  )
}

export default function Advantages() {
  return (
    <section style={{ padding: '160px 0 120px', background: '#000000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 84 }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 400, color: '#fff', letterSpacing: '-0.01em' }}>
            <span style={{ color: '#9ca3af' }}>Advantages Built for </span>
            <span style={{ fontWeight: 700 }}>Serious Traders</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}
        >
          {ads.map((ad, i) => (
            <TiltCard key={ad.title} ad={ad} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
