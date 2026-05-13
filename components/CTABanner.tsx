'use client'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section style={{ padding: '80px 48px 120px', background: '#080a0e' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
            borderRadius: 24,
            padding: '80px 80px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            alignItems: 'center',
            boxShadow: '0 40px 100px -20px rgba(30,58,138,0.4)',
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* Decorative glows */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '140%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 44, maxWidth: 460, lineHeight: 1.6 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
              <a
                href="#"
                className="bg-white text-blue-900 font-bold rounded-[8px] no-underline transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ padding: '18px 40px', fontSize: 15 }}
              >
                Get Started →
              </a>
              <a
                href="#"
                className="bg-transparent text-white/70 hover:text-white font-semibold no-underline transition-all duration-200"
                style={{ fontSize: 15 }}
              >
                or Try Demo Account
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 5, 0],
                rotateX: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}
            >
              <img 
                src="/v-logo-3d.png" 
                alt="Vertex Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5)) brightness(1.1)' 
                }} 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
