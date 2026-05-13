'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const platforms = [
  { name: 'Web Trader', sub: 'Access Anywhere', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 010 20M2 12h20"/></svg> },
  { name: 'Desktop',    sub: 'Windows & Mac',  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { name: 'Mobile App', sub: 'iOS & Android',  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg> },
]

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Platforms() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(smoothProgress, [0, 1], ['5deg', '-5deg'])
  const rotateY = useTransform(smoothProgress, [0, 1], ['-5deg', '5deg'])

  return (
    <section ref={ref} style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 100px)', alignItems: 'center' }}>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1000 }}
          >
            <motion.div style={{ position: 'relative', rotateX, rotateY, transformStyle: 'preserve-3d' }}>
              <div style={{ position: 'absolute', top: '10%', left: '5%', width: '90%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', transform: 'translateZ(-50px)' }} />
              <img
                src="/platforms-mockup.png"
                alt="Trading Platforms"
                style={{ width: '100%', maxWidth: 560, height: 'auto', position: 'relative', zIndex: 10, filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}
              />
              {/* Overlay animated chart line on screen area */}
              <svg width="200" height="100" viewBox="0 0 200 100" style={{ position: 'absolute', top: '35%', left: '20%', zIndex: 20, pointerEvents: 'none' }}>
                <motion.path
                  d="M0 80 Q 20 70, 40 85 T 80 50 T 120 60 T 160 20 T 200 30"
                  fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={slideRight} style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.25em', color: '#6b7585', textTransform: 'uppercase', marginBottom: 16 }}>POWERFUL. FLEXIBLE. ADVANCED.</motion.p>
            <motion.h2 variants={slideRight} style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: '#fff', lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.025em', fontFamily: 'Inter, sans-serif' }}>
              Trading Platforms<br />Built for Performance
            </motion.h2>
            <motion.p variants={slideRight} style={{ fontSize: 15, lineHeight: 1.7, color: '#9ca3af', marginBottom: 36, maxWidth: 420 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile — anywhere, anytime.
            </motion.p>

            <motion.div variants={slideRight} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {platforms.map(p => (
                <motion.div 
                  key={p.name} 
                  whileHover={{ scale: 1.02 }}
                  className="group"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
                >
                  <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#9ca3af', transition: 'color 0.3s ease' }} className="group-hover:text-blue-500">
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#6b7585', marginTop: 2 }}>{p.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={slideRight}>
              <a href="#" className="btn-shimmer btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none', transition: 'all 0.3s ease' }}>
                Explore Platforms
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
