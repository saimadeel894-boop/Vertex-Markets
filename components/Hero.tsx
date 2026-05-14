'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', background: '#000000', display: 'flex', alignItems: 'center', paddingTop: 84, overflow: 'hidden' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* LEFT COLUMN 45% */}
          <div style={{ flex: '1 1 45%', minWidth: 320, paddingRight: 40, zIndex: 10 }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 64, fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: 24 }}
            >
              Trade Smarter.<br />Trade Vertex.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.6, maxWidth: 500, marginBottom: 40 }}
            >
              Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', gap: 16, marginBottom: 60, flexWrap: 'wrap' }}
            >
              <a href="#" style={{ padding: '16px 32px', background: '#2563eb', color: '#fff', borderRadius: 4, fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get Started <span>→</span>
              </a>
              <a href="#" style={{ padding: '16px 32px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: 4, fontWeight: 500, textDecoration: 'none' }}>
                Try Demo Account
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
            >
              <Stat icon="◎" title="Tight Spreads" sub="From 0.0 pips" />
              <Stat icon="⚡" title="Fast Execution" sub="< 30ms Average" />
              <Stat icon="🛡️" title="Secure & Regulated" sub="Global Compliance" />
              <Stat icon="🎧" title="24/7 Support" sub="Real Traders" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN 55% */}
          <div style={{ flex: '1 1 55%', position: 'relative', minHeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 40, marginTop: 'clamp(40px, 5vw, 0px)' }}>
            
            {/* Curved Glass Panel (Behind Bull) */}
            <div style={{
              position: 'absolute',
              bottom: 60,
              width: '90%',
              height: 400,
              backdropFilter: 'blur(10px)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50% 50% 0 0 / 20% 20% 0 0',
              zIndex: 1,
              overflow: 'hidden'
            }}>
              {/* Faint Candlestick Pattern */}
              <svg width="100%" height="100%" opacity="0.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M10 80v-20 M10 70h2v-10h-2z M20 60v-30 M20 50h2v-15h-2z M30 70v-40 M30 50h2v-10h-2z M40 30v-20 M40 25h2v-10h-2z M50 50v-30 M50 40h2v-15h-2z" stroke="#fff" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>

            {/* Chrome Platform */}
            <div style={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 400,
              height: 40,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, #555 0%, #111 100%)',
              boxShadow: '0 0 60px rgba(100,100,100,0.4)',
              zIndex: 2
            }} />

            {/* Bull Statue */}
            <div style={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Image src="/bull.png" alt="Bull Statue" width={400} height={350} priority style={{ height: 350, width: 'auto', objectFit: 'contain' }} />
            </div>

            {/* Floating Price Cards */}
            <PriceCard top="20%" left="5%" symbol="XAUUSD" price="2,384.65" change="+0.62%" up />
            <PriceCard top="15%" right="10%" symbol="EURUSD" price="1.08945" change="+0.47%" up />
            <PriceCard top="50%" right="0%" symbol="GBPUSD" price="1.27482" change="-0.30%" up={false} />

          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, title, sub }: { icon: string, title: string, sub: string }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{ color: '#fff', fontSize: 16, marginTop: 2 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{title}</div>
        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>{sub}</div>
      </div>
    </div>
  )
}

function PriceCard({ top, left, right, bottom, symbol, price, change, up }: any) {
  return (
    <div style={{
      position: 'absolute',
      top, left, right, bottom,
      background: 'rgba(13,13,13,0.8)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: '8px 12px',
      borderRadius: 4,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <div style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.05em' }}>{symbol}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{price}</div>
      <div style={{ fontSize: 10, color: up ? '#22c55e' : '#ef4444' }}>{change}</div>
    </div>
  )
}
