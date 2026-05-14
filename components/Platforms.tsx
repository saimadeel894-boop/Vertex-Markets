'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function Platforms() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const rotateX = useTransform(smoothProgress, [0, 1], ['5deg', '-5deg'])
  const rotateY = useTransform(smoothProgress, [0, 1], ['-5deg', '5deg'])

  return (
    <section ref={ref} style={{ padding: '120px 0', background: '#000000', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(60px, 8vw, 120px)', alignItems: 'center' }}>
          
          {/* LEFT SIDE: Mockups */}
          <div style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1200 }}>
            
            <motion.div style={{ width: '100%', height: '100%', position: 'relative', rotateX, rotateY, transformStyle: 'preserve-3d' }}>
              
              {/* Laptop Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}
                style={{ 
                  position: 'absolute', width: '100%', maxWidth: 500, height: 320, 
                  background: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%)', 
                  borderRadius: '12px 12px 0 0', padding: 4,
                  left: '5%', top: '10%', display: 'flex', flexDirection: 'column',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                }}
              >
                {/* Screen Content */}
                <div style={{ flex: 1, background: '#0d0d0d', borderRadius: '8px 8px 0 0', padding: 16, borderBottom: '16px solid #222', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ width: 60, height: 12, background: '#333', borderRadius: 2 }} />
                    <div style={{ width: 120, height: 12, background: '#333', borderRadius: 2 }} />
                  </div>
                  <svg width="100%" height="80%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M0 80 L10 60 L20 70 L40 30 L50 40 L60 20 L80 50 L100 10" stroke="#2563eb" strokeWidth="2" fill="none" 
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease }}
                    />
                  </svg>
                </div>
                {/* Laptop base */}
                <div style={{ height: 16, background: 'linear-gradient(to bottom, #888, #444)', borderRadius: '0 0 8px 8px' }} />
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -5 }} whileInView={{ opacity: 1, x: 0, rotate: -5 }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: 0.15 }}
                style={{
                  position: 'absolute', width: 160, height: 320,
                  background: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%)',
                  borderRadius: 24, padding: 4,
                  right: '5%', bottom: '5%',
                  boxShadow: '-10px 30px 50px rgba(0,0,0,0.9)',
                  transform: 'translateZ(40px)'
                }}
              >
                <div style={{ width: '100%', height: '100%', background: '#0a0a0a', borderRadius: 20, padding: 12 }}>
                  <div style={{ width: '40%', height: 4, background: '#444', margin: '0 auto 12px auto', borderRadius: 2 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                    <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                    <svg width="100%" height="100" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <motion.path d="M0 60 L20 40 L40 50 L60 20 L80 30 L100 10" stroke="#22c55e" strokeWidth="3" fill="none"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8, ease }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            style={{ paddingRight: 'clamp(0px, 4vw, 40px)' }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ color: '#2563eb', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
              POWERFUL. FLEXIBLE. ADVANCED.
            </motion.div>
            <motion.h2 variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Trading Platforms Built for Performance
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              
              <PlatformRow icon="🌐" title="Web Trader" sub="Access Anywhere" />
              <PlatformRow icon="🖥️" title="Desktop" sub="Windows & Mac" />
              <PlatformRow icon="📱" title="Mobile App" sub="iOS & Android" />

            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}>
              <a href="#" className="btn-solid">Explore Platforms <span>→</span></a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function PlatformRow({ icon, title, sub }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group"
      style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
    >
      <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center', transition: 'color 0.3s ease' }} className="group-hover:text-blue-500">
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{title}</div>
        <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>{sub}</div>
      </div>
    </motion.div>
  )
}
