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
  const rotateX = useTransform(smoothY, [-1, 1], ['4deg', '-4deg'])
  const rotateY = useTransform(smoothX, [-1, 1], ['-4deg', '4deg'])

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
            margin: '0 40px',
            padding: 60,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 60,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            perspective: 1200
          }}
        >
          {/* Subtle animated gradient shift inside */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes ctaBgShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            backgroundSize: '200% 200%',
            animation: 'ctaBgShift 15s ease infinite',
            pointerEvents: 'none', zIndex: 0
          }} />

          {/* LEFT SIDE */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40, maxWidth: 440 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
              <a href="#" className="btn-solid">Get Started <span>→</span></a>
              <a href="#" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}
              >
                or Try Demo Account
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Tracking Phone Mockup */}
          <div style={{ position: 'relative', height: 360, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <motion.div style={{
              width: 180, height: 360,
              background: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%)',
              borderRadius: 24, padding: 4,
              boxShadow: '-20px 40px 60px rgba(0,0,0,0.6), inset 2px 2px 5px rgba(255,255,255,0.8)',
              rotateX, rotateY, transformStyle: 'preserve-3d'
            }}>
              {/* Phone Screen */}
              <div style={{ width: '100%', height: '100%', background: '#0d0d0d', borderRadius: 20, padding: 12, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
                <div style={{ width: '40%', height: 4, background: '#333', margin: '0 auto 8px auto', borderRadius: 2 }} />
                <div style={{ width: '100%', height: 60, background: '#1a1a1a', borderRadius: 6 }} />
                <div style={{ width: '100%', height: 120, background: '#1a1a1a', borderRadius: 6, position: 'relative' }}>
                  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
                    <path d="M0 80 L20 60 L40 70 L60 40 L80 50 L100 20" stroke="#2563eb" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div style={{ width: '100%', height: 40, background: '#2563eb', borderRadius: 6, marginTop: 'auto' }} />
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
