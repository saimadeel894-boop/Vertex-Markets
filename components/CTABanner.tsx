'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section style={{ padding: '100px 48px 140px', background: '#05070a' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
            borderRadius: 40,
            padding: '100px 100px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            alignItems: 'center',
            boxShadow: '0 60px 120px -20px rgba(30,58,138,0.5)',
            perspective: '1500px',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* Volumetric Internal Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] width-[60%] height-[140%] bg-white/10 blur-[80px] rounded-full" />
            <div className="absolute bottom-[-20%] left-[-10%] width-[40%] height-[100%] bg-blue-400/20 blur-[100px] rounded-full" />
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(50px)' }}>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 950, color: '#fff', lineHeight: 0.95, marginBottom: 32, letterSpacing: '-0.04em' }}>
              Elevate Your<br />
              Trading Potential.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 50, maxWidth: 480, lineHeight: 1.6, fontWeight: 500 }}>
              Join Vertex Markets today and access institutional infrastructure designed for high-performance trading.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
              <a
                href="#"
                className="group relative bg-white text-blue-950 font-black rounded-xl no-underline transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)]"
                style={{ padding: '20px 48px', fontSize: 16 }}
              >
                START TRADING NOW
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white font-bold no-underline transition-all duration-200 flex items-center gap-2"
                style={{ fontSize: 16 }}
              >
                Learn More
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', height: 450, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateZ(100px)' }}>
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/v-logo-3d.png" 
                alt="Vertex 3D" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6)) brightness(1.2)' 
                }} 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
