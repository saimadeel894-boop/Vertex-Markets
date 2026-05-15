'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1]

export default function Platforms() {
  return (
    <section style={{ padding: '120px 0', background: '#000000', overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'center',
        }}>

          {/* LEFT: Real platforms mockup image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
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
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
              style={{
                color: '#1456ff',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              POWERFUL. FLEXIBLE. ADVANCED.
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 20,
                letterSpacing: '-0.01em',
              }}
            >
              Trading Platforms<br />Built for Performance
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
              style={{ fontSize: 16, color: '#a1a1aa', lineHeight: 1.6, marginBottom: 40, maxWidth: 480 }}
            >
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </motion.p>

            {/* Platform rows */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 44 }}
            >
              <PlatformRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                }
                title="Web Trader"
                sub="Access Anywhere"
              />
              <PlatformRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                }
                title="Desktop"
                sub="Windows & Mac"
              />
              <PlatformRow
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                }
                title="Mobile App"
                sub="iOS & Android"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
            >
              <a href="#" className="btn-solid" style={{ padding: '14px 32px', fontSize: 15 }}>
                Explore Platforms <span>→</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function PlatformRow({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
    >
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>{title}</div>
        <div style={{ fontSize: 13, color: '#666666', marginTop: 2 }}>{sub}</div>
      </div>
    </motion.div>
  )
}
