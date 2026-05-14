'use client'

const ads = [
  { 
    title: 'Institutional-Grade Liquidity',     
    desc: 'Deep liquidity from Tier-1 providers ensuring minimal slippage and maximum stability.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="silver-grad" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#E0E0E0" />
            <stop offset="50%" stopColor="#A0A0A0" />
            <stop offset="100%" stopColor="#606060" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.8"/>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          {/* Bar Chart */}
          <rect x="20" y="70" width="16" height="30" fill="url(#silver-grad)" />
          <rect x="42" y="50" width="16" height="50" fill="url(#silver-grad)" />
          <rect x="64" y="30" width="16" height="70" fill="url(#silver-grad)" />
          <rect x="86" y="10" width="16" height="90" fill="url(#silver-grad)" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Ultra-Fast Execution',              
    desc: 'Average execution speed under 30ms with no dealing desk interference.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          {/* Speedometer */}
          <circle cx="60" cy="60" r="45" fill="none" stroke="url(#silver-grad)" strokeWidth="8" />
          <path d="M30 60 A 30 30 0 0 1 90 60" fill="none" stroke="url(#silver-grad)" strokeWidth="4" strokeDasharray="4 8" />
          <circle cx="60" cy="60" r="6" fill="#fff" />
          <line x1="60" y1="60" x2="40" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Security You Can Trust',            
    desc: 'Segregated client funds, advanced encryption, and global regulatory oversight.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          {/* Shield */}
          <path d="M60 10 L20 25 V55 C20 80 40 95 60 110 C80 95 100 80 100 55 V25 L60 10 Z" fill="url(#silver-grad)" />
          <path d="M60 20 L30 32 V55 C30 75 45 85 60 95 C75 85 90 75 90 55 V32 L60 20 Z" fill="#000" />
          <path d="M60 20 L30 32 V55 C30 75 45 85 60 95" fill="url(#silver-grad)" opacity="0.3" />
        </g>
      </svg>
    )
  },
  { 
    title: 'Professional Trading Conditions',   
    desc: 'Raw spreads, flexible leverage, and low commissions built for serious performance.',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <g filter="url(#shadow)">
          {/* Server Stack */}
          <rect x="20" y="20" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <rect x="20" y="50" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <rect x="20" y="80" width="80" height="20" rx="4" fill="url(#silver-grad)" />
          <circle cx="85" cy="30" r="3" fill="#000" />
          <circle cx="85" cy="60" r="3" fill="#000" />
          <circle cx="85" cy="90" r="3" fill="#000" />
        </g>
      </svg>
    )
  },
]

export default function Advantages() {
  return (
    <section style={{ padding: '100px 0', background: '#000000' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 400, color: '#fff' }}>
            <span style={{ color: '#9ca3af' }}>Advantages Built for </span>
            <span style={{ fontWeight: 700 }}>Serious Traders</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {ads.map((ad) => (
            <div key={ad.title} style={{
              background: '#0d0d0d',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              padding: 32,
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
                {ad.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{ad.title}</h3>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.6 }}>{ad.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
