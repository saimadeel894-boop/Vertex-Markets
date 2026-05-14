'use client'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = ['Trading', 'Platforms', 'Markets', 'Resources', 'Company', 'Partners']

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => scrollY.onChange(v => setScrolled(v > 40)), [scrollY])

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.4)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
        height: 84,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{ position: 'relative' }}>
            <div className="animate-slow-pulse" style={{ position: 'absolute', inset: -4, background: '#2563eb', borderRadius: 8, filter: 'blur(8px)', opacity: 0.6 }} />
            <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #e8e8e8 0%, #a0a0a0 50%, #c8c8c8 100%)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
              <span style={{ fontSize: 20, fontWeight: 900, color: '#000', letterSpacing: '-0.05em' }}>V</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '0.02em' }}>VERTEX</div>
            <div style={{ fontSize: 8, fontWeight: 500, color: '#9ca3af', letterSpacing: '0.2em', textTransform: 'uppercase' }}>MARKETS</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: 'none', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="lg:flex">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="nav-link">{l}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" className="btn-ghost hidden sm:inline-flex" style={{ padding: '10px 24px', fontSize: 14 }}>
            Login
          </a>
          <a href="#" className="btn-solid" style={{ padding: '10px 24px', fontSize: 14 }}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
