'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

const ads = [
  { 
    title: 'Institutional-Grade Liquidity',     
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.8))' }}>
        <defs>
          <linearGradient id="silver-chart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4d4d4" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#555555" />
          </linearGradient>
        </defs>
        <rect x="25" y="60" width="18" height="60" rx="2" fill="url(#silver-chart)" />
        <rect x="51" y="30" width="18" height="90" rx="2" fill="url(#silver-chart)" />
        <rect x="77" y="45" width="18" height="75" rx="2" fill="url(#silver-chart)" />
      </svg>
    )
  },
  { 
    title: 'Ultra-Fast Execution',              
    desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.8))' }}>
        <defs>
          <linearGradient id="silver-speed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#a0a0a0" />
            <stop offset="100%" stopColor="#c8c8c8" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="55" fill="url(#silver-speed)" stroke="#aaaaaa" strokeWidth="3" />
        <path d="M20 60 A 40 40 0 0 1 100 60" fill="none" stroke="#555" strokeWidth="4" strokeDasharray="4 8" />
        <circle cx="60" cy="60" r="8" fill="#fff" />
        <line x1="60" y1="60" x2="35" y2="35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    title: 'Security You Can Trust',            
    desc: 'Segregated client funds, advanced end-to-end encryption, and multi-jurisdictional regulatory oversight.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.8))' }}>
        <defs>
          <linearGradient id="silver-shield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e0e0e0" />
            <stop offset="50%" stopColor="#888888" />
            <stop offset="100%" stopColor="#cccccc" />
          </linearGradient>
        </defs>
        <path d="M60 5 L15 25 V55 C15 85 35 105 60 115 C85 105 105 85 105 55 V25 L60 5 Z" fill="none" stroke="url(#silver-shield)" strokeWidth="10" strokeLinejoin="round" />
        <path d="M60 25 L35 38 V60 C35 75 45 88 60 95 C75 88 85 75 85 60 V38 L60 25 Z" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
      </svg>
    )
  },
  { 
    title: 'Professional Trading Conditions',   
    desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for performance.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.8))' }}>
        <defs>
          <linearGradient id="silver-server" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="50%" stopColor="#a0a0a0" />
            <stop offset="100%" stopColor="#c8c8c8" />
          </linearGradient>
        </defs>
        <rect x="5" y="20" width="110" height="20" rx="4" fill="url(#silver-server)" />
        <rect x="5" y="48" width="110" height="20" rx="4" fill="url(#silver-server)" />
        <rect x="5" y="76" width="110" height="20" rx="4" fill="url(#silver-server)" />
        <circle cx="95" cy="30" r="3" fill="#000" />
        <circle cx="95" cy="58" r="3" fill="#000" />
        <circle cx="95" cy="86" r="3" fill="#000" />
        <circle cx="82" cy="30" r="3" fill="#000" />
        <circle cx="82" cy="58" r="3" fill="#000" />
        <circle cx="82" cy="86" r="3" fill="#000" />
      </svg>
    )
  },
]

function TiltCard({ ad, index }: { ad: typeof ads[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: '#0d0d0d',
          border: '1px solid',
          borderColor: isHovered ? 'rgba(37,99,235,0.35)' : 'rgba(255,255,255,0.08)',
          boxShadow: isHovered ? '0 -6px 30px rgba(37,99,235,0.15)' : 'none',
          borderRadius: 12,
          padding: 32,
          minHeight: 320,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
        }}
        animate={{ y: isHovered ? -6 : 0 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06) 0%, transparent 80%)',
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
          initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          style={{ minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isHovered ? 15 : 0, rotateX: isHovered ? -5 : 0 }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.1 + 0.2 },
            scale: { duration: 0.5, delay: index * 0.1 + 0.2 },
            rotateY: { duration: 0.4 },
            rotateX: { duration: 0.4 }
          }}
        >
          <div style={{ transform: 'translateZ(30px)' }}>
            {ad.icon}
          </div>
        </motion.div>
        
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12, transform: 'translateZ(20px)' }}>{ad.title}</h3>
        <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.6, transform: 'translateZ(10px)' }}>{ad.desc}</p>

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
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 400, color: '#fff' }}>
            <span style={{ color: '#9ca3af' }}>Advantages Built for </span>
            <span style={{ fontWeight: 700 }}>Serious Traders</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
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
