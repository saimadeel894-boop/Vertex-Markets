'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1]

export default function Platforms() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 128px) 0', background: 'var(--background)', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'center',
        }}>

          {/* LEFT: Real platforms mockup image */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: 'blur(15px)', rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)', rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              src="/platforms-mockup.png"
              alt="Vertex Markets Trading Platforms - Web, Desktop and Mobile"
              width={640}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))',
              }}
              priority
            />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Eyebrow label */}
            <motion.div
            variants={{ hidden: { opacity: 0, x: 40, filter: 'blur(8px)' }, show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } } }}
              style={{
                color: '#737373',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              POWERFUL. FLEXIBLE. ADVANCED.
            </motion.div>

            {/* Heading */}
            <motion.h2
            variants={{ hidden: { opacity: 0, x: 40, filter: 'blur(8px)' }, show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } } }}
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              Trading Platforms<br />
              <span style={{ 
                background: 'linear-gradient(180deg, #FFFFFF, #737373)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                Built for Performance
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
            variants={{ hidden: { opacity: 0, x: 40, filter: 'blur(8px)' }, show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } } }}
              style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 40, maxWidth: 480 }}
            >
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </motion.p>

            {/* Platform rows -> mini cards in a row */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
              style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}
            >
              <PlatformCard
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>}
                title="Web"
                sub="Trader"
              />
              <PlatformCard
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
                title="Desktop"
                sub="App"
              />
              <PlatformCard
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}
                title="Mobile"
                sub="App"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
            >
              <a href="#" className="btn-solid" style={{ padding: '12px 24px', fontSize: 14 }}>
                Explore Platforms <span style={{ marginLeft: 8 }}>→</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function PlatformCard({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.2)' }}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12, 
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ color: '#FFF', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#FFF', lineHeight: 1 }}>{title}</div>
        <div style={{ fontSize: 11, color: '#737373', marginTop: 2 }}>{sub}</div>
      </div>
    </motion.div>
  )
}
