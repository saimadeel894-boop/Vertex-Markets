'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ads = [
  {
    icon: '/icon-liquidity.png',
    title: 'Institutional-Grade Liquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.',
  },
  {
    icon: '/icon-execution.png',
    title: 'Ultra-Fast Execution',
    desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.',
  },
  {
    icon: '/icon-security.png',
    title: 'Security You Can Trust',
    desc: 'Segregated client funds, advanced end-to-end encryption, and multi-jurisdictional regulatory oversight.',
  },
  {
    icon: '/icon-conditions.png',
    title: 'Professional Trading Conditions',
    desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for performance.',
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '140px 48px', background: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Glow - Removed per instructions */}

      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 100 }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(40px, 6vw, 56px)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            <span className="text-gray-600 font-medium">Built for </span>
            <span className="text-white font-black">Performance</span>
          </motion.h2>
          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            Our infrastructure is designed for high-frequency trading and maximum reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ads.map((ad, i) => (
            <AdvCard key={ad.title} ad={ad} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvCard({ ad, index }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="adv-card group relative"
    >
      <div 
        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" 
        style={{ transform: 'translateZ(-50px)' }}
      />
      
      <div style={{ transform: 'translateZ(60px)', width: '100%' }}>
        <div className="icon-box" style={{ background: 'linear-gradient(145deg, #111827, #030712)', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.03)' }}>
          <img 
            src={ad.icon} 
            alt={ad.title} 
            style={{ 
              width: '90px', height: '90px', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
            }} 
          />
        </div>
      </div>

      <div style={{ transform: 'translateZ(40px)' }}>
        <h3 style={{ fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 18, lineHeight: 1.2 }}>
          {ad.title}
        </h3>
        <p style={{ fontSize: 15, color: '#9ca3af', lineHeight: 1.7, margin: 0 }}>
          {ad.desc}
        </p>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/40 to-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ transform: 'translateZ(20px)' }}
      />
    </motion.div>
  )
}
