'use client'

const regulators = ['FCA', 'ASIC', 'FSCA', 'CySEC', 'DFSA']

export default function TrustBar() {
  return (
    <section style={{ background: '#000000', padding: '40px 0' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          padding: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24
        }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: '#6b7585', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            TRUSTED BY TRADERS. REGULATED BY AUTHORITIES.
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap' }}>
            {regulators.map(r => (
              <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.8, filter: 'grayscale(100%) brightness(200%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#fff' }}>
                  {r === 'FCA' && <path d="M12 2L2 22h20L12 2z" />}
                  {r === 'ASIC' && <rect x="3" y="3" width="18" height="18" rx="2" />}
                  {r === 'FSCA' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  {r === 'CySEC' && <circle cx="12" cy="12" r="10" />}
                  {r === 'DFSA' && <path d="M4 4h16v16H4z M12 8v8 M8 12h8" />}
                </svg>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
