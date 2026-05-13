'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(48px, 8vw, 80px) 0 36px' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(28px, 5vw, 48px)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, background: '#fff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#000', letterSpacing: '-0.05em', fontFamily: 'Inter, sans-serif' }}>V</span>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>VERTEX</div>
                <div style={{ fontSize: 7, fontWeight: 700, color: '#4b5563', letterSpacing: '0.3em', textTransform: 'uppercase' }}>MARKETS</div>
              </div>
            </a>
            <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, maxWidth: 240 }}>
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
          <p style={{ fontSize: 11, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            <strong style={{ color: '#4b5563' }}>Risk Warning:</strong> Trading leveraged products such as Forex and CFDs carries a high degree of risk to your capital and may not be suitable for all investors. Please ensure you fully understand the risks involved before trading. Past performance is not indicative of future results.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 12, color: '#374151' }}>
              © {year} Vertex Markets Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Twitter', 'LinkedIn', 'Telegram'].map(s => (
                <a key={s} href="#" style={{ fontSize: 12, color: '#374151', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                  onMouseOut={e  => (e.currentTarget.style.color = '#374151')}
                >{s}</a>
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
      <h4 style={{ fontSize: 11, fontWeight: 800, color: '#fff', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(l => (
          <li key={l}>
            <a href="#" style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e  => (e.currentTarget.style.color = '#4b5563')}
            >{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
