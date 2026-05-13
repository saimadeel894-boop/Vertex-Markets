'use client'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0 clamp(80px, 10vw, 140px)', background: '#000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #111 0%, #000 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'clamp(20px, 3vw, 36px)',
            padding: 'clamp(40px, 6vw, 90px) clamp(28px, 6vw, 90px)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48,
            alignItems: 'center',
            boxShadow: '0 60px 120px -20px rgba(0,0,0,0.8)',
          }}
        >
          {/* Decorative glow */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '140%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          {/* Text Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
              Elevate Your<br />Trading Potential.
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.55)', marginBottom: 40, maxWidth: 460, lineHeight: 1.65, fontWeight: 400 }}>
              Join Vertex Markets today and access institutional infrastructure designed for high-performance trading.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a href="#" className="btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', padding: 'clamp(14px,1.5vw,18px) clamp(28px,3vw,44px)', background: '#fff', color: '#000', fontWeight: 800, fontSize: 'clamp(13px,1.2vw,15px)', borderRadius: 12, textDecoration: 'none', transition: 'all 0.3s ease' }}>
                START TRADING NOW
              </a>
              <a href="#" style={{ fontSize: 'clamp(13px,1.2vw,15px)', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e  => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* 3D V Logo — hidden on very small screens */}
          <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 400px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              animate={{ y: [0, -18, 0], rotateZ: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', maxWidth: 320 }}
            >
              <img src="/v-logo-3d.png" alt="Vertex 3D" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6)) brightness(1.15)' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
