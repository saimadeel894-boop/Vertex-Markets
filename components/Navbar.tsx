'use client'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = ['Trading', 'Platforms', 'Markets', 'Resources', 'Company', 'Partners']

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.10)' : '1px solid transparent',
        height: 68,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center',
        transition: 'all 0.4s ease',
      }}
    >
      <div
        className="container-padded"
        style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* Clean geometric V mark — no glow */}
          <div style={{
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              {/* Outer diamond/chevron shape */}
              <path
                d="M18 4 L32 18 L18 32 L4 18 Z"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                fill="none"
              />
              {/* Bold V chevron */}
              <path
                d="M9 12 L18 26 L27 12"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '0.12em', lineHeight: 1 }}>VERTEX</div>
            <div style={{ fontSize: 7.5, fontWeight: 500, color: '#6b7280', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 2 }}>MARKETS</div>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden lg:flex"
        >
          {links.map(l => (
            <li key={l}>
              <a
                href="#"
                className="nav-link"
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter', fontWeight: 400 }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#"
            className="btn-ghost hidden sm:inline-flex"
            style={{ padding: '9px 22px', fontSize: 14, borderColor: 'rgba(255,255,255,0.25)' }}
          >
            Login
          </a>
          <a
            href="#"
            className="btn-solid"
            style={{ padding: '9px 22px', fontSize: 14 }}
          >
            Get Started
          </a>
        </div>

      </div>
    </nav>
  )
}
