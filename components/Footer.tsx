'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(48px, 8vw, 80px) 0 36px' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(28px, 5vw, 48px)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 4 L32 18 L18 32 L4 18 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                  <path d="M9 12 L18 26 L27 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '0.12em', lineHeight: 1 }}>VERTEX</div>
                <div style={{ fontSize: 7.5, fontWeight: 500, color: '#6b7280', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 2 }}>MARKETS</div>
              </div>
            </a>
            <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, maxWidth: 260 }}>
              Empowering traders with institutional-grade technology, deep liquidity, and professional trading conditions.
            </p>
          </div>

          {/* Trading */}
          <FooterCol title="Trading" links={['Forex', 'Indices', 'Commodities', 'Cryptocurrencies', 'Shares']} />

          {/* Company */}
          <FooterCol title="Company" links={['About Us', 'Regulations', 'Contact', 'Partners', 'Careers']} />

          {/* Support */}
          <FooterCol title="Support" links={['Help Center', 'API Docs', 'System Status', 'Terms of Service', 'Privacy Policy']} />
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28 }}>
          <p style={{ fontSize: 11, color: '#4b5563', lineHeight: 1.8, marginBottom: 24 }}>
            <strong style={{ color: '#9ca3af' }}>Risk Warning:</strong> Trading leveraged products such as Forex and CFDs carries a high degree of risk to your capital and may not be suitable for all investors. Please ensure you fully understand the risks involved before trading. Past performance is not indicative of future results.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 12, color: '#4b5563' }}>
              © {year} Vertex Markets Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Twitter', 'LinkedIn', 'Telegram'].map(s => (
                <motion.a 
                  key={s} href="#" 
                  whileHover={{ scale: 1.1, color: '#fff', textShadow: '0 0 10px rgba(37,99,235,0.8)' }}
                  style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                >{s}</motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 20, letterSpacing: '0.05em' }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{ fontSize: 14, color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = '#6b7280'}
            >{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
