'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--background)', borderTop: '1px solid var(--border)', padding: 'clamp(48px, 8vw, 80px) 0 36px' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(28px, 5vw, 48px)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #2A2A2A, #000)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6L12 20L20 6" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 17, fontWeight: 500, color: '#FFF', letterSpacing: '0.15em', lineHeight: 1 }}>VERTEX</div>
                <div style={{ fontSize: 8, fontWeight: 500, color: '#737373', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 3 }}>MARKETS</div>
              </div>
            </a>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 260 }}>
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
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 28 }}>
          <p style={{ fontSize: 10, color: '#525252', lineHeight: 1.8, marginBottom: 24 }}>
            <strong style={{ color: '#737373' }}>Risk Warning:</strong> Trading leveraged products such as Forex and CFDs carries a high degree of risk to your capital and may not be suitable for all investors. Please ensure you fully understand the risks involved before trading. Past performance is not indicative of future results.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              © {year} Vertex Markets Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Twitter', 'LinkedIn', 'Telegram'].map(s => (
                <motion.a 
                  key={s} href="#" 
                  whileHover={{ scale: 1.1, color: 'var(--text-primary)', textShadow: '0 0 10px var(--primary-glow)' }}
                  style={{ fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
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
      <h4 style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20, letterSpacing: '0.05em' }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
