'use client'

export default function CTABanner() {
  return (
    <section style={{ background: '#000000', paddingBottom: 40 }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          background: '#0d0d0d',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 16,
          margin: '0 40px 80px 40px',
          padding: 60,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 60,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* LEFT SIDE */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Ready to Elevate Your Trading?
            </h2>
            <p style={{ fontSize: 16, color: '#9ca3af', lineHeight: 1.6, marginBottom: 40, maxWidth: 440 }}>
              Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
              <a href="#" style={{ padding: '16px 32px', background: '#2563eb', color: '#fff', borderRadius: 6, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get Started <span>→</span>
              </a>
              <a href="#" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none', fontWeight: 500 }}>
                or Try Demo Account
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ position: 'relative', height: 320, display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: 1200 }}>
            <div style={{
              width: 200,
              height: 400,
              background: '#0a0a0a',
              border: '6px solid',
              borderImage: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%) 1',
              borderRadius: 24, /* Note: border-image doesn't play well with border-radius, will use a wrapper trick below instead */
              display: 'none'
            }} />

            {/* Silver Phone Mockup */}
            <div style={{
              width: 180,
              height: 360,
              background: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%)',
              borderRadius: 24,
              padding: 4,
              transform: 'rotateY(-25deg) rotateX(15deg) rotateZ(5deg)',
              boxShadow: '-20px 40px 60px rgba(0,0,0,0.8), inset 2px 2px 5px rgba(255,255,255,0.8)',
            }}>
              <div style={{ width: '100%', height: '100%', background: '#0d0d0d', borderRadius: 20, padding: 12, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
                <div style={{ width: '40%', height: 4, background: '#333', margin: '0 auto 8px auto', borderRadius: 2 }} />
                
                {/* Fake trading UI */}
                <div style={{ width: '100%', height: 60, background: '#1a1a1a', borderRadius: 6 }} />
                <div style={{ width: '100%', height: 120, background: '#1a1a1a', borderRadius: 6, position: 'relative' }}>
                  <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
                    <path d="M0 80 L20 60 L40 70 L60 40 L80 50 L100 20" stroke="#2563eb" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div style={{ width: '100%', height: 40, background: '#2563eb', borderRadius: 6, marginTop: 'auto' }} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
