'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#05070a', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 48px 40px' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-60">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3 no-underline">
              <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>V</span>
              </div>
              <div className="leading-tight">
                <div className="text-[16px] font-black tracking-tight text-white">VERTEX</div>
                <div className="text-[8px] font-bold tracking-[0.3em] text-brand-muted uppercase">MARKETS</div>
              </div>
            </a>
            <p style={{ fontSize: 13, color: '#a0aab8', lineHeight: 1.6, maxWidth: 240 }}>
              Empowering traders with institutional-grade technology, deep liquidity, and a professional trading environment.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Trading</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Forex', 'Indices', 'Commodities', 'Cryptocurrencies', 'Shares'].map(link => (
                <li key={link}><a href="#" style={{ fontSize: 13, color: '#6b7585', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#6b7585'}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About Us', 'Regulations', 'Contact', 'Partners', 'Careers'].map(link => (
                <li key={link}><a href="#" style={{ fontSize: 13, color: '#6b7585', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#6b7585'}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#fff', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Help Center', 'API Documentation', 'System Status', 'Terms of Service', 'Privacy Policy'].map(link => (
                <li key={link}><a href="#" style={{ fontSize: 13, color: '#6b7585', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#6b7585'}>{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 40, marginTop: 40 }}>
          <p style={{ fontSize: 11, color: '#4b5563', lineHeight: 1.8, marginBottom: 24 }}>
            <strong style={{ color: '#9ca3af' }}>Risk Warning:</strong> Trading leveraged products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary, seek independent advice. Please read the full Risk Disclosure.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <p style={{ fontSize: 12, color: '#6b7585', margin: 0 }}>
              &copy; {currentYear} Vertex Markets Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Twitter', 'LinkedIn', 'Telegram'].map(soc => (
                <a key={soc} href="#" style={{ fontSize: 12, color: '#6b7585', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#6b7585'}>{soc}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
