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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Advantages() {
  return (
    <section style={{ padding: '140px 48px', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 90 }}
        >
          <h2 style={{ fontSize: 'clamp(40px,5vw,52px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: '#4b5563' }}>Advantages Built for </span>
            <span style={{ color: '#fff' }}>Serious Traders</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 3, width: 60, background: '#fff', margin: '24px auto 0', borderRadius: 2, transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Cards Grid — scroll-triggered stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
          className="lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
        >
          {ads.map((ad, i) => (
            <TiltCard key={ad.title} ad={ad} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TiltCard({ ad, index }: { ad: typeof ads[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useTransform(useSpring(my, { stiffness: 150, damping: 20 }), [-0.5, 0.5], ['8deg', '-8deg'])
  const rotY = useTransform(useSpring(mx, { stiffness: 150, damping: 20 }), [-0.5, 0.5], ['-8deg', '8deg'])

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onMouseLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className="adv-card group"
    >
      {/* Icon Box */}
      <div className="icon-box" style={{ transform: 'translateZ(40px)' }}>
        <img
          src={ad.icon}
          alt={ad.title}
          width={95}
          height={95}
          style={{ objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
        />
      </div>

      {/* Text */}
      <div style={{ transform: 'translateZ(30px)' }}>
        <h3 style={{ fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 14, lineHeight: 1.25, letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>
          {ad.title}
        </h3>
        <p style={{ fontSize: 14.5, color: '#6b7585', lineHeight: 1.7, fontWeight: 400 }}>
          {ad.desc}
        </p>
      </div>

      {/* Hover bottom accent */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#fff', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} className="group-hover:[transform:scaleX(1)]" />
    </motion.div>
  )
}
