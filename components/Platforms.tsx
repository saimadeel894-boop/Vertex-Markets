'use client'

export default function Platforms() {
  return (
    <section style={{ padding: '80px 0', background: '#000000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'center' }}>
          
          {/* LEFT SIDE: Mockups */}
          <div style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Laptop Mockup */}
            <div style={{ 
              position: 'absolute', 
              width: 500, height: 320, 
              background: '#0d0d0d', 
              border: '2px solid #222', 
              borderRadius: '12px 12px 0 0', 
              left: '5%', top: '10%',
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}>
              {/* Screen Content */}
              <div style={{ flex: 1, padding: 16, borderBottom: '16px solid #111' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 60, height: 12, background: '#333', borderRadius: 2 }} />
                  <div style={{ width: 120, height: 12, background: '#333', borderRadius: 2 }} />
                </div>
                <svg width="100%" height="80%" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 80 L10 60 L20 70 L40 30 L50 40 L60 20 L80 50 L100 10" stroke="#2563eb" strokeWidth="2" fill="none" />
                </svg>
              </div>
              {/* Laptop base */}
              <div style={{ height: 16, background: 'linear-gradient(to bottom, #444, #111)', borderRadius: '0 0 12px 12px', borderTop: '1px solid #666' }} />
            </div>

            {/* Phone Mockup */}
            <div style={{
              position: 'absolute',
              width: 160, height: 320,
              background: '#0a0a0a',
              border: '4px solid #333',
              borderRadius: 24,
              right: '10%', bottom: '5%',
              transform: 'rotate(-5deg)',
              boxShadow: '-10px 20px 40px rgba(0,0,0,0.9)',
              padding: 12
            }}>
              <div style={{ width: '40%', height: 4, background: '#222', margin: '0 auto 12px auto', borderRadius: 2 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                <div style={{ width: '100%', height: 40, background: '#1a1a1a', borderRadius: 4 }} />
                <svg width="100%" height="100" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 60 L20 40 L40 50 L60 20 L80 30 L100 10" stroke="#22c55e" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            {/* Silver/chrome reflection floor */}
            <div style={{ position: 'absolute', bottom: 10, width: '80%', height: 4, background: 'linear-gradient(90deg, transparent, #888, transparent)', filter: 'blur(2px)' }} />

          </div>

          {/* RIGHT SIDE: Content */}
          <div style={{ paddingRight: 'clamp(0px, 4vw, 40px)' }}>
            <div style={{ color: '#2563eb', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
              POWERFUL. FLEXIBLE. ADVANCED.
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Trading Platforms Built for Performance
            </h2>
            <p style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40 }}>
              Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>🌐</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Web Trader</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>Access Anywhere</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>🖥️</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Desktop</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>Windows & Mac</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ color: '#fff', fontSize: 24, width: 24, textAlign: 'center' }}>📱</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Mobile App</div>
                  <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 2 }}>iOS & Android</div>
                </div>
              </div>

            </div>

            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: '#2563eb', color: '#fff', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
              Explore Platforms <span>→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
