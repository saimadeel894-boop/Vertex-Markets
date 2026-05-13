'use client'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section style={{ padding: '70px 48px 100px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'linear-gradient(135deg, #0d1117 0%, #111827 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '60px 64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 40,
            position: 'relative',
            overflow: 'hidden',
            flexWrap: 'wrap',
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute', top: '-30%', right: '-5%',
              width: 380, height: 380,
              background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Text */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 15, color: '#a0aab8', maxWidth: 460, lineHeight: 1.65 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative', zIndex: 1 }}>
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px', fontSize: 14.5, fontWeight: 700,
                color: '#fff', background: '#2563eb', borderRadius: 8,
                textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'all .2s',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#1d4ed8'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = '#2563eb'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Get Started
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              style={{ fontSize: 14, fontWeight: 600, color: '#a0aab8', textDecoration: 'none', transition: 'color .2s' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = '#a0aab8' }}
            >
              or Try Demo Account
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
