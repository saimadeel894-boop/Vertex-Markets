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
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
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
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            background: 'linear-gradient(135deg, #2A2A2A, #000)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6L12 20L20 6"
                stroke="url(#v-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="v-grad" x1="4" y1="6" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF" />
                  <stop offset="1" stopColor="#888" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 17, fontWeight: 500, color: '#FFF', letterSpacing: '0.15em', lineHeight: 1 }}>VERTEX</div>
            <div style={{ fontSize: 8, fontWeight: 500, color: 'var(--text-secondary)', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 3 }}>MARKETS</div>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{ display: 'flex', alignItems: 'center', gap: 40, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden lg:flex"
        >
          {links.map(l => (
            <li key={l}>
              <a
                href="#"
                className="nav-link"
                style={{ fontSize: 14, color: '#D4D4D4', fontWeight: 400 }}
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
            style={{ padding: '8px 20px', fontSize: 13, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 6 }}
          >
            Login
          </a>
          <a
            href="#"
            className="btn-solid"
            style={{ padding: '8px 20px', fontSize: 13, borderRadius: 6 }}
          >
            Get Started
          </a>
        </div>

      </div>
    </nav>
  )
}
