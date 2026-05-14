'use client'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section style={{ padding: '0 0 clamp(80px, 10vw, 140px)', background: '#000000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
            backgroundSize: '200% 200%',
            animation: 'bgShift 10s ease infinite',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            margin: '0 40px 80px 40px',
            padding: '60px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48,
            alignItems: 'center',
            boxShadow: '0 60px 120px -20px rgba(0,0,0,0.8)',
          }}
        >
          {/* Subtle animated gradient shift definition */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes bgShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}} />

          {/* Decorative blue glow pulse */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '140%', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} 
          />

          {/* Text Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 24 }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 460, lineHeight: 1.65 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '16px 32px', background: '#2563eb', color: '#fff', fontWeight: 600, borderRadius: 6, textDecoration: 'none', transition: 'all 0.3s ease' }}>
                Get Started <span>→</span>
              </a>
              <a href="#" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                onMouseOut={e  => (e.currentTarget.style.color = '#9ca3af')}
              >
                or Try Demo Account
              </a>
            </div>
          </div>

          {/* 3D V Logo */}
          <div style={{ position: 'relative', height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
