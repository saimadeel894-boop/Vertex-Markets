'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ads = [
  { icon: '/icon-liquidity.png',   title: 'Institutional-Grade Liquidity',     desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability across all market conditions.' },
  { icon: '/icon-execution.png',   title: 'Ultra-Fast Execution',              desc: 'Average execution speed under 30ms with no dealing desk interference and zero conflict of interest.' },
  { icon: '/icon-security.png',    title: 'Security You Can Trust',            desc: 'Segregated client funds, advanced end-to-end encryption, and multi-jurisdictional regulatory oversight.' },
  { icon: '/icon-conditions.png',  title: 'Professional Trading Conditions',   desc: 'Raw spreads from 0.0 pips, flexible institutional leverage, and low commissions built for performance.' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const cardVariant = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Advantages() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 90px)' }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: '#4b5563' }}>Advantages Built for </span>
            <span style={{ color: '#fff' }}>Serious Traders</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ height: 3, width: 52, background: '#fff', margin: '20px auto 0', borderRadius: 2, transformOrigin: 'left' }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}
        >
          {ads.map((ad, i) => <TiltCard key={ad.title} ad={ad} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

function TiltCard({ ad, index }: { ad: typeof ads[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useTransform(useSpring(my, { stiffness: 150, damping: 20 }), [-0.5, 0.5], ['7deg', '-7deg'])
  const rotY = useTransform(useSpring(mx, { stiffness: 150, damping: 20 }), [-0.5, 0.5], ['-7deg', '7deg'])

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 1000 }}
      className="adv-card group"
    >
      <div className="icon-box" style={{ transform: 'translateZ(30px)' }}>
        <img src={ad.icon} alt={ad.title} width={90} height={90} style={{ objectFit: 'contain', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))' }} />
      </div>
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.25, letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>{ad.title}</h3>
        <p style={{ fontSize: 14, color: '#6b7585', lineHeight: 1.7 }}>{ad.desc}</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#fff', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease' }} className="group-hover:[transform:scaleX(1)]" />
    </motion.div>
  )
}
