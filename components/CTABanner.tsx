'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function CTABanner() {
  const [isMobile, setIsMobile] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const rotateX = useTransform(smoothY, [-1, 1], ['10deg', '-10deg'])
  const rotateY = useTransform(smoothX, [-1, 1], ['-10deg', '10deg'])
  const translateX = useTransform(smoothX, [-1, 1], [-15, 15])
  const translateY = useTransform(smoothY, [-1, 1], [-15, 15])

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 2 - 1
    const y = (e.clientY - rect.top) / rect.height * 2 - 1
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section style={{ background: 'var(--background)', paddingBottom: 80 }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          onMouseMove={handleMouseMove}
          style={{
            background: 'linear-gradient(90deg, #0A0A0A, #000000)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 24,
            margin: '0 clamp(16px, 4vw, 40px)',
            padding: 'clamp(32px, 6vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 60,
            alignItems: 'center',
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            transformStyle: 'preserve-3d',
            perspective: 1500
          }}
        >
          {/* Subtle inner glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, var(--glass-bg) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* LEFT SIDE */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease }}
              style={{ fontSize: 40, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 20 }}
            >
              Ready to Elevate Your Trading?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 40, maxWidth: 440 }}
            >
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                <a href="#" className="btn-solid" style={{ padding: '12px 28px', fontSize: 14 }}>Get Started <span style={{ marginLeft: 8 }}>→</span></a>
              </div>
              <a href="#" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', marginLeft: 4 }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                or Try Demo Account
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Large 3D Chrome V Logo (Matching Reference Image) */}
          <div style={{ position: 'relative', height: 360, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d', width: '100%', maxWidth: 460 }}
              animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img 
                src="/v-logo-3d.png" 
                alt="Vertex 3D Chrome Logo" 
                style={{ 
                  width: '100%', height: 'auto', 
                  filter: 'drop-shadow(0 60px 100px rgba(0,0,0,0.85)) brightness(1.15) contrast(1.1)' 
                }} 
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
