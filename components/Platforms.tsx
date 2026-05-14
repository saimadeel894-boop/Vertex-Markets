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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(60px, 8vw, 120px)', alignItems: 'center' }}>
          
          {/* LEFT SIDE: Mockups */}
          <div style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 1200 }}>
            
            <motion.div style={{ width: '100%', height: '100%', position: 'relative', rotateX, rotateY, transformStyle: 'preserve-3d', display: 'flex', justifyContent: 'center' }}>
              
              {/* Laptop Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}
                style={{ 
                  position: 'absolute', width: '100%', maxWidth: 500, height: 320, 
                  background: '#222', 
                  border: '2px solid #555',
                  borderRadius: 8, padding: 4,
                  left: '5%', top: '10%', display: 'flex', flexDirection: 'column',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
                  transform: 'rotateY(-5deg) rotateX(3deg)'
                }}
              >
                {/* Screen Content */}
                <div style={{ flex: 1, background: '#0a0a0a', borderRadius: '4px 4px 0 0', padding: 16, overflow: 'hidden', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ width: 60, height: 8, background: '#333', borderRadius: 2 }} />
                    <div style={{ width: 120, height: 8, background: '#333', borderRadius: 2 }} />
                  </div>
                  <svg width="100%" height="80%" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <motion.path d="M0 80 L10 60 L20 70 L40 30 L50 40 L60 20 L80 50 L100 10" stroke="#444" strokeWidth="2" fill="none" 
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5, ease }}
                    />
                  </svg>
                </div>
                {/* Laptop base / Keyboard area */}
                <div style={{ height: 24, background: '#111', borderRadius: '0 0 4px 4px', borderTop: '2px solid #333' }} />
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: 0.15 }}
                style={{
                  position: 'absolute', width: 140, height: 280,
                  background: '#222',
                  border: '2px solid #666',
                  borderRadius: 20, padding: 4,
                  right: '5%', bottom: '5%',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                  transform: 'translateZ(40px)'
                }}
              >
                <div style={{ width: '100%', height: '100%', background: '#0a0a0a', borderRadius: 16, padding: 12 }}>
                  <div style={{ width: '40%', height: 4, background: '#444', margin: '0 auto 12px auto', borderRadius: 2 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                    <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                    <svg width="100%" height="100" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <motion.path d="M0 60 L20 40 L40 50 L60 20 L80 30 L100 10" stroke="#555" strokeWidth="3" fill="none"
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

            <motion.div variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              
              <PlatformRow icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              } title="Web Trader" sub="Access Anywhere" />
              
              <PlatformRow icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              } title="Desktop" sub="Windows & Mac" />
              
              <PlatformRow icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              } title="Mobile App" sub="iOS & Android" />

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
      <div style={{ color: '#9ca3af', width: 20, textAlign: 'center', transition: 'color 0.3s ease' }} className="group-hover:text-blue-500">
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{title}</div>
        <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{sub}</div>
      </div>
    </motion.div>
  )
}
