'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const ads = [
  {
    title: 'Institutional-Grade\nLiquidity',
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
    img: '/icon-liquidity.png',
    alt: 'Institutional-Grade Liquidity',
  },
  {
    title: 'Ultra-Fast\nExecution',
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
    img: '/icon-execution.png',
    alt: 'Ultra-Fast Execution',
  },
  {
    title: 'Security You\nCan Trust',
    desc: 'Segregated client funds, advanced encryption, and global regulatory oversight.',
    img: '/icon-security.png',
    alt: 'Security You Can Trust',
  },
  {
    title: 'Professional\nTrading Conditions',
    desc: 'Raw spreads, flexible leverage, and low commissions built for serious performance.',
    img: '/icon-conditions.png',
    alt: 'Professional Trading Conditions',
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
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
      }}
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
          background: 'var(--card)',
          border: '1px solid',
          borderColor: isHovered ? 'var(--border-hover)' : 'var(--border)',
          boxShadow: isHovered ? 'var(--shadow-card)' : 'none',
          borderRadius: 12,
          padding: '32px 28px',
          minHeight: 340,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
        animate={{ y: isHovered ? -10 : 0 }}
      >
        {/* Glow overlay on hover */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at 50% 0%, var(--glass-bg) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
          }}
        />

        {/* Top shimmer line on hover */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s',
            pointerEvents: 'none',
          }}
        />

        {/* PNG Icon */}
        <motion.div
          className="feature-icon"
          style={{
            minHeight: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            transformStyle: 'preserve-3d',
            marginBottom: 24,
          }}
          animate={{ rotateY: isHovered ? 18 : 0, rotateX: isHovered ? -8 : 0 }}
          transition={{ rotateY: { duration: 0.4 }, rotateX: { duration: 0.4 } }}
        >
          <div style={{ transform: 'translateZ(40px)' }}>
            <Image
              src={ad.img}
              alt={ad.alt}
              width={140}
              height={140}
              style={{
                width: 'auto',
                height: 140,
                objectFit: 'contain',
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.8))',
              }}
            />
          </div>
        </motion.div>

        <h3
          style={{
            fontSize: 19,
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 14,
            transform: 'translateZ(30px)',
            letterSpacing: '0.01em',
            whiteSpace: 'pre-line',
            lineHeight: 1.3,
          }}
        >
          {ad.title}
        </h3>
        <p
          style={{
            fontSize: 14.5,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            transform: 'translateZ(20px)',
          }}
        >
          {ad.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Advantages() {
  return (
    <section style={{ padding: '120px 0 100px', background: 'var(--background)' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Advantages Built for </span>
            <span
              style={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-silver) 40%, var(--text-primary) 70%, var(--text-muted) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Serious Traders
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}
        >
          {ads.map((ad, i) => (
            <TiltCard key={ad.alt} ad={ad} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
