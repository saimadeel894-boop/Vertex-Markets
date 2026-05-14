'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = ['Trading', 'Platforms', 'Markets', 'Resources', 'Company', 'Partners']

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => scrollY.onChange(v => setIsScrolled(v > 40)), [scrollY])

  return (
    <nav
      style={{
        background: isScrolled ? 'rgba(0,0,0,0.95)' : '#000000',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        height: 84,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{ width: 32, height: 32, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21L2 3h20L12 21z" fill="#000"/></svg>
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
              <a href="#" style={{ color: '#fff', fontSize: 14, fontWeight: 400, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = '#9ca3af'}
                onMouseOut={e => e.currentTarget.style.color = '#fff'}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" style={{ padding: '10px 24px', fontSize: 14, fontWeight: 500, color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }} className="hidden sm:block">
            Login
          </a>
          <a href="#" style={{ padding: '10px 24px', fontSize: 14, fontWeight: 500, color: '#fff', background: '#2563eb', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s' }}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
