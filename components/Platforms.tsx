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
    <section ref={ref} style={{ padding: '160px 0', background: '#000000', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(60px, 10vw, 140px)', alignItems: 'center' }}>
          
          {/* LEFT SIDE: Detailed Mockups */}
          <div style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1500 }}>
            <motion.div style={{ width: '100%', height: '100%', position: 'relative', rotateX, rotateY, transformStyle: 'preserve-3d', display: 'flex', justifyContent: 'center' }}>
              
              {/* Laptop Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}
                style={{ 
                  position: 'absolute', width: '100%', maxWidth: 540, height: 340, 
                  background: '#1a1a1a', 
                  border: '2px solid #444',
                  borderRadius: 10, padding: 6,
                  left: '0%', top: '0%', display: 'flex', flexDirection: 'column',
                  boxShadow: '0 50px 100px rgba(0,0,0,0.9)',
                  transform: 'rotateY(-6deg) rotateX(4deg)'
                }}
              >
                {/* Screen Content (Detailed UI) */}
                <div style={{ flex: 1, background: '#080808', borderRadius: '6px 6px 0 0', padding: 0, overflow: 'hidden', position: 'relative', display: 'flex' }}>
                  {/* Sidebar */}
                  <div style={{ width: '20%', borderRight: '1px solid #222', padding: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ width: '100%', height: 4, background: '#333', borderRadius: 1 }} />
                    <div style={{ width: '80%', height: 4, background: '#222', borderRadius: 1 }} />
                    <div style={{ width: '90%', height: 4, background: '#222', borderRadius: 1 }} />
                    <div style={{ flex: 1 }} />
                    <div style={{ width: '40%', height: 4, background: '#333', borderRadius: 1 }} />
                  </div>
                  {/* Main Chart area */}
                  <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#333' }} />
                        <div style={{ width: 40, height: 8, background: '#222', borderRadius: 2, marginTop: 2 }} />
                      </div>
                      <div style={{ width: 60, height: 8, background: '#222', borderRadius: 2, marginTop: 2 }} />
                    </div>
                    <svg width="100%" height="80%" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <motion.path d="M0 70 L10 65 L20 80 L30 40 L40 50 L50 30 L60 45 L70 15 L80 35 L90 20 L100 10" stroke="#2563eb" strokeWidth="1.5" fill="none" 
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease }}
                      />
                      <motion.path d="M0 80 L10 75 L20 85 L30 60 L40 65 L50 50 L60 65 L70 40 L80 50 L90 45 L100 35" stroke="#333" strokeWidth="1" fill="none" opacity="0.5" />
                    </svg>
                  </div>
                </div>
                {/* Keyboard area */}
                <div style={{ height: 28, background: '#0a0a0a', borderRadius: '0 0 6px 6px', borderTop: '2px solid #333' }} />
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: 0.15 }}
                style={{
                  position: 'absolute', width: 150, height: 300,
                  background: '#1a1a1a',
                  border: '2px solid #555',
                  borderRadius: 22, padding: 5,
                  right: '5%', bottom: '5%',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
                  transform: 'translateZ(60px)'
                }}
              >
                <div style={{ width: '100%', height: '100%', background: '#080808', borderRadius: 18, padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ width: '35%', height: 4, background: '#333', margin: '0 auto 8px auto', borderRadius: 2 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ width: 30, height: 6, background: '#222', borderRadius: 1 }} />
                      <div style={{ width: 20, height: 6, background: '#2563eb', borderRadius: 1 }} />
                    </div>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} style={{ width: '100%', height: 16, background: '#111', borderRadius: 2 }} />
                    ))}
                    <div style={{ flex: 1 }} />
                    <svg width="100%" height="60" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <motion.path d="M0 60 L20 40 L40 50 L60 20 L80 30 L100 10" stroke="#2563eb" strokeWidth="2.5" fill="none"
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
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ color: '#2563eb', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 18 }}>
              POWERFUL. FLEXIBLE. ADVANCED.
            </motion.div>
            <motion.h2 variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ fontSize: 44, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.01em' }}>
              Trading Platforms Built for Performance
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.6, marginBottom: 44, maxWidth: 500 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
              
              <PlatformRow icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              } title="Web Trader" sub="Access Anywhere" />
              
              <PlatformRow icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              } title="Desktop" sub="Windows & Mac" />
              
              <PlatformRow icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              } title="Mobile App" sub="iOS & Android" />

            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}>
              <a href="#" className="btn-solid" style={{ padding: '16px 36px' }}>Explore Platforms <span>→</span></a>
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
      whileHover={{ x: 6 }}
      style={{ display: 'flex', alignItems: 'center', gap: 18, cursor: 'pointer' }}
    >
      <div style={{ color: '#fff', width: 20, textAlign: 'center' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>{title}</div>
        <div style={{ fontSize: 14, color: '#6b7280', marginTop: 3 }}>{sub}</div>
      </div>
    </motion.div>
  )
}
