'use client'

const pairs = [
  { symbol: 'EURUSD', price: '1.08945', change: '+0.47%', up: true },
  { symbol: 'GBPUSD', price: '1.27482', change: '+0.35%', up: true },
  { symbol: 'XAUUSD', price: '2,384.65', change: '+0.62%', up: true },
  { symbol: 'USDJPY', price: '156.743', change: '-0.21%', up: false },
  { symbol: 'BTCUSD', price: '67,842.10', change: '+1.08%', up: true },
  { symbol: 'USOIL',  price: '78.245', change: '-0.15%', up: false },
]

export default function Ticker() {
  return (
    <div style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 0 }}>
          {pairs.map((p, i) => (
            <div key={p.symbol} style={{
              padding: '16px 20px',
              borderRight: i < pairs.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{p.symbol}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{p.price}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: p.up ? '#22c55e' : '#ef4444' }}>{p.change}</span>
              </div>

              {/* Blue sparkline below */}
              <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none">
                <path 
                  d={p.up ? 'M0,12 L20,8 L40,10 L60,4 L80,6 L100,0' : 'M0,0 L20,4 L40,2 L60,10 L80,8 L100,12'} 
                  stroke="#2563eb" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
