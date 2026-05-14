'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function Platforms() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(smoothProgress, [0, 1], ['5deg', '-5deg'])
  const rotateY = useTransform(smoothProgress, [0, 1], ['-5deg', '5deg'])

  return (
    <section ref={ref} style={{ padding: '80px 0', background: '#000000', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
          
          {/* LEFT SIDE: Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1000 }}
          >
            <motion.div style={{ position: 'relative', rotateX, rotateY, transformStyle: 'preserve-3d' }}>
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

          {/* RIGHT SIDE: Content */}
          <div style={{ paddingRight: 'clamp(0px, 4vw, 40px)' }}>
            <div style={{ color: '#2563eb', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
              POWERFUL. FLEXIBLE. ADVANCED.
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Trading Platforms Built for Performance
            </h2>
            <p style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>🌐</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Web Trader</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>Access Anywhere</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>🖥️</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Desktop</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>Windows & Mac</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>📱</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Mobile App</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>iOS & Android</div>
                </div>
              </div>

            </div>

            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: '#2563eb', color: '#fff', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
              Explore Platforms <span>→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
