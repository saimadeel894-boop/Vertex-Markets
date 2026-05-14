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
  const rotateX = useTransform(smoothY, [-1, 1], ['5deg', '-5deg'])
  const rotateY = useTransform(smoothX, [-1, 1], ['-5deg', '5deg'])

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
    <section style={{ background: '#000000', paddingBottom: 80 }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          onMouseMove={handleMouseMove}
          style={{
            background: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: 16,
            margin: '0 clamp(16px, 4vw, 40px)',
            padding: 'clamp(32px, 6vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 60,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            perspective: 1200
          }}
        >
          {/* Subtle inner glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* LEFT SIDE */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40, maxWidth: 440 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <a href="#" className="btn-solid">Get Started <span>→</span></a>
              </div>
              <a href="#" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', marginLeft: 4 }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}
              >
                or Try Demo Account
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Large 3D Chrome V Logo (Matching Reference Image) */}
          <div style={{ position: 'relative', height: 360, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d', width: '100%', maxWidth: 380 }}
              animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img 
                src="/v-logo-3d.png" 
                alt="Vertex 3D Chrome Logo" 
                style={{ 
                  width: '100%', height: 'auto', 
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7)) brightness(1.1) contrast(1.1)' 
                }} 
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
